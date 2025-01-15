// import "./index.css"
import SE from "../assets/port/SEModernImage.jpg";
import RR from "../assets/port/RapidRentalModernImage.jpg";
import CIV from "../assets/port/CivicModernImage.jpg";

export default function MPortfolio() {
	return (
		<div className="flex flex-col max-w-screen-xl mx-auto gap-14 my-12 pb-36">
			<div
				className="flex flex-row gap-2 items-center grayscale hover:grayscale-0  text-gray-100 hover:text-[#d3f86b]/80"
				onClick={() => window.open("https://mern-rapidrentals.onrender.com/")}
			>
				<div className="text-left">
					<h1 className="font-display  font-bold text-4xl">RAPID RENTALS</h1>
					<p className="font-display text-xl">Software Dev, MERN</p>
				</div>
				<div className="w-8/12 h-52 overflow-hidden p-5 ">
					<img className="" src={RR} />
				</div>
			</div>

			<div
				className="flex flex-row gap-2 items-center grayscale hover:grayscale-0  text-gray-100 hover:text-[#d3f86b]/80"
				onClick={() => window.open("https://layoutfast.se.com/")}
			>
				{" "}
				<div className="w-8/12 h-52 overflow-hidden p-5">
					<img className="" src={SE} />
				</div>
				<div className="text-left">
					<h1 className="font-display   font-bold text-4xl">SCHNIDER ELECTRIC</h1>
					<p className="font-display text-xl">Front End Developer, React + JS</p>
				</div>
			</div>

			<div
				className="flex flex-row gap-2 items-center grayscale hover:grayscale-0  text-gray-100 hover:text-[#d3f86b]/80"
				onClick={() => window.open("https://mern-rapidrentals.onrender.com/")}
			>
				{" "}
				<div className="text-left">
					<h1 className="font-display  font-bold text-4xl">CIVIC APP</h1>
					<p className="font-display text-xl">Software Dev, React + Google Maps API</p>
				</div>
				<div className="w-8/12 h-52 overflow-hidden p-5">
					<img className="" src={CIV} />
				</div>
			</div>
		</div>
	);
}
