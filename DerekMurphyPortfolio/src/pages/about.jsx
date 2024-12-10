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
		</div>
	);
}
