import { useState } from "react";
import dove from "../src/assets/gifs/dove.gif";
import Portfolio from "./pages/portfolio";
import MPortfolio from "./pages/m_portfolio";
import About from "./pages/about";
import "./App.css";
import Header from "./pages/header";
import MHeader from "./pages/m_header";
import Mabout from "./pages/m_about";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function App() {
	const [modern, setModern] = useState(false);

	function scrollToElement(id) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}
	return (
		<div className={`w-screen max-w-full ${modern ? "" : "bg-slate-950"}`}>
			<div className="flex flex-col mx-auto">
				<div className="flex flex-col h-screen">
					{modern ? <Header /> : <MHeader />}

					{modern ? (
						<div className="w-full flex flex-row mt-10">
							<div className="w-3/12">
								<img src={dove} />
							</div>
							<div className="w-6/12">
								<p
									onClick={() => setModern(true)}
									className="mt-10 text-2xl text-orange-600 font-semibold underline"
								>
									{" "}
									If you would prefer a more modern webpage expierence, CLICK HERE{" "}
								</p>
								<ul className="flex flex-row gap-8 font-bold mt-6 justify-center items-center">
									<li
										onClick={() => scrollToElement("about")}
										className="px-3 py-3 bg-gradient-to-br from-red-200 via-red-600 to-red-900 rounded-full text-white drop-shadow-md hover:underline hover:bg-opacity-90"
									>
										About Me
									</li>
									<li
										onClick={() => scrollToElement("portfolio")}
										className="px-3 py-3 bg-gradient-to-br from-orange-200 via-orange-600 to-orange-900 rounded-full text-white drop-shadow-md hover:underline hover:bg-opacity-90"
									>
										Portfolio
									</li>
									<li
										onClick={() =>
											window.open(
												"https://github.com/derekmurphy1993",
												"_blank"
											)
										}
										className="px-3 py-3 bg-gradient-to-br from-green-200 via-green-600 to-green-900 rounded-full text-white drop-shadow-md hover:underline hover:bg-opacity-90"
									>
										Github
									</li>
									<li
										onClick={() =>
											window.open(
												"https://www.linkedin.com/in/derekmurphy93/",
												"_blank"
											)
										}
										className="px-3  py-3 bg-gradient-to-br from-blue-200 via-blue-600 to-blue-900 rounded-full text-white drop-shadow-md hover:underline hover:bg-opacity-90"
									>
										LinkedIn
									</li>
								</ul>
							</div>
							<div className="w-3/12 scale-x-[-1]">
								<img src={dove} />
							</div>
						</div>
					) : (
						<div className="w-full flex flex-row mt-10">
							<div className="w-3/12"></div>
							<div className="w-6/12">
								{/* <p
									onClick={() => setModern(false)}
									className="mt-10 text-2xl text-orange-600 font-semibold underline"
								>
									bork, CLICK HERE
								</p> */}
								<ul className="flex flex-row gap-4 font-bold mt-40 justify-center items-center">
									<li
										onClick={() => scrollToElement("about")}
										className=" text-white drop-shadow-md hover:text-slate-400"
									>
										About Me
									</li>
									<li
										onClick={() => scrollToElement("portfolio")}
										className=" text-white drop-shadow-md hover:text-slate-400"
									>
										Portfolio
									</li>
									<li
										onClick={() =>
											window.open("/public/DerekMurphy_Resume.pdf", "_blank")
										}
										className=" text-white drop-shadow-md hover:text-slate-400"
									>
										Resume
									</li>
								</ul>
								<ul className="flex flex-row gap-8 font-bold mt-6 justify-center items-center">
									<li
										onClick={() =>
											window.open(
												"https://www.linkedin.com/in/derekmurphy93/",
												"_blank"
											)
										}
										className="bg-[#5151e5] text-black drop-shadow-md  hover:bg-slate-400"
									>
										<FaLinkedin className="p-[2px] h-10 w-10" />
									</li>
									<li
										onClick={() =>
											window.open(
												"https://github.com/derekmurphy1993",
												"_blank"
											)
										}
										className="bg-[#5151e5] rounded-full text-black drop-shadow-md  hover:bg-slate-400"
									>
										<FaGithub className="p-1 h-10 w-10" />
									</li>
									<li
										onClick={() =>
											window.open(
												"https://medium.com/@derekmurphy1993",
												"_blank"
											)
										}
										className="bg-[#5151e5] text-black drop-shadow-md  hover:bg-slate-400"
									>
										<FaMedium className="p-[2px] h-10 w-10" />
									</li>
								</ul>
							</div>
							<div className="w-3/12 scale-x-[-1]"></div>
						</div>
					)}
				</div>

				<div
					id="about"
					className="h-screen cursor-default bg-[#d3f86b] text-slate-900 drop-shadow-xl"
				>
					{modern ? (
						<div>
							{" "}
							<h1 className="animate-refine-slide font-bold">About Me</h1>
							<About />
						</div>
					) : (
						<Mabout />
					)}
				</div>

				<h1 id="portfolio" className="animate-refine-slide font-bold mt-8 font-display">
					Portfolio
				</h1>
				{modern ? <Portfolio /> : <MPortfolio />}

				{modern ? (
					<div>
						<p className="text-yellow-300 mt-5">
							This site was last updated on Wednesday, Dec 18th, 2024.
						</p>

						<p className="text-red-600 font-semibold">
							This page is hosted by
							{/* <img src="./images/" className="m-0" /> */}
							{""}
							<span
								className="text-green-400 hover:underline hover:font-bold"
								onClick={() => window.open("https://pages.github.com/", "_blank")}
							>
								{" "}
								[GithubPages]
							</span>{" "}
							Get your own{" "}
							<span
								className="underline text-green-400 font-bold"
								onClick={() => window.open("https://vite.dev/guide/", "_blank")}
							>
								Free Vite React App
							</span>
						</p>
					</div>
				) : (
					<div className="bg-[#d3f86b] text-slate-950">
						<ul className="flex flex-row gap-2 py-1 justify-center items-center">
							<li className="text-xs font-semibold">
								© 2025, Derek Murphy. All Rights Reserved.{" "}
							</li>
							<li
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/derekmurphy93/",
										"_blank"
									)
								}
								className="bg-[#5151e5] text-black drop-shadow-md  hover:bg-slate-400"
							>
								<FaLinkedin className="h-6 w-6" />
							</li>
							<li
								onClick={() =>
									window.open("https://github.com/derekmurphy1993", "_blank")
								}
								className="bg-[#5151e5] rounded-full text-black drop-shadow-md  hover:bg-slate-400"
							>
								<FaGithub className=" h-6 w-6" />
							</li>

							<li
								onClick={() =>
									window.open("https://medium.com/@derekmurphy1993", "_blank")
								}
								className="bg-[#5151e5] text-black drop-shadow-md  hover:bg-slate-400"
							>
								<FaMedium className="h-6 w-6" />
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
export default App;
