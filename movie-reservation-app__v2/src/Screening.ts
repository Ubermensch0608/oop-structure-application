import Customer from "./Customer";
import Movie from "./amount/Movie";
import Reservation from "./Reservation";

/**
 * 책임
 * - 영화를 예매해야 한다. => 예매에 대한 정보 전문가
 * - Reservation 인스턴스를 생성한다. => Reservation의 창조자
 */
class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  public reserve(customer: Customer, audienceCount: number) {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount
    );
  }

  private calculateFee(audienceCount: number) {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }

  public getWhenScreened() {
    return this.whenScreened;
  }

  public getSequence() {
    return this.sequence;
  }

  public getMovieFee() {
    return this.movie.calculateMovieFee(this);
  }
}

export default Screening;
