import { Judge, JudgementResult } from ".";

export class Queen implements Judge {
  재판하다(): JudgementResult {
    return "유죄";
  }
}
