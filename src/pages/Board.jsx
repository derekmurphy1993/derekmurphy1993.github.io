/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { Euler } from "three";

export default function Board() {
	const boardRef = useRef(null);

	// Board dimensions
	const boardWidth = 8;
	const boardHeight = 6;
	const boardDepth = 0.1;
	const frameThickness = 0.2;

	// Board rotation - upright facing camera
	const boardRotation = new Euler(-Math.PI / 1, -0.05, 0);

	// Calculate 8 evenly spaced horizontal lines
	const numLines = 8;
	const lineSpacing = boardHeight / (numLines + 1);

	return (
		<group>
			{/* Wooden frame */}
			<group rotation={boardRotation} position={[0, 0.5, 4.5]}>
				{/* Top frame */}
				<mesh position={[0, 0, 0]} castShadow receiveShadow>
					<boxGeometry
						args={[boardWidth + frameThickness * 2, frameThickness, frameThickness]}
					/>
					<meshStandardMaterial color="#2d1810" roughness={0.8} />
				</mesh>

				{/* Bottom frame */}
				<mesh position={[0, -boardHeight - frameThickness, 0]} castShadow receiveShadow>
					<boxGeometry
						args={[boardWidth + frameThickness * 2, frameThickness, frameThickness]}
					/>
					<meshStandardMaterial color="#2d1810" roughness={0.8} />
				</mesh>

				{/* Left frame */}
				<mesh
					position={[
						-boardWidth / 2 - frameThickness / 2,
						-boardHeight / 2 - frameThickness / 2,
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
						-boardHeight / 2 - frameThickness / 2,
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
					position={[0, boardHeight / 2 + 0.6, 4.5]}
					receiveShadow
					castShadow
				>
					<boxGeometry args={[boardWidth, boardHeight, boardDepth]} />
					<meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.0} />
				</mesh>
			</RigidBody>
			{/* Horizontal rib lines (8 lines) */}

			<group rotation={boardRotation} position={[0, 0.5, 4.6]}>
				{Array.from({ length: numLines }, (_, index) => {
					const lineY = -(index + 1) * lineSpacing;
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
			<group position={[0, 0.4, 4.4]}>
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
