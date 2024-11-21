import React from "react";
import self from "../assets/selfie.jpg";

export default function Portfolio() {
	return (
		<div className="border-4 overflow-hidden border-slate-300 mt-8 h-72 bg-slate-400">
			<div className="flex flex-row h-[40px] border-4 w-full text-slate-100 font-semibold bg-gradient-to-r from-blue-800 to-blue-300 relative">
				<p className="text-center m-auto">LayoutFast.SE</p>
				<div className="font-bold p-2 text-slate-800 bg-slate-400 border-r-black border-l-white mr">
					X
				</div>
			</div>
			<img src={self} className="w-full h-full"></img>
		</div>
	);
}
