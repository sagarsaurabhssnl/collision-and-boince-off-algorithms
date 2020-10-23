var fixedRect, movingRect, ball;

function setup() {
    createCanvas(800, 400);
    fixedRect = createSprite(200, 200, 40, 80);
    movingRect = createSprite(500, 200, 80, 40);
    ball = createSprite(200, 100, 20, 20);
    ball.velocityY = 2
    fixedRect.velocityY = -1;
}

function draw() {
    background("lightblue");


    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    text("Difference: " + (movingRect.y - fixedRect.y), 300, 50);
    text("Half of width sum: " + (movingRect.height / 2 + fixedRect.height / 2), 300, 100)


    if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
        fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
        movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2 &&
        fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2) {
        movingRect.shapeColor = "red";
        fixedRect.shapeColor = "red";
    } else {
        movingRect.shapeColor = "green";
        fixedRect.shapeColor = "green";
    }

    if (ball.x - fixedRect.x < ball.width / 2 + fixedRect.width / 2 &&
        fixedRect.x - ball.x < ball.width / 2 + fixedRect.width / 2) {
        ball.velocityX = ball.velocityX * (-1);
        fixedRect.velocityX = fixedRect.velocityX * (-1);
    }

    if (ball.y - fixedRect.y < ball.height / 2 + fixedRect.height / 2 &&
        fixedRect.y - ball.y < fixedRect.height / 2 + ball.height / 2) {
        ball.velocityY = ball.velocityY * (-1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
    }

    drawSprites();

}