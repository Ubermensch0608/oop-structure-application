import Money from "./Money";
import Screening from "./Screening";
import DiscountPolicy from "./policy/DiscountPolicy";

class Movie {
  private title: string;
  private runningTime: number; // 상영 시간
  private fee: Money;
  private discountPolicy: DiscountPolicy;

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountPolicy: DiscountPolicy
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  public getFee() {
    return this.fee;
  }

  public calculateMovieFee(screening: Screening) {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    );
  }
}

export default Movie;
