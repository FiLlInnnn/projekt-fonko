//OOP
//vlastntosti objketu - artibuty
const enemy = {
  hp: 100,
  name: "Enemy 1",
  dmg: 12,
};

//šablona - třída (class)
//třída (class) vždy velké první písmeno
export class Enemy {
  //constructor - metoda ktará se volá při bytváření objektu
  constructor(name, hp, dmg, type, x, y) {
    //this - ukazuje na vzniklou intstaci - kopie od třídy
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.img = new Image();
    this.setType(type);
    this.img.src = this.path;
    this.position = {
      x: x,
      y: y,
    };
    this.ratio = 0.5;
    this.size = {
      wide: 200 * this.ratio,
      height: 200 * this.ratio,
    };
    this.velocity = {
        x: 15,
        y: 0,
    }
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

  setType(type) {
    const paths = [
      "./res/img/enemies/battle_bus.png",
      "./res/img/enemies/BOSS.png",
      "./res/img/enemies/fnkid.png",
      "./res/img/enemies/kevin.png",
      "./res/img/enemies/mecha.png",
    ];
    this.path = paths[type];
  }

  update() {
    this.move();
  }

  move() {
    this.position.x += this.velocity.x;
    if (this.position.x >= 410) {
        this.velocity.x *= -1;
    }
    if (this.position.x <= 0) {
        this.velocity.x *= -1;
    }
  }
}

//const myEnemy = new Enemy("Enemy 1", 100, 12); // vytvořeni kopie od šablony - objekt(instance)
const foo = new Enemy("kojpip", 1, 1, 0);
