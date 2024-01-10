/**
 * 여러 데이터의 상태를 관리해야할 때
 * - 함수는 캐릭터의 정보를 받아서 업데이트한다.
 * - 함수가 받는 캐릭터의 정보는 모두 이미 캐릭터가 가지고 있는 정보다.
 */

interface Character {
  tall: number;
  filed: string;
}

const alice = {
  tall: 130,
  filed: "긴 통로",
};

const tom = {
  tall: 180,
  filed: "긴 통로",
};

// 앨리스의 경우
console.log(`엘리스 키: ${alice.tall}cm`);
console.log(`엘리스 위치: ${alice.filed}\n`);
drinkLiquid(alice);
eatCake(alice);
crossTheDoor(alice);

// 톰의 경우
console.log(`톰 키: ${tom.tall}cm`);
console.log(`톰 위치: ${tom.filed}\n`);
drinkLiquid(tom);
eatCake(tom);
crossTheDoor(tom);

function drinkLiquid(character: Character) {
  console.log("액체를 마십니다.");
  character.tall = 24;
  console.log("키가", character.tall, "cm가 되었습니다.\n");
}

function eatCake(character: Character) {
  console.log("케이크를 먹습니다.");
  character.tall += 150;
  console.log("키가", character.tall, "cm가 되었습니다.\n");
}

function useFan(character: Character) {
  console.log("부채질을 합니다.");
  character.tall -= 20;
  console.log("키가", character.tall, "cm가 되었습니다.\n");
}

function crossTheDoor(character: Character) {
  while (character.filed === "긴 통로") {
    useFan(character);
    if (character.tall <= 40) {
      character.filed = "정원";
      console.log(character.filed, "(으)로 이동합니다.");
    }
  }
}
