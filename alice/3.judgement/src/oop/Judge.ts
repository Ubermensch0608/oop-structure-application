import { Communicator } from "./Rabbit";

export interface JudgeI {
  judge(): "무죄" | "유죄";
}

abstract class Judge implements JudgeI {
  constructor(protected communicator: Communicator) {}

  judge(): "무죄" | "유죄" {
    const witness = this.communicator.callWitness();
    console.log("목격자: " + witness.getName());

    const hasEvidence = witness.giveEvidence();
    return hasEvidence ? "무죄" : "유죄";
  }
}

export class King extends Judge {
  judge(): "무죄" | "유죄" {
    const witness = this.communicator.callWitness();
    console.log("재판관: " + King.name);
    console.log("목격자: " + witness.getName());

    const hasEvidence = witness.giveEvidence();
    return hasEvidence ? "무죄" : "유죄";
  }
}

export class Queen extends Judge {
  override judge(): "무죄" | "유죄" {
    const witness = this.communicator.callWitness();
    console.log("재판관: " + Queen.name);
    console.log("목격자: " + witness.getName());

    return "무죄";
  }
}
