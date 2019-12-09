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

/**
 * Background stuff
 */

const groundLevel = 432;

/**
 * Character Stuff
 */

const gameCharHeight = 100;
const gameCharYStart = groundLevel - (gameCharHeight / 2);
console.log('height', gameCharHeight);
console.log('ground level', groundLevel);
console.log('START', gameCharYStart);

let gameChar_x = 0;
let gameChar_y = gameCharYStart;


function setup() {
	createCanvas(1024, 576);
}

function drawGround() {
	noStroke();
	fill(0, 155, 0);
	rect(0, groundLevel, 1024, 144); //draw some green ground
}

function drawCloud() {
	noStroke();
	fill(255);
	ellipse(100, 100, 100);
	ellipse(150, 60, 100, 100);
	ellipse(150, 100, 100, 100);
	ellipse(200, 100, 100, 100);
	text("cloud", 200, 100);
}

function drawMountain() {
	noStroke();
	fill(70, 130, 180);
	triangle(380, 432, 600, 232, 930, 432);
	fill(70, 130, 180);
	triangle(240, 432, 450, 332, 930, 432);
	fill(70, 130, 180);
	triangle(640, 432, 850, 332, 1030, 432);
}

function drawTree() {
	noStroke();
	fill(139, 69, 19);
	triangle(750, 432, 900, 432, 820, 225);
	fill(0, 155, 0);
	triangle(750, 250, 900, 250, 820, 200);
	triangle(750, 300, 900, 300, 820, 225);
}

function drawCanyon() {
	noStroke();
	fill(139, 69, 19);
	triangle(70, 432, 200, 432, 130, 600);
}

function drawCharacter() {
	noStroke();
	fill(139, 69, 19);
	ellipse(56, gameChar_y, 55, gameCharHeight);
	fill(255, 255, 255);
	ellipse(10, 10, 10, 10);
}

function drawSky() {
	background(100, 155, 255);
}

function draw() {
	drawSky();

	drawGround();

	drawCharacter();

	push();
	translate(440, 350);
	rotate(frameCount / -100.0);
	fill(255, 255, 0);
	pop();
}