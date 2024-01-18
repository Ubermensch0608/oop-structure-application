import { Witness } from "../witness";

/**
 * **역할**
 * - 진행자, 재판진행자
 *
 * **책임**
 * - 하는 것: 목격자에게 증인석으로 나올 것을 요청한다.
 * - 아는 것: 목격자(Witness)가 누군지 안다. @property witness
 *
 * **메시지**
 * - 증인석에 입장하라.
 *
 * **유용한 점**
 * - interface에 명시한 메서드를 정의하지 않으면 IDE에서 오류를 발생시킨다.
 */
export interface Communicator {
  call목격자(): Witness;
  update목격자(witness: Witness): void;
}
