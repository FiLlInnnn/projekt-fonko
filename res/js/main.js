import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";

const battleBus = new Enemy("BattleBus", 50, 1, 0, 50, 169);
const fnkid = new Enemy("fnkid", 50, 1, 2, 50, 269);
const background = new Background();



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

}

const clear = () => {
    background.draw(ctx)
    canvas.width = 1280;
    canvas.height = 720;
    background.draw(ctx);
}


const update = () => {
    battleBus.update();
    fnkid.update();
}
const render = () => {
    battleBus.draw(ctx);
    fnkid.draw(ctx);
}
const fps = () => {}

window.onload = () => {
    window.requestAnimationFrame(gameloop);

}






















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