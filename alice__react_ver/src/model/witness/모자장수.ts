import { Witness } from ".";

export class 모자장수 implements Witness {
  증언: string[] = [];

  constructor(...증언들: string[]) {
    for (const 증언 of 증언들) {
      this.증언.push(증언);
    }
  }

  증언하다(): string[] {
    return this.증언;
  }
}
