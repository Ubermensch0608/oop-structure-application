# Object

## 설계 품질과 트레이드 오프

### 데이터 중심의 영화 예매 시스템의 문제점

#### 데이터 중심 설계

- 캡슐화 위반
- 구현을 인터페이스 내부로
- 높은 결합도
- 낮은 응집도

#### 책임 중심 설계

- 객체의 내부 구현을 안정적인 인터페이스 뒤로 캡슐화

> 캡슐화의 정도가 객체의 응집도와 결합도를 결정한다.

#### 캡슐화 위반

```typescript
class Movie {
  private fee: Money;

  public getFee(): Money {
    return fee;
  }

  public setFee(fee: Money): void {
    this.fee = fee;
  }
}
```

상단 Movie 클래스는 getFee와 setFee로 캡슐화를 잘 수행하는 것 처럼 보인다.
하지만 두 메서드를 통해 외부에서는 fee라는 상태의 존재를 명백히 알게 된다.

캡슐화 원칙 위반의 원인은 **객체가 책임이 아닌 내부 저장 데이터에 초점을 맞춘 것**에 있다.

캡슐화의 구현은 객체 내부의 데이터가 아닌, 책임과 행동 그리고 외부 객체와의 협력을 신경 썼을 때 해낼 수 있다.

#### 높은 결합도

```typescript
class ReservationAgency {}
```
