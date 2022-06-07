import type { NextPage } from "next";
import { useCallback } from "react";

const GradientComponent: NextPage = () => {
	const randGen = (min: number, max: number) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		const rand = Math.floor(Math.random() * (max - min + 1)) + min;
		return rand;
	};
	const randomGradType = () => {
		const gradType = new Array("linear", "radial");
		const randGradType = gradType[Math.floor(Math.random() * gradType.length)];
		return randGradType;
	};
	const randomColor = useCallback(() => {
		const randRGB =
			randGen(0, 255) + "," + randGen(0, 255) + "," + randGen(0, 255);
		return randRGB;
	}, []);
	const randAngle = useCallback(() => {
		const randAngle = randGen(0, 90) + "deg";
		return randAngle;
	}, []);
	return (
		<>
			<div
				style={{
					height: "50%",
					background:
						"" +
						randomGradType() +
						"-gradient(rgb(" +
						randomColor() +
						"), rgb(" +
						randomColor() +
						"))",
				}}
			></div>
			<div
				style={{
					height: "50%",
					background:
						"" +
						randomGradType() +
						"-gradient(rgb(" +
						randomColor() +
						"), rgb(" +
						randomColor() +
						"))",
				}}
			></div>
		</>
	);
};
export default GradientComponent;
