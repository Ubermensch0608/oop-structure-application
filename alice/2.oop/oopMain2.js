/**
 * OOP style
 * - 객체는 이미 상태를 가지고 있기 때문에 내부 메서드로 상태를 자체적으로 변경할 수 있음
 */
var StrangeLiquid = /** @class */ (function () {
    function StrangeLiquid() {
    }
    StrangeLiquid.prototype.used = function (character) {
        console.log("액체를 마십니다.");
        character.tall = 24;
    };
    return StrangeLiquid;
}());
var StrangeCake = /** @class */ (function () {
    function StrangeCake() {
    }
    StrangeCake.prototype.used = function (character) {
        console.log("케이크를 먹습니다.");
        character.tall += 150;
    };
    return StrangeCake;
}());
var StrangeFan = /** @class */ (function () {
    function StrangeFan() {
    }
    StrangeFan.prototype.used = function (character) {
        console.log("부채질을 합니다.");
        character.tall -= 20;
    };
    return StrangeFan;
}());
var Character = /** @class */ (function () {
    function Character(tall, position) {
        this.tall = tall;
        this.position = position;
        console.log("\uD0A4: ".concat(this.tall, "cm"));
        console.log("\uC704\uCE58: ".concat(this.position, "\n"));
    }
    Character.prototype.use = function (strangeStuff) {
        strangeStuff.used(this);
        console.log("키가", this.tall, "cm가 되었습니다.\n");
    };
    Character.prototype.crossTheDoor = function (strangeStuff) {
        while (this.position === "긴 통로") {
            this.use(strangeStuff);
            if (this.tall <= 40) {
                this.position = "정원";
                console.log(this.position, "(으)로 이동합니다.");
            }
        }
    };
    return Character;
}());
var liquid = new StrangeLiquid();
var cake = new StrangeCake();
var fan = new StrangeFan();
// 앨리스의 경우
var alice = new Character(130, "긴 통로");
alice.use(liquid);
alice.use(cake);
alice.crossTheDoor(fan);
// 톰의 경우
var tom = new Character(180, "긴 통로");
tom.use(liquid);
tom.use(cake);
tom.crossTheDoor(fan);
