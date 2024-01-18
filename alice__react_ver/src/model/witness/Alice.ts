import { Witness } from ".";

export class Alice implements Witness {
  testimonyMap: Map<string, string>;

  constructor(...증언들: string[]) {
    this.testimonyMap = new Map();

    for (const 증언 of 증언들) {
      this.testimonyMap.set(증언, 증언);
    }
  }

  증언하다(): string[] {
    return Array.from(this.testimonyMap.values());
  }
}
