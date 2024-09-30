import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {Chord, Note, Scale} from "tonal";
import playNote from "../utils/playNote";
import useSound from 'use-sound';
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'



export default function ChordBox() {
	const [chord, setChord] = useState(Note.get("C5").name);	
	const [play] = useSound(playNote(chord));
	return <TextField label={chord} value={chord} name={chord} onChange={(e) => {setChord(e.target.value)}} onClick={() => play()}/>;
}