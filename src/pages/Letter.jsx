/* eslint-disable react/no-unknown-property */
import { useMemo, useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, Vector3 } from "three";

export default function Letter() {
	const boardHeight = 6;
	const numLines = 8;
	const lineSpacing = boardHeight / (numLines + 1);

	const boardRotation = new Euler(-Math.PI / 1, -0.05, 0);
	const boardPosition = new Vector3(0, boardHeight / 2 + 0.6, 4.5);

	const snapThreshold = 0.15;

	const ribs = useMemo(() => {
		return Array.from({ length: numLines }, (_, i) => {
			const y = -(i + 1) * lineSpacing;
			const pos = new Vector3(0, y, 0).applyEuler(boardRotation).add(boardPosition);
			return pos;
		});
	}, []);

	// eslint-disable-next-line react/prop-types
	function Letter({ char, position }) {
		const ref = useRef();
		const [dragging, setDragging] = useState(false);

		const handlePointerDown = (e) => {
			e.stopPropagation();
			setDragging(true);
			ref.current.setBodyType("kinematicPosition");
		};

		const handlePointerUp = () => {
			setDragging(false);

			const pos = ref.current.translation();
			const p = new Vector3(pos.x, pos.y, pos.z);

			let snapped = false;
			ribs.forEach((rib) => {
				if (Math.abs(p.y - rib.y) < snapThreshold) {
					ref.current.setNextKinematicTranslation({
						x: p.x,
						y: rib.y,
						z: rib.z,
					});
					snapped = true;
				}
			});

			if (!snapped) {
				ref.current.setBodyType("dynamic");
			}
		};

		const handlePointerMove = (e) => {
			if (!dragging) return;
			e.stopPropagation();

			ref.current.setNextKinematicTranslation({
				x: e.point.x,
				y: e.point.y,
				z: e.point.z,
			});
		};

		return (
			<RigidBody ref={ref} colliders="cuboid" type="dynamic" position={position}>
				<Text
					fontSize={0.55}
					color="white"
					onPointerDown={handlePointerDown}
					onPointerUp={handlePointerUp}
					onPointerMove={handlePointerMove}
				>
					{char}
				</Text>
			</RigidBody>
		);
	}

	function wordToLetters(word, ribIndex) {
		const ribY = ribs[ribIndex].y;
		const startX = -word.length * 0.18;

		return word
			.split("")
			.map((c, i) => (
				<Letter
					key={`${word}-${i}`}
					char={c}
					rotation={boardRotation}
					position={[startX + i * 0.36, ribY, ribs[ribIndex].z]}
				/>
			));
	}

	return (
		<group>
			{wordToLetters("Derek Murphy", 7)}
			{wordToLetters("Software Dev", 3)}
		</group>
	);
}
