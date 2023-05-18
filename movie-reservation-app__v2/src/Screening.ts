import Customer from "./Customer";
import Movie from "./Movie";
import Reservation from "./Reservation";

class Screening {
  private movie: Movie;
  private sequence: number; // 순번
  private whenScreened: Date; // 상영 시작 시간

  private calculateFee(audienceCount: number) {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  public reserve(customer: Customer, audienceCount: number) {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount
    );
  }

  //   상영 시작 시간 반환
  public getStartTime() {
    return this.whenScreened;
  }
  //   순번 일치 여부 검사
  public isSequence(sequence: number) {
    return this.sequence === sequence;
  }
  //   기본 요금 반환
  public getMovieFee() {
    return this.movie.getFee();
  }
}

export default Screening;
