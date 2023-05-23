import Customer from "./Customer";
import Money from "./Money";
import Movie from "./Movie";
import ReservationAgency from "./ResevationAgency";
import Screening from "./Screening";
import SequenceCondition from "./condition/SequenceCondition";
import AmountDiscountPolicy from "./policy/AmountDiscountPolicy";
import NoneDiscountPolicy from "./policy/NoneDiscountPolicy";

// const avatar = new Movie(
//   "아바타",
//   180,
//   Money.wons(14_000),
//   new AmountDiscountPolicy(Money.wons(1_000), [
//     new SequenceCondition(1),
//     new SequenceCondition(5),
//   ])
// );

// const titanic = new Movie(
//   "타이타닉",
//   120,
//   Money.wons(15_000),
//   new NoneDiscountPolicy()
// );
