import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiJavascript, SiPython, SiReact, SiRedux, SiTypescript } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";
import { trackEvent } from "../lib/analytics";
import seImage from "../assets/port/SEModernImage.jpg";
import MacroImage from "../assets/port/MacroPlanner.png";
import rapidImage from "../assets/port/rental.png";
import civicImage from "../assets/port/civic.webp";
import mbtaImage from "../assets/port/MBTA.png";

export default function NewHeader() {
	const [showNav, setShowNav] = useState(true);
	const lastScrollY = useRef(0);

	const strongestSkills = [
		{
			name: "React",
			Icon: SiReact,
			iconClass: "text-cyan-300",
		},
		{
			name: "TypeScript",
			Icon: SiTypescript,
			iconClass: "text-blue-400",
		},
		{
			name: "JavaScript",
			Icon: SiJavascript,
			iconClass: "text-yellow-300",
		},
	];

	const currentlyLearning = [
		{
			name: "Python",
			Icon: SiPython,
			iconClass: "text-yellow-200",
		},
		{
			name: "Redux",
			Icon: SiRedux,
			iconClass: "text-violet-300",
		},
	];

	const projects = [
		{
			title: "MacroPlanner",
			role: "Full Stack Development",
			description:
				"Fully functional react meal planning app focused on hitting key macro goals through stored recipes.",
			image: MacroImage,
			tech: ["react", "mongodb", "node"],
			siteUrl: "https://mealplanner-topaz.vercel.app/",
			repoUrl: "https://github.com/derekmurphy1993/mealplanner",
		},
		{
			title: "MBTA StopWatch",
			role: "Realtime Transit App",
			description:
				"Built a realtime transit experience focused on minute by minute commuting.",
			image: mbtaImage,
			tech: ["javascript", "react"],
			siteUrl: "https://mbta-stopwatchh.onrender.com/",
			repoUrl: "https://github.com/derekmurphy1993/MBTA-StopWatch-Chrome",
		},
		{
			title: "LayoutFast",
			role: "FE Software Engineer, LayoutFast",
			description:
				"Contributed front-end engineering for LayoutFast to improve workflow and visual clarity for users.",
			image: seImage,
			tech: ["react", "mongodb", "node"],
			siteUrl: "https://layoutfast.se.com/",
			blogUrl:
				"https://medium.com/@derekmurphy1993/schneider-electric-retrospective-b04124efb5e5",
		},
		{
			title: "Civic App",
			role: "Front End Engineer",
			description:
				"Created a community-focused browser app using location context to connect people with nearby events.",
			image: civicImage,
			tech: ["javascript", "react", "node"],
			blogUrl: "https://medium.com/@derekmurphy1993/civic-app-retrospective-75321a9ebd7c",
		},
		{
			title: "Rapid Rentals",
			role: "MERN Rental App",
			description:
				"Developed a rental platform where users can browse, post, and manage properties for sale or rent.",
			image: rapidImage,
			tech: ["react", "node", "express", "mongodb"],
			siteUrl: "https://mern-rapidrentals.onrender.com/",
			repoUrl: "https://github.com/derekmurphy1993/MERN_Proj",
		},
	];

	const handleProjectCardClick = (title) => {
		trackEvent("project_card_click", title);
	};

	const handleHeroSocialClick = (platform) => {
		trackEvent("hero_social_click", platform);
	};

	const handleContactSocialClick = (platform) => {
		trackEvent("contact_social_click", platform);
	};

	const handleResumeDownload = () => {
		trackEvent("resume_download", "contact_section");
	};

	const scrollToSection = (event, id) => {
		event.preventDefault();
		trackEvent("nav_section_click", id);
		const section = document.getElementById(id);
		if (!section) return;

		const startY = window.scrollY;
		const targetY = section.getBoundingClientRect().top + window.scrollY;
		const distance = targetY - startY;
		const duration = Math.min(2200, Math.max(1200, Math.abs(distance) * 1.4));
		const startTime = performance.now();

		// Slow weighted easing so movement passes by intermediate content.
		const easeInOutQuart = (t) =>
			t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

		const tick = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const eased = easeInOutQuart(progress);
			window.scrollTo(0, startY + distance * eased);
			if (progress < 1) requestAnimationFrame(tick);
		};

		requestAnimationFrame(tick);
	};

	const returnToSplash = (event) => {
		event.preventDefault();
		trackEvent("return_to_splash_click");
		document.cookie = "skip_splash=; path=/; max-age=0; samesite=lax";
		window.location.reload();
	};

	useEffect(() => {
		const onScroll = () => {
			const currentY = window.scrollY;
			const scrollingUp = currentY < lastScrollY.current;
			if (currentY < 40) {
				setShowNav(true);
			} else {
				setShowNav(scrollingUp);
			}
			lastScrollY.current = currentY;
		};

		lastScrollY.current = window.scrollY;
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="w-screen min-h-screen bg-zinc-900 flex flex-col">
			<nav
				className={`fixed top-0 left-0 right-0 z-50 h-14 border-b border-blue-500 text-white backdrop-blur-md bg-zinc-900/80 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}
			>
				<div className="mx-auto flex h-full items-center justify-center gap-4 px-4 text-xl text-gray-200">
					<a
						href="#home"
						onClick={(event) => scrollToSection(event, "home")}
						aria-label="Home"
					>
						Home
					</a>
					<a
						href="#about"
						onClick={(event) => scrollToSection(event, "about")}
						aria-label="About"
					>
						About
					</a>
					<a
						href="#experience"
						onClick={(event) => scrollToSection(event, "experience")}
						aria-label="Experience"
					>
						Experience
					</a>
					<a
						href="#projects"
						onClick={(event) => scrollToSection(event, "projects")}
						aria-label="Projects"
					>
						Projects
					</a>
					<a
						href="#contact"
						onClick={(event) => scrollToSection(event, "contact")}
						aria-label="Contact"
					>
						Contact
					</a>
				</div>
			</nav>
			<div className="h-14" aria-hidden="true" />

			<main
				id="home"
				className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center p-6"
			>
				<div className="w-full max-w-2xl min-h-56 text-center p-6 md:p-8">
					<h1 className="text-center font-semibold text-4xl text-gray-200">
						My name is{" "}
					</h1>
					<h1 className=" text-center font-semibold text-8xl text-blue-500/90">
						Derek Murphy
					</h1>
					<div className="">
						<p className="text-center text-2xl text-gray-200 mt-6 font-semibold">
							Visual crafter. Functional solutions.
						</p>
						<div className="mt-5 flex items-center justify-center">
							<button
								type="button"
								onClick={(event) => scrollToSection(event, "projects")}
								className="px-5 py-2 border border-gray-200 text-gray-200 min-w-44 hover:bg-blue-500 hover:text-zinc-900 hover:scale-125 transition-colors"
							>
								Projects
							</button>
						</div>
						<div className="mt-6 flex items-center justify-center gap-6 text-3xl">
							<a
								href="https://github.com/derekmurphy1993"
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub"
								onClick={() => handleHeroSocialClick("github")}
							>
								<FaGithub className="text-gray-200 hover:text-blue-500 hover:scale-125" />
							</a>
							<a
								href="https://www.linkedin.com/in/derekmurphy93/"
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn"
								onClick={() => handleHeroSocialClick("linkedin")}
							>
								<FaLinkedin className="text-gray-200 hover:text-blue-500 hover:scale-125" />
							</a>
							<a
								href="https://medium.com/@derekmurphy1993"
								target="_blank"
								rel="noreferrer"
								aria-label="Medium"
								onClick={() => handleHeroSocialClick("medium")}
							>
								<FaMedium className="text-gray-200 hover:text-blue-500 hover:scale-125" />
							</a>
						</div>
					</div>
				</div>
			</main>

			<section
				id="about"
				className="min-h-screen px-4 sm:px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12"
			>
				{" "}
				<div className="w-full max-w-xl lg:w-[36%] rounded-xl overflow-hidden">
					<div className="w-full py-20 bg-blue-500/10">
						<div className="px-5 sm:px-8 lg:pl-20 lg:pr-8 flex flex-col gap-6">
							<h1 className="text-6xl justify-between font-bold text-blue-500">
								{" "}
								At a Glance:{" "}
							</h1>
							<div>
								<span className="font-bold">Based in:</span> Chicago, Illinois{" "}
							</div>
							<div>
								<span className="font-bold">Years of Software Experience:</span>{" "}
								3+{" "}
							</div>
							<div>
								<span className="font-bold">Years of Design Experience:</span>{" "}
								7+{" "}
							</div>

							<div>
								<span className="font-bold">Strongest Skills: </span>
								<div className="mt-2 flex flex-wrap items-center gap-3 text-2xl">
									{strongestSkills.map(({ name, Icon, iconClass }) => (
										<span
											key={name}
											title={name}
											aria-label={name}
											className="group/skill relative inline-flex rounded-md border border-blue-500/40 bg-zinc-900/50 p-2"
										>
											<Icon className={iconClass} />
											<span className="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-[10px] font-semibold text-gray-100 shadow-md group-hover/skill:block">
												{name}
											</span>
										</span>
									))}
								</div>
							</div>
							<div>
								<span className="font-bold">Currently Learning: </span>
								<div className="mt-2 flex flex-wrap items-center gap-3 text-2xl">
									{currentlyLearning.map(({ name, Icon, iconClass }) => (
										<span
											key={name}
											title={name}
											aria-label={name}
											className="group/skill relative inline-flex rounded-md border border-blue-500/40 bg-zinc-900/50 p-2"
										>
											<Icon className={iconClass} />
											<span className="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-[10px] font-semibold text-gray-100 shadow-md group-hover/skill:block">
												{name}
											</span>
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col text-left text-base sm:text-lg lg:text-xl w-full max-w-2xl lg:max-w-[690px] relative">
					<p className="text-6xl mb-6 font-semibold text-blue-500">About Me</p>
					<p className="mb-2">
						From a young age, I found wonder in the vast world of creativity that
						existed on the early web. No matter where my career took me, that amazement
						never went away.
					</p>
					<p className="mb-2">
						My name is Derek Murphy, a front end developer passionate about bridging
						compelling design with real-world solutions. Whether it's visualizing data
						or building an intuitive tool that makes everyday tasks a little easier, I
						like to make technology actually work for people.
					</p>
					<p className="mb-2">
						I didn't start as a programmer. I've designed for an aquatic leisure
						company, managed a craft brewery, and picked up a pretty eclectic mix of
						skills along the way. Some of my earliest projects were tools I built for my
						jobs: small automated tasks that let me focus on the most rewarding parts of
						the work.
					</p>
					<p className="mb-2">
						Outside of work, you'll find me at the local hack night, kayaking the river,
						or photographing whatever neighborhood I've wandered into that week.
					</p>
				</div>
			</section>

			<Timeline />

			<section
				id="projects"
				className="min-h-screen px-6 py-20 flex items-center justify-center"
			>
				<div className="w-full max-w-6xl">
					<h2 className="mb-10 text-center text-2xl md:text-3xl text-purple-400 font-bold">
						Projects
					</h2>
					<div className="grid gap-6 md:grid-cols-2">
						{projects.map((project) => (
							<div
								key={project.title}
								onClickCapture={() => handleProjectCardClick(project.title)}
							>
								<ProjectCard {...project} />
							</div>
						))}
					</div>
				</div>
			</section>

			<section
				id="contact"
				className="min-h-screen px-6 py-20 flex items-center justify-center"
			>
				<div className="w-full max-w-2xl text-center border border-blue-500/40 rounded-lg p-6 md:p-8 bg-zinc-900/50">
					<h2 className="text-2xl md:text-3xl text-purple-400 font-bold mb-4">Contact</h2>
					<div className="mt-2 space-y-3 text-left max-w-md mx-auto">
						<div className="flex items-center gap-3 text-gray-200">
							<FaEnvelope className="text-xl" />
							<span>Email</span>
							<a
								href="mailto:derekmurphy1993@gmail.com"
								onClick={() => trackEvent("contact_email_click")}
								className="text-blue-400 hover:underline"
							>
								derekmurphy1993@gmail.com
							</a>
						</div>
						<a
							href="https://github.com/derekmurphy1993"
							target="_blank"
							rel="noreferrer"
							onClick={() => handleContactSocialClick("github")}
							className="flex items-center gap-3 text-gray-200 hover:text-blue-400"
						>
							<FaGithub className="text-xl" />
							<span>
								GitHub{" "}
								<span className="text-sm text-gray-400">
									https://github.com/derekmurphy1993
								</span>
							</span>
						</a>
						<a
							href="https://medium.com/@derekmurphy1993"
							target="_blank"
							rel="noreferrer"
							onClick={() => handleContactSocialClick("medium")}
							className="flex items-center gap-3 text-gray-200 hover:text-blue-400"
						>
							<FaMedium className="text-xl" />
							<span>
								Medium{" "}
								<span className="text-sm text-gray-400">
									https://medium.com/@derekmurphy1993
								</span>
							</span>
						</a>
						<a
							href="https://www.linkedin.com/in/derekmurphy93/"
							target="_blank"
							rel="noreferrer"
							onClick={() => handleContactSocialClick("linkedin")}
							className="flex items-center gap-3 text-gray-200 hover:text-blue-400"
						>
							<FaLinkedin className="text-xl" />
							<span>
								LinkedIn{" "}
								<span className="text-sm text-gray-400">
									https://www.linkedin.com/in/derekmurphy93/
								</span>
							</span>
						</a>
					</div>
					<div className="mt-6 flex items-center justify-center gap-4">
						<a
							href="/DerekMurphy_Resume.pdf"
							download
							onClick={handleResumeDownload}
							className="inline-block rounded border border-blue-400/70 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-blue-500 hover:text-zinc-900"
						>
							Download Resume
						</a>
						<a
							href="/"
							onClick={returnToSplash}
							aria-label="Return to splash page"
							className="inline-block text-xl transition-transform duration-200 hover:scale-125"
						>
							🕊️
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

//🕊️
