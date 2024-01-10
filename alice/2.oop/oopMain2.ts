/**
 * OOP style
 * - 객체는 이미 상태를 가지고 있기 때문에 내부 메서드로 상태를 자체적으로 변경할 수 있음
 */

interface StrangeStuff {
  used(character: Character): void;
}

class StrangeLiquid implements StrangeStuff {
  used(character: Character) {
    console.log("액체를 마십니다.");
    character.tall = 24;
  }
}

class StrangeCake implements StrangeStuff {
  used(character: Character) {
    console.log("케이크를 먹습니다.");
    character.tall += 150;
  }
}

class StrangeFan implements StrangeStuff {
  used(character: Character) {
    console.log("부채질을 합니다.");
    character.tall -= 20;
  }
}

class Character {
  tall: number;
  position: string;

  constructor(tall: number, position: string) {
    this.tall = tall;
    this.position = position;
    console.log(`키: ${this.tall}cm`);
    console.log(`위치: ${this.position}\n`);
  }

  use(strangeStuff: StrangeStuff) {
    strangeStuff.used(this);
    console.log("키가", this.tall, "cm가 되었습니다.\n");
  }

  crossTheDoor(strangeStuff: StrangeStuff) {
    while (this.position === "긴 통로") {
      this.use(strangeStuff);
      if (this.tall <= 40) {
        this.position = "정원";
        console.log(this.position, "(으)로 이동합니다.");
      }
    }
  }
}

const liquid = new StrangeLiquid();
const cake = new StrangeCake();
const fan = new StrangeFan();

// 앨리스의 경우
const alice = new Character(130, "긴 통로");
alice.use(liquid);
alice.use(cake);
alice.crossTheDoor(fan);

// 톰의 경우
const tom = new Character(180, "긴 통로");
tom.use(liquid);
tom.use(cake);
tom.crossTheDoor(fan);
