import Money from "./Money";
import Movie from "./Movie";
import SequenceCondition from "./condition/SequenceCondition";
import AmountDiscountPolicy from "./policy/AmountDiscountPolicy";
import PercentPolicy from "./policy/PercentDiscountPolicy";

console.log("hihi");

const avatar = new Movie(
  "아바타",
  180,
  Money.wons(14_000),
  new AmountDiscountPolicy(Money.wons(1_000), [
    new SequenceCondition(1),
    new SequenceCondition(5),
  ])
);

console.log(avatar);
