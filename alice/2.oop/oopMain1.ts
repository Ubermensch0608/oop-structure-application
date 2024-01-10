/**
 * OOP style
 * - 객체는 이미 상태를 가지고 있기 때문에 내부 메서드로 상태를 자체적으로 변경할 수 있음
 * - but, 새로운 행동이 필요할 때마다 객체 내부에서 메서드를 계속해서 추가해야함
 */
class Character {
  tall: number;
  position: string;

  constructor(tall: number, position: string) {
    this.tall = tall;
    this.position = position;
    console.log(`키: ${this.tall}cm`);
    console.log(`위치: ${this.position}\n`);
  }

  drinkLiquid() {
    console.log("액체를 마십니다.");
    this.tall = 24;
    console.log("키가", this.tall, "cm가 되었습니다.\n");
  }
  eatCake() {
    console.log("케이크를 먹습니다.");
    this.tall += 150;
    console.log("키가", this.tall, "cm가 되었습니다.\n");
  }
  useFan() {
    console.log("부채질을 합니다.");
    this.tall -= 20;
    console.log("키가", this.tall, "cm가 되었습니다.\n");
  }
  crossTheDoor() {
    while (this.position === "긴 통로") {
      this.useFan();
      if (this.tall <= 40) {
        this.position = "정원";
        console.log(this.position, "(으)로 이동합니다.");
      }
    }
  }
}

// 앨리스의 경우
const alice = new Character(130, "긴 통로");
alice.drinkLiquid();
alice.eatCake();
alice.crossTheDoor();

// 톰의 경우
const tom = new Character(180, "긴 통로");
tom.drinkLiquid();
tom.eatCake();
tom.crossTheDoor();
