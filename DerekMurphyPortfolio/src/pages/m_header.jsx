// import selfie from "../../src/assets/selfie.jpg";

export default function MHeader() {
	return (
		<div className="w-screen max-w-full">
			<div className="relative">
				<div className="absolute h-full w-full">
					<div className="relative w-full h-screen bg-gradient-to-br from-blue-500/0 to-purple-600/10">
						<div className="absolute inset-0 opacity-20 grid grid-cols-3 grid-rows-3 gap-4">
							<div className=""></div>
							<div className="blur-xl bg-gradient-to-tl from-teal-500 to-red-500 rounded-full  "></div>
							<div className="blur-xl bg-gradient-to-br from-pink-500 to-indigo-400 rounded-full  "></div>
							<div className=""></div>
							<div className="blur-xl bg-gradient-to-r mix-blend-multiply from-purple-600 to-blue-500 rounded-lg"></div>
							<div className="blur-xl bg-gradient-to-t from-yellow-500 to-green-400 rounded-full"></div>
							<div className=""></div>
							<div className=""></div>
							<div className=""></div>
						</div>
					</div>
				</div>
				<div className="max-w-screen-xl mx-auto">
					<div className="flex flex-row gap-6 pt-16 ml-14 ">
						<div className="">
							<h1 className="w-2/3 text-left font-semibold text-6xl text-[#d3f86b] ">
								My name is <br /> Derek Murphy,{" "}
							</h1>
							<p className="text-left uppercase font-extrabold text-8xl opacity-70 text-[#e388c5] ">
								front end <br /> software dev{" "}
							</p>
							<div className="">
								<p className="text-left text-2xl text-[#5151e5] font-semibold">
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
