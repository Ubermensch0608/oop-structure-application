import { JudgementResult } from ".";
import { Communicator } from "../communicator";
import { Judge } from "./Judge";

export class King implements Judge {
  communicator: Communicator | null = null;

  재판하다(): JudgementResult {
    const 목격자 = this.communicator?.call목격자();
    console.log(목격자, "목격자");

    const 증언들 = 목격자?.증언하다();

    console.log(증언들);

    if (!증언들) {
      return "유죄";
    }

    for (const 증언 of 증언들) {
      console.log(증언);

      if (!증언) return "유죄";
    }
    return "무죄";
  }

  updateCommunicator(newCommunicator: Communicator) {
    this.communicator = newCommunicator;
  }
}
