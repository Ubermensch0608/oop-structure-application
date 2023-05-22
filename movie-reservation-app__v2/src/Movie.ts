import Money from "./Money";
import Screening from "./Screening";
import DiscountCondition from "./condition/DiscountCondition";
import DiscountPolicy from "./policy/DiscountPolicy";

export type MovieType =
  | "AMOUNT_DISCOUNT"
  | "PERCENT_DISCOUNT"
  | "NONE_DISCOUNT";

class Movie {
  private title!: string;
  private runningTime!: number; // 상영 시간
  private fee!: Money;
  private discountConditions!: DiscountCondition[];
  // private discountPolicy: DiscountPolicy;

  // constructor(
  //   title: string,
  //   runningTime: number,
  //   fee: Money,
  //   discountPolicy: DiscountPolicy
  // ) {
  //   this.title = title;
  //   this.runningTime = runningTime;
  //   this.fee = fee;
  //   this.discountPolicy = discountPolicy;
  // }

  // public getFee() {
  //   return this.fee;
  // }

  // public calculateMovieFee(screening: Screening) {
  //   return this.fee.minus(
  //     this.discountPolicy.calculateDiscountAmount(screening)
  //   );
  // }

  private movieType!: MovieType;
  private discountAmount!: Money;
  private discountPercent!: number;

  public getMovieType() {
    return this.movieType;
  }

  public setMovieType(movieType: MovieType) {
    this.movieType = movieType;
  }

  public getFee() {
    return this.fee;
  }

  public setFee(fee: Money) {
    this.fee = fee;
  }

  public getDiscountConditions() {
    return this.discountConditions;
  }

  public setDiscountConditions(discountConditions: DiscountCondition[]) {
    this.discountConditions = discountConditions;
  }

  public getDiscountAmount() {
    return this.discountAmount;
  }

  public setDiscountAmount(discountAmount: Money) {
    this.discountAmount = discountAmount;
  }

  public getDiscountPercent() {
    return this.discountPercent;
  }

  public setDiscountPercent(discountPercent: number) {
    this.discountPercent = discountPercent;
  }
}

export default Movie;
