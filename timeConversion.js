"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
	const regExTime = /(\d{2}:\d{2}:\d{2})/g;
	const fullTime = s.split(regExTime).filter((c) => c !== "");

	const timeSplited = fullTime[0].split(":");
	const timeIndicator = fullTime[1];

	if (timeIndicator === "PM") {
		if (timeSplited[0] !== "12") timeSplited[0] = (+timeSplited[0] + 12).toString();
	} else if (timeIndicator === "AM") {
		if (timeSplited[0] === "12") {
			timeSplited[0] = "00";
		}
	}

	return timeSplited.join(":");
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = readLine();

	const result = timeConversion(s);

	ws.write(result + "\n");

	ws.end();
}
