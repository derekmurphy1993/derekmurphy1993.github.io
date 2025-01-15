import bos from "../assets/gifs/boston.gif";
import arrow from "../assets/gifs/arrow1.gif";
import chi from "../assets/gifs/chi.gif";

export default function about() {
	return (
		<div className="flex flex-row">
			<div className="flex flex-row">
				<img src={bos} className="h-36" />
				<div>
					<img src={arrow} />
					<img src={arrow} />
					<img src={arrow} />
				</div>
				<img src={chi} className="h-96" />
			</div>
			<div>
				<p>
					My name is Derek Murphy, I am a front end developer passionate about bridging
					compelling design with real world solutions. Whether it be visualizing data or
					creating an intuitive tool that makes everyday tasks a little bit easier, I aim
					to make technology work for people.
				</p>
				<p>
					As a software developer contracted for Schneider Electric, I helped to build a
					product configurator to help clients select and model complex energy management
					equipment. Before that I created an event map for Civic, a startup dedicated to
					connecting NYC nonprofits with the general public.
				</p>
				<p>
					In the past I’ve worked a variety of roles, from a graphic designer at a pool
					toy company to a bartender and chef at a craft brewer. These experiences
					inspired me to find ways technology can help improve daily life and helped me
					develop a diverse skill set in design, communication, and problem-solving.
				</p>
				<p>
					Outside of work, you can find me at the local hack night, or cycling around the
					city, exploring and photographing new neighborhoods.{" "}
				</p>
			</div>
		</div>
	);
}
