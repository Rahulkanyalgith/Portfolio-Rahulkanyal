"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {
	words: string[];
	typeSpeed?: number;
	deleteSpeed?: number;
	delaySpeed?: number;
	className?: string;
};

function MyTypewriter({ words, typeSpeed = 70, deleteSpeed = 50, delaySpeed = 1500, className = "" }: Props) {
	return (
		<div className={className}>
			<Typewriter
				words={words}
				cursor
				cursorColor="grey"
				typeSpeed={typeSpeed}
				deleteSpeed={deleteSpeed}
				delaySpeed={delaySpeed}
				loop
			/>
		</div>
	);
}

export default MyTypewriter;
