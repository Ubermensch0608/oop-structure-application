import { Communicator } from "./Rabbit";

export interface Judge {
  judge(): "무죄" | "유죄";
}

export class King implements Judge {
  reason: string = "알리바이A";

  constructor(private communicator: Communicator) {}

  judge(): "무죄" | "유죄" {
    const witness = this.communicator.callWitness();
    console.log("목격자: " + witness.getName());

    const hasEvidence = witness.giveEvidence();
    return hasEvidence ? "무죄" : "유죄";
  }
}
