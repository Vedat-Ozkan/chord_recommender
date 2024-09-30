
import playNote from "./playNote";


export default function playChord(noteNames: string[]) {
	return noteNames.map((e) => playNote(e));
}