import { useState } from "react";
import { DndContext, DragOverlay, pointerWithin } from "@dnd-kit/core";
import Letter from "./Letter";

export default function M_Header() {
	const BOARD_WIDTH = 1000;
	const BOARD_HEIGHT = 600;
	const LINE_SPACING = 50;
	const LETTER_HEIGHT = 50;

	const lines = Array.from(
		{ length: Math.floor(BOARD_HEIGHT / LINE_SPACING) },
		(_, i) => i * LINE_SPACING,
	);

	const initializeLetters = () => {
		const line1 = "Derek Murphy";
		const line2 = "Software Developer";
		const line3 = "Chicago, IL";

		const letter1 = line1.split("").map((char, index) => ({
			id: `letter-${index}`,
			char: char,
			x: 100 + index * 25,
			y: lines[2] - LETTER_HEIGHT / 2,
		}));
		const letter2 = line2.split("").map((char, index) => ({
			id: `letter2-${index}`,
			char: char,
			x: 100 + index * 25,
			y: lines[4] - LETTER_HEIGHT / 2,
		}));
		const letter3 = line3.split("").map((char, index) => ({
			id: `letter3-${index}`,
			char: char,
			x: 100 + index * 25,
			y: lines[5] - LETTER_HEIGHT / 2,
		}));
		var text = [...letter1, ...letter2, ...letter3];
		return text;
	};

	const [letters, setLetters] = useState(initializeLetters());
	const [activeId, setActiveId] = useState(null);

	const handleDragStart = (event) => {
		setActiveId(event.active.id);
	};

	const handleDragEnd = (event) => {
		const { active, delta } = event;

		setLetters((prev) =>
			prev.map((letter) => {
				if (letter.id === active.id) {
					const newX = letter.x + delta.x;
					const newY = letter.y + delta.y;

					// Find closest horizontal line
					const closestLine = lines.reduce(
						(prev, curr) => {
							const targetY = curr - LETTER_HEIGHT / 2;
							return Math.abs(targetY - newY) < Math.abs(prev - newY)
								? targetY
								: prev;
						},
						lines[0] - LETTER_HEIGHT / 2,
					);

					return {
						...letter,
						x: Math.max(0, Math.min(newX, BOARD_WIDTH - 40)),
						y: closestLine,
					};
				}
				return letter;
			}),
		);

		setActiveId(null);
	};

	const activeLetter = letters.find((l) => l.id === activeId);

	return (
		<DndContext
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			collisionDetection={pointerWithin}
		>
			<div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-8">
				<div
					className="relative bg-zinc-900/30 border-8 border-gray-600 shadow-2xl"
					style={{ width: BOARD_WIDTH, height: BOARD_HEIGHT }}
				>
					{/* Horizontal lines */}
					{lines.map((y, index) => (
						<div
							key={index}
							className="absolute w-full border-t border-gray-500/50"
							style={{ top: y }}
						/>
					))}

					{/* Letters */}
					{letters.map((letter) => (
						<Letter
							key={letter.id}
							letter={letter}
							isDragging={letter.id === activeId}
						/>
					))}
				</div>
			</div>

			<DragOverlay>
				{activeLetter && (
					<div className="w-10 h-10 text-white flex items-center justify-center font-bold text-5xl shadow-4xl">
						{activeLetter.char}
					</div>
				)}
			</DragOverlay>
		</DndContext>
	);
}
