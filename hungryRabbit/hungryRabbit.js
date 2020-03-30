// There is a rabbit that starts in the middle of an n x m matrix, n > 0, m > 0.
// Each element of a matrix is an integer representing points gained for being on the spot. 
// If there are multiple possible "middles" then choose the one which has the highest point value to start on. 
// On each iteration, the rabbit can move up, left, right, or down. 
// The rabbit will always move to the next spot with the highest point value 
// and will "consume" those points (set the point value in that position to 0). 
// The rabbit spots when all positions around it are 0s. Calculate how many points the rabbit will score for a given m x n matrix.


/* Does not return the right results!!! */
const hungryRabbit = matrix => {
	const m = matrix.length; 		// length of cols
	const n = matrix[0].length; // length of rows 
	let carrotsEaten = 0;

	// helper functions 
	const consumeCarrotsAt = currSquare => {
		const [ x, y ] = currSquare;
		carrotsEaten += matrix[x][y];
		matrix[x][y] = 0;
	}

	const findNextSquareWithCarrots = (currSquare) => {
		const m = matrix.length; 		// length of cols
		const n = matrix[0].length; // length of rows 

		const [ x, y ] = currSquare;
		const neighbors = [
			[x + 1, y], // move right
			[x - 1, y], // move left
			[x, y + 1], // move up 
			[x, y - 1] //  move down 
		]
			.filter(neighbor => { // filter out neighbors out of bounds
				const [ x, y ] = neighbor;
				return x >= 0 && x < m && y >= 0 && y < n;
			});
		
		let maxCarrots = 0;
		let nextSquare = null;
		neighbors.forEach(neighbor => { // find neighbor with max carrots
			const [ x, y ] = neighbor;
			if (matrix[x][y] > maxCarrots) {
				maxCarrots = matrix[x][y];
				nextSquare = [x, y];
			}
		});
		return nextSquare; // return square with most carrots
	}

	const startingX = Math.ceil(m/2);
	const startingY = Math.ceil(n/2);
	let rabbitPosition = [startingX, startingY];
	while (rabbitPosition) {
		consumeCarrotsAt(rabbitPosition);
		matrix.forEach(row => console.log(row));
		console.log();
		rabbitPosition = findNextSquareWithCarrots(rabbitPosition);
	}
	return carrotsEaten;
}

// hungryRabbit([
// 	[1, 2, 4, 2],
// 	[6, 3, 8, 1],
// 	[3, 5, 6, 2],
// 	[5, 7, 8, 1]
// ]);

let garden = [
    [5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]
];

// console.log(hungryRabbit([
// 	[1, 2, 4, 2],
// 	[6, 3, 8, 1],
// 	[3, 5, 6, 2],
// 	[5, 7, 8, 1]
// ]));

console.log(hungryRabbit(garden));