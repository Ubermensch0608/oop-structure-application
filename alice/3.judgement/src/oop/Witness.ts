export interface WitnessI {
  enter(): this;
  giveEvidence(): string | null;
  getName(): string;
}

abstract class Witness implements WitnessI {
  constructor(private evidence: string | null) {}
  getName(): string {
    return Witness.name;
  }

  enter(): this {
    return this;
  }

  giveEvidence(): string | null {
    return this.evidence;
  }
}

export class Alice extends Witness {
  constructor(evidence: string | null) {
    super(evidence);
  }
  override getName(): string {
    return Alice.name;
  }
}

export class 모자장수 extends Witness {
  constructor(evidence: string | null) {
    super(evidence);
  }
  override getName(): string {
    return 모자장수.name;
  }
}

export class 요리사 extends Witness {
  constructor(evidence: string | null) {
    super(evidence);
  }
  override getName(): string {
    return 요리사.name;
  }
}
