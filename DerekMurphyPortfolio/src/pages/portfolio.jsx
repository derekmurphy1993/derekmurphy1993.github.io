import electric from "../../src/assets/gifs/electric.gif";
import rapid from "../../src/assets/gifs/jumpinghouse.gif";
import civic from "../../src/assets/gifs/politics.gif";
import civic2 from "../../src/assets/gifs/flaganimation.gif";
import edu from "../../src/assets/gifs/edu.gif";
import dream from "../../src/assets/gifs/genie.gif";

export default function portfolio() {
	return (
		<div className="mx-auto">
			<div className="relative max-w-[800px] border-4 border-b-[#5e5d59] border-r-[#5e5d59] overflow-hidden border-[#] mt-8 h-72 bg-[#cac8c2]">
				<div className="flex flex-row h-[48px] border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-[#18266b] to-[#acbdd8]">
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
				<div className="flex flex-row relative h-full w-full border-black">
					<p className="">Find a home</p>
					<div className="mx-auto">
						<img src={electric} className="h-28 mx-auto"></img>

						<h1 className=" text-green-500 font-bold"> Schnider Electric </h1>
					</div>
					<p>Find a home</p>
					<div className="absolute flex w-full bottom-14 justify-center">
						<div
							onClick={() => window.open("https://layoutfast.se.com/")}
							className="mx-14 h-[52px] text-slate-900 bottom-0 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								OPEN WEBSITE{" "}
							</p>
						</div>
						<div
							onClick={() => window.open("https://layoutfast.se.com/")}
							className="mx-14 h-[52px] text-slate-900 bottom-10 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								READ <span className="underline">MORE</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="relative max-w-[800px] min-w-[550px] border-4 border-b-[#5e5d59] border-r-[#5e5d59] overflow-hidden border-[#] mt-8 h-72 bg-[#cac8c2]">
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
					<img src={rapid} className="h-[60%] p-2"></img>
					<div>
						<h1 className="text-red-500">Rapid Rentals</h1>
						<p className="text-blue-600">
							A real estate app that utilizes React and MongoDB to allow users to post
							or search properties for sale or rent.{" "}
						</p>
					</div>
					<div className="absolute flex w-full bottom-14 justify-center">
						<div
							onClick={() => window.open("https://mern-rapidrentals.onrender.com/")}
							className="mx-14 h-[52px] text-slate-900 bottom-0 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								OPEN WEBSITE{" "}
							</p>
						</div>
						<div
							onClick={() =>
								window.open("https://github.com/derekmurphy1993/MERN_Proj")
							}
							className="mx-14 h-[52px] text-slate-900 bottom-10 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								READ <span className="underline">GITHUB</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="relative max-w-[800px] min-w-[550px] border-4 border-b-[#5e5d59] border-r-[#5e5d59] overflow-hidden border-[#] mt-8 h-72 bg-[#cac8c2]">
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
					<img src={civic} className="h-[60%] p-2"></img>
					<div>
						<h1 className="text-red-500">Civic App</h1>
						<p className="text-blue-600">
							A browser based react app that integrated google maps and react context
							to connect over 1000 monthly users from the NYC public with 500+ events
							hosted by 30+ community organizations.
						</p>
						<p className="text-blue-600">
							Disbanded in 2023, read more info in my post.
						</p>
					</div>
					<img src={civic2} className="h-[30%] p-2"></img>
					<div className="absolute flex w-full bottom-14 justify-center">
						<div
							onClick={() => window.open("https://mern-rapidrentals.onrender.com/")}
							className="mx-14 h-[52px] text-slate-900 bottom-0 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								OPEN WEBSITE{" "}
							</p>
						</div>
						<div
							onClick={() =>
								window.open("https://github.com/derekmurphy1993/MERN_Proj")
							}
							className="mx-14 h-[52px] text-slate-900 bottom-10 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								READ <span className="underline">GITHUB</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="relative max-w-[800px] min-w-[550px] border-4 border-b-[#5e5d59] border-r-[#5e5d59] overflow-hidden border-[#] mt-8 h-72 bg-[#cac8c2]">
				<div className="flex flex-row h-[48px] border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-[#18266b] to-[#acbdd8]">
					<p className="text-center m-auto">Remot-Ed</p>
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
					<div>
						<h1 className="text-red-500">Remot-Ed</h1>
						<p className="text-blue-600">
							Built an online classroom management tool for teachers to share
							resources and quiz students virtually, utilizing reference documents and
							middleware such as Access Control. Strategizing with a team to solve the
							complex backend and handle extensive views of a large scale project.
						</p>
					</div>
					<img src={edu} className="h-[60%] p-2"></img>

					<div className="absolute flex w-full bottom-14 justify-center">
						<div
							onClick={() => window.open("https://mern-rapidrentals.onrender.com/")}
							className="mx-14 h-[52px] text-slate-900 bottom-0 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								OPEN WEBSITE{" "}
							</p>
						</div>
						<div
							onClick={() =>
								window.open("https://github.com/derekmurphy1993/MERN_Proj")
							}
							className="mx-14 h-[52px] text-slate-900 bottom-10 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								READ <span className="underline">GITHUB</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="relative max-w-[800px] min-w-[550px] border-4 border-b-[#5e5d59] border-r-[#5e5d59] overflow-hidden border-[#] mt-8 h-72 bg-[#cac8c2]">
				<div className="flex flex-row h-[48px] border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-[#18266b] to-[#acbdd8]">
					<p className="text-center m-auto">DreamLoom - Dream Journal App</p>
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
					<img src={dream} className="h-[60%] p-2"></img>
					<div>
						<h1 className="text-red-500">Dreamloom</h1>
						<h2 className="text-red-500">Dream Journaling App</h2>
						<p className="text-blue-600">
							A journaling app I created over 4 days that allows users to log entries
							into a journal. The front end was created using JavaScript and
							Handlebars, while the back-end utilized Ruby on Rails to connect to a
							heroku hosted API.
						</p>
					</div>
					<div className="absolute flex w-full bottom-14 justify-center">
						<div
							onClick={() => window.open("https://mern-rapidrentals.onrender.com/")}
							className="mx-14 h-[52px] text-slate-900 bottom-0 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								OPEN WEBSITE{" "}
							</p>
						</div>
						<div
							onClick={() =>
								window.open("https://github.com/derekmurphy1993/MERN_Proj")
							}
							className="mx-14 h-[52px] text-slate-900 bottom-10 text-center align-middle hover:bg-[#bdb9b2] bg-[#cecac2] border-4 border-b-[#5e5d59] border-r-[#5e5d59] border-[#f8fbee] hover:border-[#5e5d59] hover:border-b-[#f8fbee] hover:border-r-[#f8fbee]  rounded-none"
						>
							<p className="border-dashed border-2 border-slate-950 p-2">
								READ <span className="underline">GITHUB</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
