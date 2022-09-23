/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n Board Size
 *  2. INTEGER k number of obstacles
 *  3. INTEGER r_q queens row
 *  4. INTEGER c_q queens column
 *  5. 2D_INTEGER_ARRAY obstacles obstacles position
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
	console.log(obstacles);
	for (let row = 0, column = 0; row < n && column < n; row++, column++) {
		console.log(`
        ${row} , ${column}
        `);
	}
}
queensAttack();
