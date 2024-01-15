import { WitnessI } from "./Witness";

export interface Communicator {
  callWitness(): WitnessI;
}

export class Rabbit implements Communicator {
  constructor(private witness: WitnessI) {}

  callWitness() {
    return this.witness.enter();
  }

  updateWitness(newWitness: WitnessI) {
    this.witness = newWitness;
  }
}
