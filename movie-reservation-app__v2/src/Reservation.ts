import Customer from "./Customer";
import Money from "./Money";
import Screening from "./Screening";

class Reservation {
  private customer: Customer;
  private screening: Screening;
  private fee: Money;
  private audienceCount: number;

  constructor(
    customer: Customer,
    screening: Screening,
    fee: Money,
    audienceCount: number
  ) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }

  public getCustomer() {
    return this.customer;
  }

  public setCustomer(customer: Customer) {
    this.customer = customer;
  }

  public getScreening() {
    return this.screening;
  }

  public setScreening(screening: Screening) {
    this.screening = screening;
  }

  public getFee() {
    return this.fee;
  }

  public setFee(fee: Money) {
    this.fee = fee;
  }

  public getAudienceCount() {
    return this.audienceCount;
  }

  public setAudienceCount(audienceCount: number) {
    this.audienceCount = audienceCount;
  }
}

export default Reservation;
