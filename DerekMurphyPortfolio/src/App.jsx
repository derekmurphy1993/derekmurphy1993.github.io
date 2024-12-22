import { useState } from "react";
import selfie from "../src/assets/selfie.jpg";
import dove from "../src/assets/gifs/dove.gif";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";

import "./App.css";

function App() {
	function scrollToElement(id) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<div className="flex flex-col max-w-screen-xl">
			<div className="flex flex-col max-w-screen-xl h-screen">
				<h1
					className="animate-bounce font-bold 
      text-transparent bg-clip-text text-8xl my-10
      bg-gradient-to-br from-yellow-400 via-purple-500 to-yellow-900"
				>
					{" "}
					WELCOME!{" "}
				</h1>
				<div className="flex flex-row gap-6 mt-4">
					<img src={selfie} className="w-1/3 border-2 border-green-400" />
					<div className="w-2/3">
						<h1 className="text-purple-600">My Name is Derek Murphy</h1>
						<p className="text-2xl text-yellow-300 font-semibold">
							Hi, and welcome to my web page. Just a bit of info about myself. My name
							is Derek Murphy, I am a{" "}
							<span className="animate-pulse text-orange-500">
								front end software developer{" "}
							</span>
							, and I live in
							<span className=" text-orange-500"> *Chicago, USA*</span>. I like to
							craft powerful visuals and create products that ease everyday tasks
							whether at work or home.
						</p>
					</div>
				</div>
				<div className="w-full flex flex-row mt-10">
					<div className="w-3/12">
						<img src={dove} />
					</div>
					<div className="w-6/12">
						<p
							to={""}
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
									window.open("https://github.com/derekmurphy1993", "_blank")
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
			</div>

			<div className="h-screen">
				<h1 id="about" className="animate-refine-slide font-bold">
					About Me
				</h1>
				<About />
			</div>

			<h1 id="portfolio" className="animate-refine-slide font-bold">
				Portfolio
			</h1>
			<Portfolio />

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
	);
}
export default App;
