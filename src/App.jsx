import { useEffect, useState } from "react";
import dove from "./assets/gifs/dove.gif";
import SplashPage from "./pages/splashpage";
import NewHeader from "./pages/new_header";
import { initAnalytics, trackEvent } from "./lib/analytics";

const SPLASH_COOKIE = "skip_splash";

function getCookieValue(name) {
	if (typeof document === "undefined") return null;
	const cookie = document.cookie
		.split("; ")
		.find((entry) => entry.startsWith(`${name}=`));
	return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}

function setCookie(name, value, days = 365) {
	if (typeof document === "undefined") return;
	document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${days * 24 * 60 * 60}; samesite=lax`;
}

export default function App() {
	const [phase, setPhase] = useState(() =>
		getCookieValue(SPLASH_COOKIE) === "1" ? "entered" : "idle",
	);
	const isToBlack = phase === "toBlack";
	const isToHeader = phase === "toHeader";
	const isTransitioning = isToBlack || isToHeader;

	useEffect(() => {
		initAnalytics();
	}, []);

	useEffect(() => {
		if (phase === "idle" || phase === "entered") return undefined;
		const timer = setTimeout(
			() => {
				if (phase === "toBlack") {
					setPhase("toHeader");
				} else if (phase === "toHeader") {
					setPhase("entered");
				}
			},
			phase === "toBlack" ? 2200 : 1000,
		);
		return () => clearTimeout(timer);
	}, [phase]);

	if (phase === "entered") {
		return <NewHeader />;
	}

	return (
		<div className="relative w-screen h-screen overflow-hidden">
			{isToHeader ? (
				<div className="absolute inset-0 z-0">
					<NewHeader />
				</div>
			) : null}

			{phase !== "toHeader" ? (
				<div
					className={`${isToBlack ? "app-splash-fade pointer-events-none" : ""} relative z-20`}
				>
					<SplashPage
						onEnter={() => {
							if (phase === "idle") {
								trackEvent("splash_enter");
								setCookie(SPLASH_COOKIE, "1");
								setPhase("toBlack");
							}
						}}
					/>
				</div>
			) : null}

			{isTransitioning ? (
				<div
					className={`pointer-events-none absolute inset-0 z-30 ${isToBlack ? "app-black-in" : "app-black-out"}`}
				>
					<div className="absolute inset-0 bg-black" />
				</div>
			) : null}

			{isTransitioning ? (
				<div className="pointer-events-none absolute inset-0 z-40">
					<img src={dove} className="app-dove-transition app-dove-left" />
				</div>
			) : null}

			<style>{`
				@keyframes app-splash-fade-out {
					from { opacity: 1; }
					to { opacity: 0; }
				}

				.app-splash-fade {
					animation: app-splash-fade-out 380ms ease-out forwards;
				}

				@keyframes app-black-fade-in {
					from { opacity: 0; }
					to { opacity: 1; }
				}

				@keyframes app-black-fade-out {
					from { opacity: 1; }
					to { opacity: 0; }
				}

				.app-black-in {
					opacity: 0;
					animation: app-black-fade-in 520ms ease-out 1600ms forwards;
				}

				.app-black-out {
					animation: app-black-fade-out 850ms ease-out forwards;
				}

				@keyframes app-dove-bloom-left {
					0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
					78% { transform: translate3d(38vw, 28vh, 0) scale(20.5); opacity: 1; }
					100% { transform: translate3d(40vw, 30vh, 0) scale(22); opacity: 0; }
				}

				.app-dove-transition {
					position: absolute;
					top: clamp(74px, 12vh, 148px);
					height: clamp(132px, 19vw, 420px);
					width: auto;
					object-fit: contain;
				}

				.app-dove-left {
					left: clamp(8px, 3.2vw, 44px);
					transform-origin: center center;
					animation: app-dove-bloom-left 2400ms ease-out forwards;
				}
			`}</style>
		</div>
	);
}
