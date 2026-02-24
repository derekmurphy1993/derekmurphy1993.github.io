export default function Mabout() {
	return (
		<div className="max-w-screen-xl mx-auto h-screen relative">
			<div className="flex flex-col mt-20 text-left text-xl ml-32 mr-48 min-w-[530px] max-w-[690px] relative">
				<p>
					<span className="text-6xl font-semibold text-[#4040B7]">
						My name is <br /> Derek Murphy,{" "}
					</span>
					<br />
					<br /> I am a front end developer passionate about bridging compelling design
					with real world solutions. Whether it be visualizing data or creating an
					intuitive tool that makes everyday tasks a little bit easier, I aim to make
					technology work for people.
				</p>
				<p className="mt-8">
					As a software developer, I built a{" "}
					<span
						className="text-[#4040B7] font-semibold hover:text-green-400 hover:underline"
						onClick={() => window.open("https://layoutfast.se.com/", "_blank")}
					>
						product configurator
					</span>{" "}
					to help clients select and model complex energy management equipment and created
					an{" "}
					<span
						className="text-[#4040B7] font-semibold hover:text-green-400 hover:underline"
						onClick={() => window.open("https://layoutfast.se.com/", "_blank")}
					>
						interactive event map
					</span>{" "}
					connecting nonprofits with the public.
				</p>
				<p className="mt-8">
					In the past I’ve worked a variety of roles, from designer at an aquatic leisure
					company to a managing a craft brewery. These experiences inspired me to find
					ways technology can help improve daily life and helped me develop a diverse
					skill set in design, communication, and problem-solving.
				</p>
				<p className="mt-8">
					Outside of work, you can find me at the local hack night, or cycling around the
					city, exploring and photographing new neighborhoods.{" "}
				</p>
			</div>
		</div>
	);
}
