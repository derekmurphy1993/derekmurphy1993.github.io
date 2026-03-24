import { trackEvent } from "../lib/analytics";

const experienceEvents = [
	{
		year: "2023",
		title: "Moved to Chicago",
		desc: "Relocated to Chicago and plugged into a new community of builders and creators.",
		links: [],
		side: "right",
	},
	{
		year: "2022",
		title: "Schnider Electric",
		desc: "Contracted front-end engineer, rebuilding and enhancing platform features in React.",
		links: [
			{
				label: "LayoutFast",
				url: "https://layoutfast.se.com/",
			},
		],
		side: "left",
	},
	{
		year: "2021",
		title: "Civic App",
		desc: "Start up React app connecting nonprofits to volunteers and donors in their area.",
		links: [
			{
				label: "Civic Retrospective",
				url: "https://medium.com/@derekmurphy1993/civic-app-retrospective-75321a9ebd7c",
			},
		],
		side: "right",
	},
	{
		year: "2019 - 2020",
		title: "General Assembly",
		desc: "Completed an immersive software engineering program focused on full-stack JavaScript.",
		links: [],
		side: "left",
	},
	{
		year: "2016 - 2019",
		title: "Freelance Graphic Design",
		desc: "Collaborated with clients on branding, digital campaigns, and polished visual design deliverables.",
		links: [],
		side: "right",
	},
	{
		year: "2015",
		title: "Graduated",
		desc: "U. of Massachusetts Dartmouth, BFA in Digital Media",
		links: [],
		side: "left",
	},
];

export default function Timeline() {
	return (
		<section
			id="experience"
			className="min-h-screen px-6 py-20 flex items-center justify-center"
		>
			<div className="w-full max-w-6xl">
				<div className="mb-6 flex items-center justify-between">
					<h2 className="text-2xl md:text-3xl text-purple-400 font-bold">Experience</h2>
					<a
						href="/DerekMurphy_Resume.pdf"
						download
						onClick={() => trackEvent("resume_download", "experience_section")}
						className="rounded border border-blue-400/70 px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-blue-500 hover:text-zinc-900"
					>
						Download Resume
					</a>
				</div>

				<div className="md:hidden space-y-4">
					{experienceEvents.map((event) => (
						<article
							key={`${event.year}-${event.title}`}
							className="rounded-lg border border-blue-500/40 bg-zinc-900/70 p-4"
						>
							<p className="text-xs font-semibold tracking-wide text-slate-300">
								{event.year}
							</p>
							<p className="mt-1 text-sm font-semibold text-blue-300">
								{event.title}
							</p>
							<p className="mt-1 max-w-72 text-gray-200">{event.desc}</p>
							{event.links?.length ? (
								<div className="mt-2 flex flex-wrap gap-3">
									{event.links.map((link) => (
										<a
											key={`${event.year}-${link.url}`}
											href={link.url}
											target="_blank"
											rel="noreferrer"
											onClick={() => trackEvent("experience_link_click", link.label)}
											className="text-sm font-semibold text-blue-400 hover:underline"
										>
											{link.label}
										</a>
									))}
								</div>
							) : null}
						</article>
					))}
				</div>

				<div className="relative mx-auto hidden max-w-5xl py-8 md:block">
					<div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
					<div className="space-y-16">
						{experienceEvents.map((event) => (
							<div
								key={`${event.year}-${event.title}`}
								className="relative grid grid-cols-2 items-center"
							>
								{event.side === "left" ? (
									<div className="pr-20 text-right relative">
										<span className="absolute right-0 top-4 h-1 w-14 -translate-y-1/2 bg-zinc-500" />
										<span className="absolute right-11 top-4 h-6 w-6 -translate-y-1/2 rounded-full bg-blue-500" />
										<h3 className="text-2xl font-bold leading-tight text-blue-500">
											{event.title}
										</h3>
										<p className="mt-1 text-sm font-semibold text-slate-300">
											{event.year}
										</p>
										<p className="mt-1 text-gray-200">{event.desc}</p>
										{event.links?.length ? (
											<div className="mt-2 flex flex-wrap justify-end gap-3">
												{event.links.map((link) => (
													<a
														key={`${event.year}-${link.url}`}
														href={link.url}
														target="_blank"
														rel="noreferrer"
														onClick={() =>
															trackEvent("experience_link_click", link.label)
														}
														className="text-sm font-semibold text-blue-400 hover:underline"
													>
														{link.label}
													</a>
												))}
											</div>
										) : null}
									</div>
								) : (
									<div />
								)}

								{event.side === "right" ? (
									<div className="pl-20 text-left relative">
										<span className="absolute left-0 top-4 h-1 w-14 -translate-y-1/2 bg-zinc-500" />
										<span className="absolute left-11 top-4 h-6 w-6 -translate-y-1/2 rounded-full bg-blue-500" />
										<h3 className="text-2xl font-bold leading-tight text-blue-500">
											{event.title}
										</h3>
										<p className="mt-1 text-sm font-semibold text-slate-300">
											{event.year}
										</p>
										<p className="mt-1 text-gray-200">{event.desc}</p>
										{event.links?.length ? (
											<div className="mt-2 flex flex-wrap gap-3">
												{event.links.map((link) => (
													<a
														key={`${event.year}-${link.url}`}
														href={link.url}
														target="_blank"
														rel="noreferrer"
														onClick={() =>
															trackEvent("experience_link_click", link.label)
														}
														className="text-sm font-semibold text-blue-400 hover:underline"
													>
														{link.label}
													</a>
												))}
											</div>
										) : null}
									</div>
								) : (
									<div />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
