import { King } from "./oop/Judge";
import { Rabbit } from "./oop/Rabbit";
import { Alice, 모자장수 } from "./oop/Witness";

const hatSeller = new 모자장수("저는 보잘 것 없는 사람입니다.");
const alice = new Alice(null);

const rabbit = new Rabbit(hatSeller);
const king = new King(rabbit);

const firstJudgeResult = king.judge();
console.log(firstJudgeResult);

rabbit.updateWitness(alice);

const firstJudgeResult2 = king.judge();
console.log(firstJudgeResult2);
