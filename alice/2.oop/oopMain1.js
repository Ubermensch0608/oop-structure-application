/**
 * OOP style
 * - 객체는 이미 상태를 가지고 있기 때문에 내부 메서드로 상태를 자체적으로 변경할 수 있음
 * - but, 새로운 행동이 필요할 때마다 객체 내부에서 메서드를 계속해서 추가해야함
 */
var Character = /** @class */ (function () {
    function Character(tall, position) {
        this.tall = tall;
        this.position = position;
        console.log("\uD0A4: ".concat(this.tall, "cm"));
        console.log("\uC704\uCE58: ".concat(this.position, "\n"));
    }
    Character.prototype.drinkLiquid = function () {
        console.log("액체를 마십니다.");
        this.tall = 24;
        console.log("키가", this.tall, "cm가 되었습니다.\n");
    };
    Character.prototype.eatCake = function () {
        console.log("케이크를 먹습니다.");
        this.tall += 150;
        console.log("키가", this.tall, "cm가 되었습니다.\n");
    };
    Character.prototype.useFan = function () {
        console.log("부채질을 합니다.");
        this.tall -= 20;
        console.log("키가", this.tall, "cm가 되었습니다.\n");
    };
    Character.prototype.crossTheDoor = function () {
        while (this.position === "긴 통로") {
            this.useFan();
            if (this.tall <= 40) {
                this.position = "정원";
                console.log(this.position, "(으)로 이동합니다.");
            }
        }
    };
    return Character;
}());
// 앨리스의 경우
var alice = new Character(130, "긴 통로");
alice.drinkLiquid();
alice.eatCake();
alice.crossTheDoor();
// 톰의 경우
var tom = new Character(180, "긴 통로");
tom.drinkLiquid();
tom.eatCake();
tom.crossTheDoor();
