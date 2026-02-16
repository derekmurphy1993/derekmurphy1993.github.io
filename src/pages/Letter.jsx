import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";

export default function Letter({ letter, isDragging }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: letter.id,
	});

	const style = {
		position: "absolute",
		left: `${letter.x}px`,
		top: `${letter.y}px`,
		transform: CSS.Translate.toString(transform),
		opacity: isDragging ? 0 : 1,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className="w-10 h-10 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex items-center justify-center font-bold text-4xl cursor-move select-none"
		>
			{letter.char}
		</div>
	);
}

Letter.propTypes = {
	letter: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		char: PropTypes.string.isRequired,
	}).isRequired,
	isDragging: PropTypes.bool,
};

Letter.defaultProps = {
	isDragging: false,
};
