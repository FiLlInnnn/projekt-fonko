import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";
import { Twins } from "./ui/twins.js";

const background = new Background();
const twins = new Twins(100, 495, 50, 245, 610);

let mouse = {
  x: 0,
  y: 0,
};


document.addEventListener("click", (e) => {
const rect = canvas.getBoundingClientRect();
mouse.x = ((e.clientX - rect.left) / (rect.right - rect.left))* canvas.width;
mouse.y = ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
for (const enemy of enemies) {
  if (enemy.detectCollisions(mouse)) break;
}
});

const enemies = [];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameloop = () => {
  //clear
  clear();
  //update
  update();
  //render
  render();
  //fps
  fps();
  //gameloop znovu
  window.requestAnimationFrame(gameloop);
};

const clear = () => {
  background.draw(ctx);
  canvas.width = 1280;
  canvas.height = 720;
  background.draw(ctx);
};

const update = () => {
    enemies.map((a) => {
        a.update();
        twins.detectCollisions(a);
    })
};
const render = () => {
    twins.draw(ctx);
    enemies.map((a) => {
        a.draw(ctx);
    })
};
const fps = () => {};

const loadData = async () => {
  const entitiesFile = await fetch("./res/data/entities.json");
  const data = await entitiesFile.json();
  Enemy.entitiesData = data;
};

const genEnemies = () => {
  Enemy.entitiesData.map((a) => {
    enemies.push(
      new Enemy(
        a.name,
        a.hp,
        a.dmg,
        a.imagePath,
        a.width,
        a.hight,
        a.velocity,
        a.type
      )
    );
    //push / prida hodnotu do pole
  });
};

window.onload = async () => {
  await loadData();
  console.log(Enemy.entitiesData);
  await genEnemies();
  console.log(enemies);
  window.requestAnimationFrame(gameloop);
};




















































/*
const battlebus = new Image();
battlebus.src = "./res/img/battle_bus.png";

// [] - pole (pole)
// index poředové číslo

let bossPath = ["./res/img/battle_bus.png",
                "./res/img/BOSS.png",
                "./res/img/fnkid.png",
                "./res/img/kevin.png",
                "./res/img/mecha.png"];

canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1280, 720);

ctx.fillStyle = "orange";
ctx.fillRect(100, 200, 100, 200);

ctx.strokeStyle = "red";
ctx.strokeRect(400, 200, 100, 200);
ctx.strokeRect(100, 200, 100, 200);

ctx.fillStyle = "black"
ctx.beginPath()
ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 150);
ctx.lineTo(150, 200);
ctx.lineTo(200, 690);
ctx.fill();

ctx.strokeStyle = "#000";
ctx.beginPath();
ctx.arc(500, 100, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.strokeStyle = "#000";
ctx.beginPath();
ctx.arc(550, 100, 10, 0, 2 * Math.PI);
ctx.stroke();

/*ctx.fillStyle = "#000";
ctx.beginPath();
ctx.arc(550, 50, 20, 0,2 * Math.PI)
ctx.moveTo*/
/*
ctx.strokeStyle = "#000";
ctx.beginPath();
ctx.arc(525, 110, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.strokeStyle = "#000";
ctx.beginPath();
ctx.arc(525, 120, 10, 0, 1 * Math.PI);
ctx.stroke();

/*let busX = 200;
let busXVelocity = 1;

let busY = 200;
let busYVelocity = 1;*/

// {} - objekt (object)
/*
let bus = {
    x: 200,
    y: 200,
    xVelocity: 1,
    yVelocity: 1,
};


window.onload = () => {
    setInterval(() => {

        if(canvas.width <= bus.x + 200) {
            bus.xVelocity *= -1;
            battlebus.src = bossPath[1];
        }
        if(bus.x <= 0 ) {
            bus.xVelocity *= -1;
            battlebus.src = bossPath[2];
        }
        if(canvas.height <= bus.y + 200){
            bus.yVelocity *= -1;
            battlebus.src = bossPath[3];
        }
        if(bus.y <= 0) {
            bus.yVelocity *= -1;
            battlebus.src = bossPath[4];
            bossPath[3] = bossPath[0];
        }
        bus.x += bus.xVelocity;
        bus.y += bus.yVelocity;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1280, 720)
        ctx.drawImage(battlebus, bus.x, bus.y, 200, 200);
    }, 1);
}
*/
