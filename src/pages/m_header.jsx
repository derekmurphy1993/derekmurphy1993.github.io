// import selfie from "../../src/assets/selfie.jpg";

export default function MHeader() {
	return (
		<div className="w-screen max-w-full">
			<div className="relative">
				<div className="absolute h-full w-full">
					<div className="relative w-full h-screen bg-gradient-to-br from-blue-500/0 to-purple-600/10">
						<div className="absolute inset-0 opacity-20 grid grid-cols-3 grid-rows-1 gap-4">
							<div></div>{" "}
							<div className="blur-xl bg-gradient-to-t from-yellow-500/60 to-green-400 rounded-full"></div>
							<div className="blur-xl bg-gradient-to-br from-pink-500 to-indigo-400/40 rounded-full  "></div>
						</div>
					</div>
				</div>
				<div className="max-w-screen-xl mx-auto">
					<div className="flex flex-row gap-6 pt-28 ml-12 ">
						<div className="">
							<h1 className=" text-left font-semibold text-4xl ml-6 text-[#d3f86b]">
								My name is{" "}
							</h1>
							<h1 className=" text-left font-semibold text-4xl text-[#d3f86b]">
								<span className="text-9xl">Derek Murphy,</span>{" "}
							</h1>
							<p className="text-left uppercase font-extrabold text-8xl opacity-70 text-[#e388c5] ">
								front end <br /> software dev{" "}
							</p>
							<div className="">
								<p className="text-left text-2xl text-[#5151e5] ml-2 font-semibold">
									I like to craft products with powerful visuals.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
