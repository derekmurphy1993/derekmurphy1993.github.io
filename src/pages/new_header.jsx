/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import Board from "./Board";
import Letter from "./Letter";

export default function M_Header() {
	const [isDraggingLetter, setIsDraggingLetter] = useState(false);

	return (
		<div className="w-full h-screen bg-slate-400">
			<Canvas
				shadows
				camera={{ position: [-2, 4, 15], fov: 60 }}
				style={{ width: "100%", height: "100%" }}
			>
				<Suspense fallback={null}>
					<Physics gravity={[0, -9.81, 0]}>
						{/* Lighting */}
						<ambientLight intensity={0.8} />
						<directionalLight
							position={[-1, 4, 2]}
							intensity={1.5}
							castShadow
							shadow-mapSize-width={2048}
							shadow-mapSize-height={2048}
						/>
						<directionalLight position={[-5, 5, 3]} intensity={0} />

						{/* Floor/Countertop - dark wood */}
						<RigidBody type="fixed" colliders="cuboid">
							<mesh
								rotation={[-Math.PI / 2, 0, 0]}
								position={[0, 0, 5]}
								receiveShadow
							>
								<planeGeometry args={[120, 20]} />
								<meshStandardMaterial color="#3d2817" roughness={0.7} />
							</mesh>
							<CuboidCollider args={[60, 0.05, 10]} position={[0, -0.05, 5]} />
						</RigidBody>

						{/* Board */}
						<Board />
						<Letter onDragStateChange={setIsDraggingLetter} />
					</Physics>
				</Suspense>

				{/* Camera controls */}
				<OrbitControls
					enabled={true}
					enablePan={true}
					enableZoom={false}
					enableRotate={true}
					minDistance={30}
					maxDistance={30}
					minPolarAngle={Math.PI / 2.5}
					maxPolarAngle={Math.PI / 2.5}
					target={[2, 2, 2]}
				/>
			</Canvas>
		</div>
	);
}
