import { Communicator } from ".";
import { Witness, 모자장수 } from "../witness";

export class Rabbit implements Communicator {
  private witness: Witness | null = null;

  call목격자(): Witness {
    if (!this.witness) {
      return new 모자장수();
    }
    return this.witness;
  }

  update목격자(witness: Witness): void {
    this.witness = witness;
    console.log("목격자를 변경하였습니다.");
  }
}

const a = "a";
