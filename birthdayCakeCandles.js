"use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
// 	inputString += inputStdin;
// });

// process.stdin.on("end", function () {
// 	inputString = inputString.split("\n");

// 	main();
// });

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
	return candles.sort((a, b) => a - b).filter((element) => element === candles[candles.length - 1]).length;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const candlesCount = parseInt(readLine().trim(), 10);

	const candles = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((candlesTemp) => parseInt(candlesTemp, 10));

	const result = birthdayCakeCandles(candles);

	ws.write(result + "\n");

	ws.end();
}

birthdayCakeCandles([3, 2, 1, 3]);
