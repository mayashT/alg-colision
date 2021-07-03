var ball1;
var ball2;

function setup() {
    createCanvas(800, 400);
    ball1 = createSprite(400, 200, 50, 50);
    ball1.shapeColor = "green";
    ball1.debug = true;
    ball2 = createSprite(400, 200, 80, 30);
    ball2.shapeColor = "green";
    ball2.debug = true;
}

function draw() {
    background("black");
    drawSprites();

    ball2.velocityY = -5;
    ball2.velocityY = 5;


    if (ball2.x - ball1.x < ball1.width / 2 + ball2.width / 2 &&
        ball1.x - ball2.x < ball2.width / 2 + ball1.width / 2) {
        ball2.velocityX = ball2.velocityX * (-1);
        ball1.velocityX = ball1.velocityX * (-1);
    }
    if (ball2.y - ball1.y < ball1.height / 2 + ball2.height / 2 &&
        ball1.y - ball2.y < ball2.height / 2 + ball1.height / 2) {
        ball2.velocityY = ball2.velocityY * (-1);
        ball1.velocityY = ball1.velocityY * (-1);
    }

}