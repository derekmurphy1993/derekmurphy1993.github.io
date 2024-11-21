import { useState } from "react";
import selfie from "../src/assets/selfie.jpg";
import Portfolio from "../src/components/portfolio.jsx";
import "./App.css";

function App() {
	return (
		<div className="flex flex-col max-w-screen-xl">
			<h1
				className="animate-bounce font-bold 
      text-transparent bg-clip-text 
      bg-gradient-to-br from-yellow-400 via-purple-500 to-yellow-900"
			>
				{" "}
				WELCOME!{" "}
			</h1>
			<div className="flex flex-row gap-6 mt-4">
				<img src={selfie} className="w-1/3 border-2 border-green-400" />
				<div className="w-2/3">
					<h1 className="text-purple-600">Derek Murphy</h1>
					Hi, and welcome to my web page. Just a 'lil bit of info about myself. My name is
					Derek Murphy, I am a front end software developer, and I live in Chicago *USA*.
					I like to bike, and play videogames. I like cycling, industry, and enterprise
					products. My favourite languages are: React,
				</div>
			</div>
			<ul className="flex flex-row gap-5 font-bold mt-5 mx-auto">
				<li className="px-3 bg-gradient-to-br from-red-200 via-red-600 to-red-900 rounded-full text-white drop-shadow-md hover:underline hover:bg-opacity-90">
					Who Is Derek Murphy? <br /> (About Me)
				</li>
				<li className="px-3 bg-gradient-to-br from-green-200 via-green-600 to-green-900 rounded-full text-white drop-shadow-md hover:underline hover:bg-opacity-90">
					Github
				</li>
				<li className="px-3 bg-gradient-to-br from-orange-200 via-orange-600 to-orange-900 rounded-full text-white drop-shadow-md hover:underline hover:bg-opacity-90">
					Portfolio
				</li>
				<li className="px-3 bg-gradient-to-br from-blue-200 via-blue-600 to-blue-900 rounded-full text-white drop-shadow-md hover:underline hover:bg-opacity-90">
					LinkedIn
				</li>
			</ul>
			<div>
				<h1 className="animate-refine-slide font-bold">PORTFOLIO</h1>
			</div>
			<Portfolio />
			<Portfolio />
			<Portfolio />

			<p className="text-yellow-300">This site was last updated on Monday, Nov 18th, 2024.</p>

			<p className="read-the-docs">This site was built with Vite React</p>
			<p className="underline">Build your own site with rEact</p>
			<p className="read-the-docs">
				This page is hosted on [GITHUB] Create your own{" "}
				<span className="underline">Free Home Page</span>
			</p>
		</div>
	);
}

export default App;
