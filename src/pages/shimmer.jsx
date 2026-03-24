export default function ShimmerStyles() {
	return (
		<style>{`
			@keyframes projects-shimmer-sweep {
				0% { transform: translateX(-160%) skewX(-18deg); opacity: 0; }
				10% { opacity: 0.8; }
				60% { opacity: 0.9; }
				100% { transform: translateX(320%) skewX(-18deg); opacity: 0; }
			}

			.projects-shimmer::before {
				content: "";
				position: absolute;
				inset: -20% auto -20% -35%;
				width: 35%;
				background: linear-gradient(
					90deg,
					transparent 0%,
					rgba(59, 130, 246, 0.15) 25%,
					rgba(59, 130, 246, 0.85) 50%,
					rgba(59, 130, 246, 0.15) 75%,
					transparent 100%
				);
				animation: projects-shimmer-sweep 2.6s ease-in-out infinite;
				pointer-events: none;
				z-index: 0;
			}
		`}</style>
	);
}
