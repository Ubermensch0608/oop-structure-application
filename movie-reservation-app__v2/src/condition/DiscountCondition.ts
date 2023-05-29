import { rootCertificates } from "tls";
import Screening from "../Screening";

// 순번, 기간
export type DiscountConditionType = "SEQUENCE" | "PERIOD";
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 일, 월, 화, 수, 목, 금, 토

/**
 * 책임
 * - 할인 여부를 판단해야 한다.
 * 취약성(변경) => 해결
 * - 새로운 할인 조건 추가
 * - 순번 조건을 판단하는 로직 변경
 * - 기간 조건을 판단하는 로직 변경
 */
interface DiscountCondition {
  isSatisfiedBy: (screening: Screening) => boolean;
}

export default DiscountCondition;
