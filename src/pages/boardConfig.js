import { Euler, Vector3 } from "three";

export const BOARD_WIDTH = 8;
export const BOARD_HEIGHT = 6;
export const BOARD_DEPTH = 0.1;
export const BOARD_FRAME_THICKNESS = 0.2;

export const NUM_RIBS = 8;
export const RIB_SPACING = BOARD_HEIGHT / (NUM_RIBS + 1);

export const BOARD_ROTATION = new Euler(0.01, -0.2, 0);
export const BOARD_POSITION = new Vector3(0, BOARD_HEIGHT / 2 + 0.4, 4.5);

export const BOARD_HALF_WIDTH = BOARD_WIDTH / 2;
export const BOARD_HALF_HEIGHT = BOARD_HEIGHT / 2;

// Small offset so letters sit just above the board front face.
export const LETTER_SURFACE_Z = BOARD_DEPTH / 2 + 0.08;

export function getRibLocalY(index) {
	return BOARD_HALF_HEIGHT - (index + 1) * RIB_SPACING;
}
