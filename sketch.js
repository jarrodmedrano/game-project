/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/


let isLeft = false,
	isRight = false,
	isPlummeting = false,
	isFalling = false;
/**
* Background stuff
*/

const groundLevel = 432;
const floorPos_y = groundLevel;
const mountains = [
	{
		pos_x: 300,
		height: 400
	},
	{
		pos_x: 150,
		height: 300
	},
	{
		pos_x: 500,
		height: 200
	},
	{
		pos_x: 1000,
		height: 200
	},
	{
		pos_x: 1500,
		height: 400
	}
];

const clouds = [
	{
		pos_x: 100,
		pos_y: 100
	},
	{
		pos_x: 600,
		pos_y: 150
	},
	{
		pos_x: 1000,
		pos_y: 200
	}
]

const trees_x = [
	200,
	100,
	1000
]
/**
 * Character Stuff
 */

const gameCharHeight = 100;
const gameCharYStart = groundLevel - (gameCharHeight / 2);

let gameChar_x = 56;
let gameChar_y = gameCharYStart;


function drawCharacter() {
	noStroke();
	fill(0, 0, 128);
	ellipse(gameChar_x, gameChar_y, 55, gameCharHeight);
	fill(255, 255, 255);
	ellipse(gameChar_x, gameChar_y, 10, 10);
	fill(255, 255, 255);
	ellipse(gameChar_x + 10, gameChar_y, 10, 10);
}

function drawCharacterLeft() {
	noStroke();
	fill(0, 0, 128);
	ellipse(gameChar_x, gameChar_y, 55, gameCharHeight);
	fill(255, 255, 255);
	ellipse(gameChar_x - 20, gameChar_y, 10, 10);
	fill(255, 255, 255);
	ellipse(gameChar_x - 10, gameChar_y, 10, 10);
}

function drawCharacterRight() {
	noStroke();
	fill(0, 0, 128);
	ellipse(gameChar_x, gameChar_y, 55, gameCharHeight);
	fill(255, 255, 255);
	ellipse(gameChar_x + 20, gameChar_y, 10, 10);
	fill(255, 255, 255);
	ellipse(gameChar_x + 10, gameChar_y, 10, 10);
}

function drawGround() {
	noStroke();
	fill(0, 155, 0);
	rect(0, groundLevel, 1024, 144); //draw some green ground
}

function drawMountain(pos_x, height) {
	noStroke();
	fill(0, 118, 255);
	triangle(
		pos_x - height / 2, floorPos_y,
		pos_x, floorPos_y - height,
		pos_x + 45 + height / 2, floorPos_y
	)
}

function drawTree(pos_x) {
	noStroke();
	fill(139, 69, 19);
	triangle(pos_x, 432, pos_x + 150, 432, pos_x + 70, 225);
	fill(0, 155, 0);
	triangle(pos_x, 250, pos_x + 150, 250, pos_x + 70, 200);
	triangle(pos_x, 300, pos_x + 150, 300, pos_x + 70, 225);
}

function drawCanyon() {
	noStroke();
	fill(139, 69, 19);
	triangle(70, 432, 200, 432, 130, 600);
}


function drawSky() {
	background(100, 155, 255);
}



function drawCloud(pos_x, pos_y) {
	noStroke();
	fill(255);
	ellipse(pos_x, pos_y, 100);
	ellipse(pos_x + 50, pos_y - 40, 100, 100);
	ellipse(pos_x + 50, pos_y, 100, 100);
	ellipse(pos_x + 100, pos_y, 100, 100);
}


function setup() {
	createCanvas(1024, 576);
}

function draw() {
	drawSky();

	drawGround();

	for (let i = 0; i < clouds.length; i++) {
		drawCloud(clouds[i].pos_x, clouds[i].pos_y);
	}

	for (let i = 0; i < mountains.length; i++) {
		drawMountain(mountains[i].pos_x, mountains[i].height);
	}

	for (let i = 0; i < trees_x.length; i++) {
		drawTree(trees_x[i]);
	}


	if (isLeft && isFalling) {
		//add your jumping left code
	} else if (isRight && isFalling) {


	} else if (isLeft) {
		drawCharacterLeft();
	} else if (isRight) {
		drawCharacterRight();
	} else if (isFalling || isPlummeting) {

	} else {
		drawCharacter();
	}



	if (isRight == true) {
		gameChar_x += 2;
		if (gameChar_x >= width) {
			gameChar_x = width;
		}
	}
	else if (isLeft == true) {
		gameChar_x -= 2;
		if (gameChar_x <= 0) {
			gameChar_x = 0;
		}
	}
	else if (isPlummeting == true) {
		gameChar_y += 5;
	}

	// if (gameChar_y < floorPos_y) {
	// 	gameChar_y += 2;
	// 	isFalling = true;
	// }
	// else {
	// 	isFalling = false;
	// }
	//console.log(gameChar_x, canyon.x_pos);
	// if (gameChar_x >= canyon.x_pos - 20 && gameChar_x <= canyon.x_pos + 10 && isFalling == false) {
	// 	isPlummeting = true;
	// 	isRight = false;
	// 	isLeft = false;
	// }



	// push();
	// translate(440, 350);
	// rotate(frameCount / -100.0);
	// fill(255, 255, 0);
	// pop();
}

function keyPressed() {
	if (keyCode == 37) {
		console.log('left arrow', isLeft);
		isLeft = true;
		isRight = false;
	}

	if (keyCode == 39) {
		console.log('right arrow', isRight);
		isRight = true;
		isLeft = false;
	}
}

function keyReleased() {
	if (keyCode == 37) {
		console.log('left arrow', isLeft);
		isLeft = false;
	}

	if (keyCode == 39) {
		console.log('right arrow', isRight);
		isRight = false;
	}
}