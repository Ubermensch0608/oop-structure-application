import { useEffect, useState } from "react";
import "./App.css";
import { AliceStore } from "./store/Store";
import { observer } from "mobx-react-lite";

const store = new AliceStore();

const App = observer(() => {
  const [state, setState] = useState<AliceStore | null>(null);

  useEffect(() => {
    setState(store);
  }, []);

  console.log(state?.uiState);

  return (
    <>
      <div>
        <h2>역할: 재판관</h2>
        <label>
          <input
            name="재판관"
            type="radio"
            value="King"
            onChange={(e) => state?.update재판관(e.target.value as "King")}
            checked={state?.uiState.judgeRadioOption === "King"}
          />
          King
        </label>
        <label>
          <input
            name="재판관"
            type="radio"
            value="Queen"
            onChange={(e) => state?.update재판관(e.target.value as "Queen")}
            checked={state?.uiState.judgeRadioOption === "Queen"}
          />
          Queen
        </label>
        <h2>역할: 재판 진행자</h2>
        <label>
          <input
            name="재판_진행자"
            type="radio"
            value="Rabbit"
            onChange={(e) =>
              state?.update재판진행자(e.target.value as "Rabbit")
            }
            checked={state?.uiState.communicatorRadioOption === "Rabbit"}
          />
          Rabbit
        </label>
        <h2>역할: 목격자</h2>
        <label>
          <input
            name="목격자"
            type="radio"
            value="모자장수"
            onChange={(e) => state?.update목격자(e.target.value as "모자장수")}
            checked={state?.uiState.목격자RadioOption === "모자장수"}
          />
          모자장수
        </label>
        <label>
          <input
            name="목격자"
            type="radio"
            value="Alice"
            onChange={(e) => state?.update목격자(e.target.value as "Alice")}
            checked={state?.uiState.목격자RadioOption === "Alice"}
          />
          Alice
        </label>
        <label>
          <input
            name="목격자"
            type="radio"
            value="요리사"
            onChange={(e) => state?.update목격자(e.target.value as "요리사")}
            checked={state?.uiState.목격자RadioOption === "요리사"}
          />
          요리사
        </label>
      </div>

      <button type="button" onClick={() => state?.재판하다()}>
        재판
      </button>

      <div>재판 결과</div>
      <div>대상: {state?.재판결과?.목격자}</div>
      <div>결과: {state?.재판결과?.유무죄}</div>
      <div>증언들:</div>
      <ul>
        {state?.재판결과?.증언.map((증언, idx) => (
          <li key={idx}>{증언}</li>
        ))}
      </ul>
    </>
  );
});

export default App;
