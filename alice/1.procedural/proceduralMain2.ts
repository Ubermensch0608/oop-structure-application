let tall = 130;
let filed = "긴 통로";

console.log(`키: ${tall}cm`);
console.log(`위치: ${filed}\n`);

// 병 속의 액체를 마신다.
tall = 24;

// 케이크를 먹는다.
eatCake();

// 부채질을 한다.
useFan();
useFan();
useFan();
useFan();
useFan();
useFan();
useFan();

if (tall <= 40) {
  filed = "정원";
  console.log(filed, "(으)로 이동합니다.");
}

function eatCake() {
  console.log("케이크를 먹습니다.");
  tall += 150;
  console.log("키가", tall, "cm가 되었습니다.\n");
}

function useFan() {
  console.log("부채질을 합니다.");
  tall -= 20;
  console.log("키가", tall, "cm가 되었습니다.\n");
}
