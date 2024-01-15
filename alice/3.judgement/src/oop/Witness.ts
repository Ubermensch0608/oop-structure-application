export interface WitnessI {
  name: string;
  enter(): this;
  giveEvidence(): string | null;
  getName(): string;
}

abstract class Witness implements WitnessI {
  constructor(private evidence: string | null) {}
  name: string = "";
  getName(): string {
    return this.name;
  }
  enter(): this {
    return this;
  }
  giveEvidence(): string | null {
    return this.evidence;
  }
}

export class 모자장수 extends Witness {
  name: string;
  constructor(evidence: string | null) {
    super(evidence);
    this.name = "모자장수";
  }
}

export class Alice extends Witness {
  name: string;
  constructor(evidence: string | null) {
    super(evidence);
    this.name = "앨리스";
  }
}
