import {
	SiCss3,
	SiExpress,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiNodedotjs,
	SiReact,
} from "react-icons/si";
import { trackEvent } from "../lib/analytics";

const techIconMap = {
	html: { Icon: SiHtml5, colorClass: "text-orange-400", label: "HTML" },
	css: { Icon: SiCss3, colorClass: "text-blue-400", label: "CSS" },
	javascript: {
		Icon: SiJavascript,
		colorClass: "text-yellow-300",
		label: "JavaScript",
	},
	react: { Icon: SiReact, colorClass: "text-cyan-300", label: "React" },
	node: { Icon: SiNodedotjs, colorClass: "text-lime-400", label: "Node.js" },
	express: { Icon: SiExpress, colorClass: "text-gray-300", label: "Express" },
	mongodb: { Icon: SiMongodb, colorClass: "text-emerald-400", label: "MongoDB" },
};

export default function ProjectCard({
	title,
	role,
	description,
	image,
	siteUrl,
	repoUrl,
	blogUrl,
	tech = [],
}) {
	return (
		<article className="group overflow-hidden rounded-xl border border-blue-500/40 bg-zinc-900/70 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-400/70">
			{image ? (
				<div className="h-64 overflow-hidden border-b border-blue-500/30 bg-zinc-800">
					<img
						src={image}
						alt={title}
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
			) : null}

			<div className="space-y-3 p-5 text-left">
				<h3 className="text-2xl font-semibold text-blue-400">{title}</h3>
				{role ? <p className="text-sm font-medium text-gray-200">{role}</p> : null}
				{description ? <p className="text-sm text-gray-300">{description}</p> : null}
				{tech.length ? (
					<div className="flex items-center gap-2">
						<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
							Tech:
						</p>
						<div className="flex flex-wrap items-center gap-2 text-lg">
							{tech.map((item) => {
								const iconData = techIconMap[item];
								if (!iconData) return null;
								const { Icon, colorClass, label } = iconData;
								return (
									<span
										key={`${title}-${item}`}
										title={label}
										aria-label={label}
										className="group/tech relative inline-flex"
									>
										<Icon className={colorClass} />
										<span className="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-[10px] font-semibold text-gray-100 shadow-md group-hover/tech:block">
											{label}
										</span>
									</span>
								);
							})}
						</div>
					</div>
				) : null}

				<div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold text-gray-200">
					{siteUrl ? (
						<a
							href={siteUrl}
							target="_blank"
							rel="noreferrer"
							onClick={() => trackEvent("project_live_site_click", title)}
							className="rounded border border-blue-400/70 px-3 py-1 hover:bg-blue-500 hover:text-zinc-900"
						>
							Live Site
						</a>
					) : null}
					{repoUrl ? (
						<a
							href={repoUrl}
							target="_blank"
							rel="noreferrer"
							onClick={() => trackEvent("project_github_click", title)}
							className="rounded border border-blue-400/70 px-3 py-1 hover:bg-blue-500 hover:text-zinc-900"
						>
							GitHub
						</a>
					) : null}
					{blogUrl ? (
						<a
							href={blogUrl}
							target="_blank"
							rel="noreferrer"
							onClick={() => trackEvent("project_blog_click", title)}
							className="rounded border border-blue-400/70 px-3 py-1 hover:bg-blue-500 hover:text-zinc-900"
						>
							Blog Post
						</a>
					) : null}
				</div>
			</div>
		</article>
	);
}
