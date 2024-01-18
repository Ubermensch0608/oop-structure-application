import { Witness } from ".";

export class Cooker implements Witness {
  즈응언: string | null;

  constructor(증언: string | null) {
    this.즈응언 = 증언;
  }

  증언하다(): string[] {
    return this.즈응언 ? [this.즈응언] : [];
  }
}
