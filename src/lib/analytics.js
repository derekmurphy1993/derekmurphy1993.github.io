const GOATCOUNTER_URL = import.meta.env.VITE_GOATCOUNTER_URL?.trim();

let analyticsInitialized = false;

function toSafeEventPath(name) {
	return String(name)
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-_]/g, "");
}

export function initAnalytics() {
	if (typeof window === "undefined") return;
	if (!GOATCOUNTER_URL) return;
	if (analyticsInitialized) return;

	if (document.querySelector("script[data-analytics='goatcounter']")) {
		analyticsInitialized = true;
		return;
	}

	const script = document.createElement("script");
	script.async = true;
	script.src = "https://gc.zgo.at/count.js";
	script.dataset.goatcounter = GOATCOUNTER_URL;
	script.dataset.analytics = "goatcounter";
	document.head.appendChild(script);

	analyticsInitialized = true;
}

export function trackEvent(name, metadata = "") {
	if (typeof window === "undefined") return;
	if (!window.goatcounter || typeof window.goatcounter.count !== "function") return;

	const safeName = toSafeEventPath(name);
	if (!safeName) return;

	window.goatcounter.count({
		path: `/event/${safeName}`,
		title: metadata ? `${name}: ${metadata}` : name,
		event: true,
	});
}
