import selfie from "../../src/assets/selfie.jpg";

export default function Header() {
	return (
		<div>
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
						Hi, and welcome to my web page. Just a bit of info about myself. My name is
						Derek Murphy, I am a{" "}
						<span className="animate-pulse text-orange-500">
							front end software developer{" "}
						</span>
						, and I live in
						<span className=" text-orange-500"> *Chicago, USA*</span>. I like to craft
						powerful visuals and create products that ease everyday tasks whether at
						work or home.
					</p>
				</div>
			</div>
		</div>
	);
}
