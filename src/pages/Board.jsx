/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import {
	BOARD_DEPTH,
	BOARD_FRAME_THICKNESS,
	BOARD_HEIGHT,
	BOARD_POSITION,
	BOARD_ROTATION,
	BOARD_WIDTH,
	NUM_RIBS,
	getRibLocalY,
} from "./boardConfig";

export default function Board() {
	const boardRef = useRef(null);

	const boardWidth = BOARD_WIDTH;
	const boardHeight = BOARD_HEIGHT;
	const boardDepth = BOARD_DEPTH;
	const frameThickness = BOARD_FRAME_THICKNESS;
	const boardRotation = BOARD_ROTATION;

	return (
		<group>
			{/* Wooden frame */}
			<group rotation={boardRotation} position={[0, 0.5, 4.5]}>
				{/* Top frame */}
				<mesh position={[0, 0, 0]} castShadow receiveShadow>
					<boxGeometry args={[0, frameThickness, frameThickness]} />
					<meshStandardMaterial color="#2d1810" roughness={0.8} />
				</mesh>

				{/* Bottom frame */}
				<mesh position={[0, boardHeight + frameThickness, 0]} castShadow receiveShadow>
					<boxGeometry
						args={[boardWidth + frameThickness * 2, frameThickness, frameThickness]}
					/>
					<meshStandardMaterial color="#2d1810" roughness={0.8} />
				</mesh>

				{/* Left frame */}
				<mesh
					position={[
						-boardWidth / 2 - frameThickness / 2,
						boardHeight / 2 - frameThickness / 2,
						0,
					]}
					castShadow
					receiveShadow
				>
					<boxGeometry
						args={[frameThickness, boardHeight + frameThickness * 2, frameThickness]}
					/>
					<meshStandardMaterial color="#2d1810" roughness={0.8} />
				</mesh>

				{/* Right frame */}
				<mesh
					position={[
						boardWidth / 2 + frameThickness / 2,
						boardHeight / 2 - frameThickness / 2,
						0,
					]}
					castShadow
					receiveShadow
				>
					<boxGeometry
						args={[frameThickness, boardHeight + frameThickness * 2, frameThickness]}
					/>
					<meshStandardMaterial color="#2d1810" roughness={0.8} />
				</mesh>
			</group>
			{/* Main board surface - dark felt */}
			<RigidBody type="fixed" colliders="cuboid">
				<mesh
					ref={boardRef}
					rotation={boardRotation}
					position={BOARD_POSITION.toArray()}
					receiveShadow
					castShadow
				>
					<boxGeometry args={[boardWidth, -boardHeight, boardDepth]} />
					<meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.0} />
				</mesh>
			</RigidBody>
			{/* Horizontal rib lines (8 lines) */}

			<group
				rotation={boardRotation}
				position={[BOARD_POSITION.x, BOARD_POSITION.y, BOARD_POSITION.z + 0.051]}
			>
				{Array.from({ length: NUM_RIBS }, (_, index) => {
					const lineY = getRibLocalY(index);
					return (
						<mesh key={index} position={[0, lineY, 0.0]}>
							<planeGeometry args={[boardWidth, 0.02]} />
							<meshStandardMaterial
								side={2}
								color="#4a4a4a"
								roughness={0.9}
								metalness={0.2}
							/>
						</mesh>
					);
				})}
			</group>
			{/* Easel support - two small legs */}
			<group position={[0, -0.4, 4.4]}>
				{/* Left leg */}
				<mesh
					rotation={[0, 0, Math.PI / 6]}
					position={[0.8, 0, 0]}
					castShadow
					receiveShadow
				>
					<boxGeometry args={[0.06, 0.6, 0.06]} />
					<meshStandardMaterial color="#2d1810" roughness={0.8} />
				</mesh>

				{/* Right leg */}
				<mesh
					rotation={[0, 0, -Math.PI / 6]}
					position={[-0.8, 0, 0]}
					castShadow
					receiveShadow
				>
					<boxGeometry args={[0.06, 0.6, 0.06]} />
					<meshStandardMaterial color="#2d1810" roughness={0.8} />
				</mesh>
			</group>
		</group>
	);
}
