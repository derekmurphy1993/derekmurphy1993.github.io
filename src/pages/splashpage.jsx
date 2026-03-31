import dove from "../assets/gifs/dove.gif";
import starsBg from "../assets/stars_bg.jpg";
import selfie from "../assets/selfie.jpg";

import electric from "../assets/gifs/electric.gif";
import rapid from "../assets/gifs/jumpinghouse.gif";
import civic from "../assets/gifs/politics.gif";
import civic2 from "../assets/gifs/flaganimation.gif";
import mbta from "../assets/gifs/train_stm.gif";
import dream from "../assets/gifs/genie.gif";
import { trackEvent } from "../lib/analytics";

export default function SplashPage({ onEnter }) {
	const openExternal = (url, label) => {
		trackEvent("splash_link_click", label);
		window.open(url);
	};

	return (
		<div
			className="w-screen max-w-full h-screen overflow-hidden text-[#f8ee7d]"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 26, 51, 0.82), rgba(0, 26, 51, 0.82)), url(${starsBg})`,
				backgroundRepeat: "repeat",
				backgroundSize: "220px 220px",
			}}
		>
			<style>{`
					.splash-carousel {
						--slot-width: 240px;
						--slot-height: 88px;
						--window-scale: 0.24;
						--carousel-duration: 30s;
						width: 100vw;
						max-width: 100vw;
						margin-left: calc(50% - 50vw);
						position: relative;
						height: clamp(96px, 18vw, 160px);
						overflow: hidden;
					}
					.splash-window-slot {
						position: absolute;
						top: 10px;
						width: var(--slot-width);
						height: var(--slot-height);
						overflow: visible;
					}
					.splash-window {
						position: relative;
						width: 800px;
						height: 18rem;
						border-width: 4px;
						border-style: solid;
						border-color: #f8fbee;
						border-right-color: #5e5d59;
						border-bottom-color: #5e5d59;
						overflow: hidden;
						background: #cac8c2;
						transform: scale(var(--window-scale));
						transform-origin: top left;
					}
					@keyframes splash-carousel-move {
						from { transform: translateX(100vw); }
						to { transform: translateX(calc(-1 * var(--slot-width))); }
					}
					.splash-window-slot {
						animation: splash-carousel-move var(--carousel-duration) linear infinite;
					}
					.carousel-item-1 { animation-delay: 0s; }
					.carousel-item-2 { animation-delay: calc(var(--carousel-duration) * -0.2); }
					.carousel-item-3 { animation-delay: calc(var(--carousel-duration) * -0.4); }
					.carousel-item-4 { animation-delay: calc(var(--carousel-duration) * -0.6); }
					.carousel-item-5 { animation-delay: calc(var(--carousel-duration) * -0.8); }

					@media (min-width: 1024px) {
						.splash-carousel {
							--slot-width: 376px;
							--slot-height: 130px;
							--window-scale: 0.42;
							--carousel-duration: 36s;
						}
					}

				`}</style>

			<div className="w-full h-full py-4 pb-24 flex flex-col">
				<div className="mt-8 flex items-start justify-center gap-2 lg:gap-4">
					<img src={dove} className="h-24 lg:h-72 mt-6 shrink-0 object-contain" />
					<div className="flex-1 min-w-0">
						<div>
							<h1 className="animate-bounce font-bold text-center text-transparent bg-clip-text text-3xl lg:text-8xl my-10 bg-gradient-to-br from-yellow-400 via-purple-500 to-yellow-900">
								WELCOME!
							</h1>
							<div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-4">
								<img
									src={selfie}
									className="w-full lg:w-1/3 h-auto object-cover lg:object-contain border-2 border-green-400"
								/>
								<div className="w-full lg:w-2/3">
									<h1 className="text-purple-600 text-lg lg:text-2xl">
										My Name is Derek Murphy
									</h1>
									<p className="text-sm lg:text-2xl text-yellow-300 font-semibold leading-tight break-words">
										Hi, and welcome to my web page. Just a bit of info about
										myself. My name is Derek Murphy, I am a{" "}
										<span className="animate-pulse text-orange-500">
											software engineer
										</span>
										, and I live in{" "}
										<span className="text-orange-500">*Chicago, USA*</span> . I
										like to craft powerful visuals and create products that ease
										everyday tasks whether at work or home.
									</p>
								</div>
							</div>
						</div>
					</div>
					<img
						src={dove}
						className="h-24 lg:h-72 mt-6 scale-x-[-1] shrink-0 object-contain"
					/>
				</div>

				<div className="mt-4 mb-2 text-center relative z-10">
					<a
						href="#main-site"
						onClick={(event) => {
							event.preventDefault();
							if (onEnter) onEnter();
						}}
						className="inline-block text-xl lg:text-4xl px-5 lg:px-6 py-2 border-2 border-[#f8ee7d] bg-[#8b0000] text-[#f8ee7d] font-bold hover:underline"
					>
						ENTER
					</a>
				</div>

				<div className="mt-5 flex-1 min-h-0 splash-carousel hidden lg:block">
					<div className="splash-window-slot carousel-item-1">
						<div className="splash-window">
							<div className="flex flex-row border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-[#18266b] to-[#acbdd8]">
								<p className="text-center m-auto">LayoutFast.SE</p>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									-
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									□
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									x
								</div>
							</div>
							<div className="relative flex h-full w-full border-black">
								<div className="items-center mx-auto">
									<h1 className="text-green-500">Schnider Electric</h1>
									<img src={electric} className="h-[40%] p-2" />
								</div>

								<div className="absolute flex w-full bottom-14 justify-center">
									<div
										onClick={() =>
											openExternal("https://layoutfast.se.com/", "layoutfast_site")
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											OPEN WEBSITE
										</p>
									</div>
									<div
										onClick={() =>
											openExternal("https://layoutfast.se.com/", "layoutfast_blog")
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											READ MORE
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="splash-window-slot carousel-item-2">
						<div className="splash-window">
							<div className="flex flex-row h-[48px] border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-[#18266b] to-[#acbdd8]">
								<p className="text-center m-auto">RAPID RENTALS</p>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									-
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									□
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									x
								</div>
							</div>
							<div className="relative flex h-full w-full border-black">
								<img src={rapid} className="h-[60%] p-2" />
								<div>
									<h1 className="text-red-500">Rapid Rentals</h1>
									<p className="text-blue-600 px-2">
										A real estate app that utilizes React and MongoDB to allow
										users to post or search properties for sale or rent.
									</p>
								</div>
								<div className="absolute flex w-full bottom-14 justify-center">
									<div
										onClick={() =>
											openExternal(
												"https://mern-rapidrentals.onrender.com/",
												"rapid_rentals_site",
											)
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											OPEN WEBSITE
										</p>
									</div>
									<div
										onClick={() =>
											openExternal(
												"https://github.com/derekmurphy1993/MERN_Proj",
												"rapid_rentals_github",
											)
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											READ GITHUB
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="splash-window-slot carousel-item-3">
						<div className="splash-window">
							<div className="flex flex-row h-[48px] border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-[#18266b] to-[#acbdd8]">
								<p className="text-center m-auto">CivicApp.Co</p>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									-
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									□
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									x
								</div>
							</div>
							<div className="relative flex h-full w-full border-black">
								<img src={civic} className="h-[60%] p-2" />
								<div>
									<h1 className="text-red-500">Civic App</h1>
									<p className="text-blue-600 px-2">
										A browser app integrating maps and context to connect
										communities with local events.
									</p>
								</div>
								<img src={civic2} className="h-[30%] p-2" />
								<div className="absolute flex w-full bottom-14 justify-center">
									<div
										onClick={() =>
											openExternal(
												"https://civicclone.onrender.com/",
												"civic_app_site",
											)
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											OPEN WEBSITE
										</p>
									</div>
									<div
										onClick={() =>
											openExternal(
												"https://github.com/derekmurphy1993/MERN_Proj",
												"civic_app_github",
											)
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											READ GITHUB
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="splash-window-slot carousel-item-4">
						<div className="splash-window">
							<div className="flex flex-row h-[48px] border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-[#18266b] to-[#acbdd8]">
								<p className="text-center m-auto">MBTA StopWatch</p>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									-
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									□
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									x
								</div>
							</div>
							<div className="relative flex h-full w-full border-black">
								<img src={mbta} className="h-[60%] p-2" />
								<div>
									<h1 className="text-red-500">MBTA StopWatch</h1>
									<p className="text-blue-600 px-2">
										Real-time transit app built with React and Node.js,
										providing live updates on train arrivals and delays for
										commuters.
									</p>
								</div>
								<div className="absolute flex w-full bottom-14 justify-center">
									<div
										onClick={() =>
											openExternal(
												"https://mbta-stopwatchh.onrender.com/",
												"mbta_stopwatch_site",
											)
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											OPEN WEBSITE
										</p>
									</div>
									<div
										onClick={() =>
											openExternal(
												"https://github.com/derekmurphy1993/MBTA-StopWatch-Chrome",
												"mbta_stopwatch_github",
											)
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											READ GITHUB
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="splash-window-slot carousel-item-5">
						<div className="splash-window">
							<div className="flex flex-row h-[48px] border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-[#18266b] to-[#acbdd8]">
								<p className="text-center m-auto">MacroPlanner - Meal Prep App</p>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									-
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									□
								</div>
								<div className="font-bold w-8 h-8 text-[#5d5c59] text-center align-middle bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] mt-1 mr-1">
									x
								</div>
							</div>
							<div className="relative flex h-full w-full border-black">
								<img src={dream} className="h-[60%] p-2" />
								<div>
									<h1 className="text-red-500">MacroPlanner</h1>
									<p className="text-blue-600 px-2">
										Meal planning app built with React and Node.js, allowing
										users to create and manage their weekly meal plans.
									</p>
								</div>
								<div className="absolute flex w-full bottom-14 justify-center">
									<div
										onClick={() =>
											openExternal(
												"https://mealplanner-topaz.vercel.app/",
												"macroplanner_site",
											)
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											OPEN WEBSITE
										</p>
									</div>
									<div
										onClick={() =>
											openExternal(
												"https://github.com/derekmurphy1993/mealplanner",
												"macroplanner_github",
											)
										}
										className="mx-10 h-[52px] text-slate-900 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]"
									>
										<p className="border-dashed border-2 border-slate-950 p-2">
											READ GITHUB
										</p>
									</div>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
