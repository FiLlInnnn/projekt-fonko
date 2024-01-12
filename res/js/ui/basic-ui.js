export class Background {
  constructor() {
    this.img = new Image();
    this.path = "./res/img/background/game.png";
    this.img.src = this.path;
    this.position = {
      x: 0,
      y: 0,
    };
    this.size = {
      wide: 1280,
      height: 720,
    };
  }
  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.wide,
      this.size.height
    );
  }
}
