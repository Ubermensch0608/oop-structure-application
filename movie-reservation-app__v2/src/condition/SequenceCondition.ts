import Screening from "../Screening";
import DiscountCondition from "./DiscountCondition";

class SequenceCondition implements DiscountCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  public isSatisfiedBy(screening: Screening) {
    return this.sequence === screening.getSequence();
  }
}

export default SequenceCondition;
