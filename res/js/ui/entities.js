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
  // static- dana vec patri tride (v tomto pripade trie Enemy)
  //vec pouzivame pomoci zapisu Trida.vec
  //Enemy.entitiesData
  static entitiesData;
  //constructor - metoda ktará se volá při bytváření objektu
  constructor(name, hp, dmg, imagePath, width, hight, velocity, type) {
    //this - ukazuje na vzniklou intstaci - kopie od třídy
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.imagePath = imagePath;
    this.img = new Image();
    this.img.src = this.imagePath;
    this.position = {
      x: 0,
      y: 0,
    };
    if (type == "ground") {
      this.position.y = 550;
    }
    this.ratio = 0.5;
    this.size = {
      wide: width * this.ratio,
      height: hight * this.ratio,
    };
    this.velocity = {
      x: velocity,
    };
    this.type = type;
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

  update() {
    this.move();
  }

  move() {
    this.position.x += this.velocity.x;
    }
  }


//const myEnemy = new Enemy("Enemy 1", 100, 12); // vytvořeni kopie od šablony - objekt(instance)
const foo = new Enemy("kojpip", 1, 1, 0);
