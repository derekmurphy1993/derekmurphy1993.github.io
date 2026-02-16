// import selfie from "../../src/assets/selfie.jpg";

export default function MHeader() {
	return (
		<div className="w-screen max-w-full">
			<div className="relative">
				<div className="absolute h-full w-full"></div>
				<div className="max-w-screen-xl mx-auto">
					<div className="flex flex-row gap-6 pt-28 ml-12 ">
						<div className="">
							<h1 className=" text-left font-semibold text-4xl ml-6 text-[#fff]">
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
