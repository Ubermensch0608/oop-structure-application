import { King, Queen } from "./oop/Judge";
import { Person } from "./oop/Person";
import { Rabbit } from "./oop/Rabbit";
import { Alice, 모자장수, 요리사 } from "./oop/Witness";

const hatSeller = new 모자장수("저는 보잘 것 없는 사람입니다.");
const alice = new Alice(null);

const rabbit = new Rabbit(hatSeller);
const king = new King(rabbit);

const firstJudgeResult = king.judge();
console.log(firstJudgeResult);

rabbit.updateWitness(alice);

const secondJudgeResult = king.judge();
console.log(secondJudgeResult);

// 재판관의 역할 여왕이 대체
const queen = new Queen(rabbit);
const cooker = new 요리사("저는 요리 밖에 몰라요.");

const thirdJudgeResult = queen.judge();
console.log(thirdJudgeResult);

rabbit.updateWitness(cooker);
const fourthJudgeResult = queen.judge();
console.log(fourthJudgeResult);

// const b = new Person("인간1", 18);

const person = new Person({
  name: "d",
  age: 18,
  score: 890,
});

if (person satisfies Person) {
  console.log("만족!");
}

if (person instanceof Person) {
  console.log("여기도 만족!");
}
