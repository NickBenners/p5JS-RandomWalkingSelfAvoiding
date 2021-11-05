let x;
let y;
let spacing;
let grid;

function gen2DArr(c, r) {
  let a = new Array(c);
  for (let i = 0; i < c; i++) {
    a[i] = new Array(r);
  }
  return a;
}

let dir = [
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
];

function setup() {
  createCanvas(400, 400);
  background(0);
  spacing = 20;
  let rows = height/spacing;
  let cols = width/spacing;
  grid = gen2DArr(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = true;
    }
  }
  x = cols/2;
  y = rows/2;
}

function draw() {
  translate(0.5 * spacing, 0.5 * spacing);
  fill(255, 255, 255, 75);
  noStroke();
  circle(x * spacing, y * spacing, spacing * 0.6);
  stroke(255);
  strokeWeight(2);
  beginShape(LINES);
  vertex(x * spacing, y * spacing);
  step();
  vertex(x * spacing, y * spacing);
  endShape();
  frameRate(20);
}

function isDirValid(dx, dy) {
  return !(
    x + dx < 0 ||
    x + dx > width / spacing - 1 ||
    y + dy < 0 ||
    y + dy > height / spacing - 1
  ) && grid[x + dx][y + dy];
}

function step() {
  chosenDir = random(dir);
  if (isDirValid(chosenDir.dx, chosenDir.dy)) {
    grid[x][y] = false;
    x += chosenDir.dx;
    y += chosenDir.dy;
  } else {
    // step();
  }
}
