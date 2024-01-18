import { action, makeObservable, observable } from "mobx";
import { Judge, King, Queen } from "../model/judge";
import { Communicator, Rabbit } from "../model/communicator";
import { Alice, Cooker, Witness, 모자장수 } from "../model/witness";

export class AliceStore {
  재판관: Judge = new King();
  재판진행자: Communicator;
  목격자: Witness;
  재판결과: {
    목격자: "모자장수" | "Alice" | "요리사";
    증언: string[];
    유무죄: "유죄" | "무죄";
  } | null = null;

  uiState: {
    judgeRadioOption: "King" | "Queen";
    communicatorRadioOption: "Rabbit";
    목격자RadioOption: "모자장수" | "Alice" | "요리사";
  } = {
    judgeRadioOption: "King",
    communicatorRadioOption: "Rabbit",
    목격자RadioOption: "모자장수",
  };

  constructor() {
    makeObservable(this, {
      재판관: observable,
      update재판관: action,

      재판진행자: observable,
      update재판진행자: action,

      목격자: observable,
      update목격자: action,

      재판결과: observable,
      재판하다: action,
      uiState: observable,
    });

    this.재판진행자 = new Rabbit();
    this.목격자 = new 모자장수(
      "모자장수의 증언입니다.",
      "모자장수",
      "저는 보잘 것 없는..."
    );
    this.재판진행자.update목격자(this.목격자);
  }

  update재판관(judgeRadioOption: "King" | "Queen"): void {
    if (judgeRadioOption === "King") {
      this.재판관 = new King();
      this.uiState.judgeRadioOption = "King";
    } else if (judgeRadioOption === "Queen") {
      this.재판관 = new Queen();
      this.uiState.judgeRadioOption = "Queen";
    }
  }

  update재판진행자(communicatorRadioOption: "Rabbit"): void {
    if (communicatorRadioOption === "Rabbit") {
      this.재판진행자 = new Rabbit();
      this.재판진행자.update목격자(this.목격자);
      this.uiState.communicatorRadioOption = "Rabbit";
    }
  }

  update목격자(목격자RadioOption: "모자장수" | "Alice" | "요리사"): void {
    if (목격자RadioOption === "모자장수") {
      this.목격자 = new 모자장수(
        "모자장수의 증언입니다.",
        "모자장수",
        "저는 보잘 것 없는..."
      );
      this.재판진행자.update목격자(this.목격자);
      this.uiState.목격자RadioOption = "모자장수";
    } else if (목격자RadioOption === "Alice") {
      this.목격자 = new Alice("Alice의 증언입니다.", "Alice");
      this.재판진행자.update목격자(this.목격자);
      this.uiState.목격자RadioOption = "Alice";
    } else if (목격자RadioOption === "요리사") {
      this.목격자 = new Cooker(null);
      this.재판진행자.update목격자(this.목격자);
      this.uiState.목격자RadioOption = "요리사";
    }
  }

  재판하다() {
    const judgementResult = this.재판관.재판하다();
    const 증언 = this.목격자.증언하다();

    this.재판결과 = {
      목격자: this.uiState.목격자RadioOption,
      증언,
      유무죄: judgementResult,
    };
  }
}
