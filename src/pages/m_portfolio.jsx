// import "./index.css"
import SE from "../assets/port/SEModernImage.jpg";
import RR from "../assets/port/RapidRentalModernImage.jpg";
import CIV from "../assets/port/Civic.jpg";
import MBTA from "../assets/port/train.png";

export default function MPortfolio() {
	return (
		<div className="flex flex-col max-w-screen-xl mx-auto gap-14 my-12 pb-36">
			{/* SE port */}
			<div
				className="flex flex-row gap-2 items-center grayscale hover:grayscale-0  text-gray-100 hover:text-[#d3f86b]/80"
				onClick={() => window.open("https://layoutfast.se.com/")}
			>
				{" "}
				<div className="w-8/12 h-52 overflow-hidden p-5">
					<img className="" src={SE} />
				</div>
				<div className="text-left">
					<h1 className="font-display font-bold text-4xl">Schnider Electric</h1>
					<p className="font-display text-xl">FE Software Engineer, LayoutFast</p>
					<p className="font-display text-xl">
						<span className="hover:text-[#e388c5] hover:underline">
							{" "}
							LayoutFast Site{" "}
						</span>
						/{" "}
						<span
							className="font-display text-xl  hover:text-[#e388c5] hover:underline"
							onClick={() =>
								window.open(
									"https://medium.com/@derekmurphy1993/schneider-electric-retrospective-b04124efb5e5"
								)
							}
						>
							{" "}
							Blog Post
						</span>
					</p>
				</div>
			</div>

			{/* MBTA port */}

			<div
				className="flex flex-row gap-2 ml-2 items-center grayscale hover:grayscale-0  text-gray-100 hover:text-[#d3f86b]/80"
				onClick={() => window.open("https://mbta-stopwatchh.onrender.com/")}
			>
				<div className="text-left">
					<h1 className="font-display font-bold text-4xl">MBTA StopWatch</h1>
					<p className="font-display text-xl">Realtime Transit App</p>
					<p className="font-display text-xl">
						<span className="hover:text-[#e388c5] hover:underline">
							{" "}
							Deployed Site{" "}
						</span>
						{/* /{" "}
						<span
							className="font-display text-xl  hover:text-[#e388c5] hover:underline"
							onClick={() =>
								window.open(
									"https://medium.com/@derekmurphy1993/civic-app-retrospective-75321a9ebd7c"
								)
							}
						>
							{" "}
							Blog Post
						</span> */}
					</p>
				</div>
				<div className="w-8/12 h-52 overflow-hidden p-5 ">
					<img className="" src={MBTA} />
				</div>
			</div>

			{/* Civic port */}

			<div
				className="flex flex-row gap-2 items-center grayscale hover:grayscale-0  text-gray-100 hover:text-[#d3f86b]/80"
				onClick={() =>
					window.open(
						"https://medium.com/@derekmurphy1993/civic-app-retrospective-75321a9ebd7c"
					)
				}
			>
				{" "}
				<div className="w-8/12 h-52 overflow-hidden p-5">
					<img className="" src={CIV} />
				</div>
				<div className="text-left">
					<h1 className="font-display font-bold text-4xl">Civic App</h1>
					<p className="font-display text-xl">Software Engineer </p>
					<p className="font-display text-xl">
						{/* <span className="hover:text-[#e388c5] hover:underline">
							{" "}
							LayoutFast Site{" "}
						</span>
						/{" "} */}
						<span
							className="font-display text-xl  hover:text-[#e388c5] hover:underline"
							onClick={() =>
								window.open(
									"https://medium.com/@derekmurphy1993/civic-app-retrospective-75321a9ebd7c"
								)
							}
						>
							{" "}
							Blog Post
						</span>
					</p>
				</div>
			</div>

			{/* rapid rentals port */}

			<div
				className="flex flex-row gap-2 ml-2 items-center grayscale hover:grayscale-0  text-gray-100 hover:text-[#d3f86b]/80"
				onClick={() => window.open("https://mern-rapidrentals.onrender.com/")}
			>
				<div className="text-left">
					<h1 className="font-display font-bold text-4xl">RAPID RENTALS</h1>
					<p className="font-display text-xl">MERN Rental App</p>
					<p className="font-display text-xl">
						<span className="hover:text-[#e388c5] hover:underline">
							{" "}
							Deployed Site{" "}
						</span>
						{/* /{" "}
						<span
							className="font-display text-xl  hover:text-[#e388c5] hover:underline"
							onClick={() =>
								window.open(
									"https://medium.com/@derekmurphy1993/civic-app-retrospective-75321a9ebd7c"
								)
							}
						>
							{" "}
							Blog Post
						</span> */}
					</p>
				</div>
				<div className="w-8/12 h-52 overflow-hidden p-5 ">
					<img className="" src={RR} />
				</div>
			</div>
		</div>
	);
}
