/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

export default function CoffeeMug({ position = [0, 0, 0] }) {
	const mugRef = useRef(null);

	return (
		<group position={position}>
			<RigidBody type="fixed" colliders="hull">
				<group ref={mugRef}>
					{/* Mug body */}
					<mesh position={[0, 0.4, 0]} castShadow receiveShadow>
						<cylinderGeometry args={[0.35, 0.4, 0.8, 32]} />
						<meshStandardMaterial color="#f5f5f0" />
					</mesh>

					{/* Mug handle */}
					<mesh position={[0.45, 0.5, 0]} castShadow>
						<torusGeometry args={[0.15, 0.05, 16, 32, Math.PI]} />
						<meshStandardMaterial color="#f5f5f0" />
					</mesh>

					{/* Chicago flag design - Blue stripes */}
					<mesh position={[0, 0.65, 0.351]} castShadow>
						<planeGeometry args={[0.6, 0.08]} />
						<meshStandardMaterial color="#0066CC" />
					</mesh>
					<mesh position={[0, 0.15, 0.351]} castShadow>
						<planeGeometry args={[0.6, 0.08]} />
						<meshStandardMaterial color="#0066CC" />
					</mesh>

					{/* White center band */}
					<mesh position={[0, 0.4, 0.352]} castShadow>
						<planeGeometry args={[0.6, 0.16]} />
						<meshStandardMaterial color="#ffffff" />
					</mesh>

					{/* Red stars (simplified as small circles) */}
					{[0.15, -0.15, 0.05, -0.05].map((x, i) => (
						<mesh key={i} position={[x, 0.4, 0.353]} castShadow>
							<circleGeometry args={[0.03, 16]} />
							<meshStandardMaterial color="#CC0000" />
						</mesh>
					))}

					{/* CHICAGO text */}
					<mesh position={[0, 0.05, 0.351]} castShadow>
						<planeGeometry args={[0.5, 0.06]} />
						<meshStandardMaterial color="#CC0000" />
					</mesh>
				</group>
			</RigidBody>
		</group>
	);
}
