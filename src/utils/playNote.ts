import { midi, Note } from "tonal";
import Notes from '../utils/importNotes';


export default function playNote(noteName: string) {
	const note = Note.get(noteName);
	const fileNumber = note.midi || 21 - 20;

	return Notes.at(fileNumber);
}