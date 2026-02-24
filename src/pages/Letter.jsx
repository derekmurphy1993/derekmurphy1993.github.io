/* eslint-disable react/no-unknown-property */
import { useMemo, useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import PropTypes from "prop-types";
import { Plane, Quaternion, Vector3 } from "three";
import {
	BOARD_HALF_HEIGHT,
	BOARD_HALF_WIDTH,
	BOARD_POSITION,
	BOARD_ROTATION,
	LETTER_SURFACE_Z,
	NUM_RIBS,
	getRibLocalY,
} from "./boardConfig";

const RIB_SNAP_DISTANCE = 0.24;
const BOARD_ATTACH_DISTANCE = 0.28;
const LETTER_X_PADDING = 0.2;
const LETTER_SPACING = 0.36;

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

function DraggableLetter({
	char,
	position,
	boardQuaternion,
	boardInverseQuaternion,
	ribsLocalY,
	onDragStateChange,
}) {
	const bodyRef = useRef(null);
	const [dragging, setDragging] = useState(false);
	const dragPlane = useMemo(() => new Plane(), []);
	const dragPoint = useMemo(() => new Vector3(), []);
	const boardNormal = useMemo(
		() => new Vector3(0, 0, 1).applyQuaternion(boardQuaternion).normalize(),
		[boardQuaternion],
	);
	const boardRotation = useMemo(
		() => ({
			x: boardQuaternion.x,
			y: boardQuaternion.y,
			z: boardQuaternion.z,
			w: boardQuaternion.w,
		}),
		[boardQuaternion],
	);
	const boardEulerRotation = useMemo(
		() => [BOARD_ROTATION.x, BOARD_ROTATION.y, BOARD_ROTATION.z],
		[],
	);

	const moveToPointerPoint = (worldPoint) => {
		if (!bodyRef.current) return;
		bodyRef.current.setNextKinematicTranslation({
			x: worldPoint.x,
			y: worldPoint.y,
			z: worldPoint.z,
		});
		bodyRef.current.setNextKinematicRotation(boardRotation);
	};

	const handlePointerDown = (e) => {
		e.stopPropagation();
		if (!bodyRef.current) return;
		e.target.setPointerCapture(e.pointerId);
		setDragging(true);
		onDragStateChange(true);
		bodyRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
		bodyRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
		bodyRef.current.setBodyType("kinematicPosition", true);
		bodyRef.current.setNextKinematicRotation(boardRotation);

		const dragOffset = boardNormal.clone().multiplyScalar(LETTER_SURFACE_Z);
		const dragOrigin = BOARD_POSITION.clone().add(dragOffset);
		dragPlane.setFromNormalAndCoplanarPoint(boardNormal, dragOrigin);
	};

	const handlePointerMove = (e) => {
		if (!dragging) return;
		e.stopPropagation();
		if (!e.ray?.intersectPlane(dragPlane, dragPoint)) return;
		moveToPointerPoint(dragPoint);
	};

	const handlePointerUp = (e) => {
		e.stopPropagation();
		setDragging(false);
		onDragStateChange(false);
		if (!bodyRef.current) return;
		e.target?.releasePointerCapture?.(e.pointerId);

		const current = bodyRef.current.translation();
		const worldPoint = new Vector3(current.x, current.y, current.z);
		const boardLocal = worldPoint
			.clone()
			.sub(BOARD_POSITION)
			.applyQuaternion(boardInverseQuaternion);

		const nearestRib = ribsLocalY.reduce(
			(best, ribY) => {
				const distance = Math.abs(boardLocal.y - ribY);
				return distance < best.distance ? { ribY, distance } : best;
			},
			{ ribY: ribsLocalY[0], distance: Number.POSITIVE_INFINITY },
		);

		const insideBoardX = Math.abs(boardLocal.x) <= BOARD_HALF_WIDTH + 0.2;
		const insideBoardY = Math.abs(boardLocal.y) <= BOARD_HALF_HEIGHT + 0.2;
		const nearBoardSurface = Math.abs(boardLocal.z - LETTER_SURFACE_Z) <= BOARD_ATTACH_DISTANCE;
		const shouldSnap = insideBoardX && insideBoardY && nearBoardSurface;

		if (shouldSnap && nearestRib.distance <= RIB_SNAP_DISTANCE) {
			const snappedLocal = new Vector3(
				clamp(
					boardLocal.x,
					-BOARD_HALF_WIDTH + LETTER_X_PADDING,
					BOARD_HALF_WIDTH - LETTER_X_PADDING,
				),
				nearestRib.ribY,
				LETTER_SURFACE_Z,
			);
			const snappedWorld = snappedLocal.applyQuaternion(boardQuaternion).add(BOARD_POSITION);
			bodyRef.current.setNextKinematicTranslation({
				x: snappedWorld.x,
				y: snappedWorld.y,
				z: snappedWorld.z,
			});
			bodyRef.current.setNextKinematicRotation(boardRotation);
			bodyRef.current.setBodyType("fixed", true);
			return;
		}

		bodyRef.current.setBodyType("dynamic", true);
		bodyRef.current.setRotation(boardRotation, true);
		bodyRef.current.setLinvel({ x: 0, y: -0.25, z: 0 }, true);
		bodyRef.current.wakeUp();
	};

	return (
		<RigidBody
			ref={bodyRef}
			colliders="cuboid"
			type="fixed"
			position={position}
			rotation={boardEulerRotation}
		>
			<mesh
				onPointerDown={handlePointerDown}
				onPointerMove={handlePointerMove}
				onPointerUp={handlePointerUp}
				onPointerCancel={handlePointerUp}
			>
				<planeGeometry args={[0.48, 0.72]} />
				<meshBasicMaterial transparent opacity={0} side={2} depthWrite={false} />
			</mesh>
			<Text fontSize={0.55} color="white" anchorX="center" anchorY="middle">
				{char}
			</Text>
		</RigidBody>
	);
}

DraggableLetter.propTypes = {
	char: PropTypes.string.isRequired,
	position: PropTypes.arrayOf(PropTypes.number).isRequired,
	boardQuaternion: PropTypes.instanceOf(Quaternion).isRequired,
	boardInverseQuaternion: PropTypes.instanceOf(Quaternion).isRequired,
	ribsLocalY: PropTypes.arrayOf(PropTypes.number).isRequired,
	onDragStateChange: PropTypes.func,
};

DraggableLetter.defaultProps = {
	onDragStateChange: () => {},
};

export default function Letter({ onDragStateChange }) {
	const boardQuaternion = useMemo(() => new Quaternion().setFromEuler(BOARD_ROTATION), []);
	const boardInverseQuaternion = useMemo(() => boardQuaternion.clone().invert(), [boardQuaternion]);
	const ribsLocalY = useMemo(
		() => Array.from({ length: NUM_RIBS }, (_, i) => getRibLocalY(i)),
		[],
	);

	const worldFromBoardLocal = (x, y, z = LETTER_SURFACE_Z) =>
		new Vector3(x, y, z).applyQuaternion(boardQuaternion).add(BOARD_POSITION);

	const wordToLetters = (word, ribIndex) => {
		const ribY = ribsLocalY[ribIndex];
		const startX = -((word.length - 1) * LETTER_SPACING) / 2;
		return word.split("").map((char, i) => {
			const worldPos = worldFromBoardLocal(startX + i * LETTER_SPACING, ribY);
			return (
				<DraggableLetter
					key={`${word}-${i}`}
					char={char}
					position={[worldPos.x, worldPos.y, worldPos.z]}
					boardQuaternion={boardQuaternion}
					boardInverseQuaternion={boardInverseQuaternion}
					ribsLocalY={ribsLocalY}
					onDragStateChange={onDragStateChange}
				/>
			);
		});
	};

	return (
		<group>
			{wordToLetters("Derek Murphy", 6)}
			{wordToLetters("Software Dev", 3)}
			{wordToLetters("Chicago, IL", 1)}
		</group>
	);
}

Letter.propTypes = {
	onDragStateChange: PropTypes.func,
};

Letter.defaultProps = {
	onDragStateChange: () => {},
};
