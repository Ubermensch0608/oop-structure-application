# Object

## 4. 설계 품질과 트레이드 오프

### 4-3. 데이터 중심의 영화 예매 시스템의 문제점

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
class ReservationAgency {
  public reserve(
    screening: Screening,
    customer: Customer,
    audienceCount: number
  ) {
    let fee: Money;
    if (discountable) {
      // ...
      fee = movie.getFee().minus(discountAmount).times(audienceCount);
    } else {
      fee = movie.getFee();
    }
    // ...
  }
}
```

위 ReservationAgency 클래스는 결합도가 높은 객체를 생산한다. 캡슐화의 실패로 외부에 드러내서는 안되는 정보를 노출시키기 때문이다.

만약 fee의 타입에 변경이 생긴다고 해보자.
movie의 getFee메서드를 통해 반환하는 fee 역시 변경이 필요하다.

즉, 하나의 변경으로 인해 다른 객체까지 변경이 필요하고 이것을 극대화하면 그 여파는 상상이 갈 것이다. 하나의 변화가 시스템 전체를 혼란스럽게 할 것이다.

이처럼 퍼블릭 메서드가 많아지는 순간 객체간 결합도는 높아지며, 외부의 변화에 대응하는 것은 아주 복잡해진다.

#### 낮은 응집도

> 단일 책임의 원칙
>
> 클래스는 **단 한 가지의 변경 이유**만 가져야 한다.
>
> \- 로버트 마틴 -

### 4-4. 자율적인 객체를 향해

#### 캡슐화를 지켜라

- 캡슐화는 설계의 제1원리다.
  - 데이터를 캡슐화 하고
  - 외부에 공개하지 마라
  - 객체는 스스로의 상태를 책임져야 한다.
  - 외부에서는 인터페이스에 정의된 메서드를 통해서만 접근
  - 진정한 캡슐화는 구현과 관련된 변하는 어떤 것이든 감추는 것이다.

```typescript
class Rectangle {
  private right: number;
  private bottom: number;

  constructor(right: number, bottom: number) {
    this.right = right;
    this.bottom = bottom;
  }

  public enlarge(multiple: number) {
    this.right *= multiple;
    this.bottom *= multiple;
  }

  public getArea() {
    return this.right * this.bottom;
  }
}
```

#### 스스로 자신의 데이터를 책임지는 객체

하나의 객체 안에 상태와 행동을 묶는 이유는 객체 스스로가 자신의 상태를 처리할 수 있게 하기 위해

객체 설계 시 _"어떤 데이터를 포함해야 하는가?"_ 질문

- 이 객체가 어떤 데이터를 포함해야 하는가?
- 이 객체가 데이터에 대해 수행해야하는 오퍼레이션은 무엇인가?

---

#### 정리

- 캡슐화는 객체지향 설계 1원칙이다.
- 캡슐화 실패의 결과는 낮은 응집도와 높은 결합도이다.
- 낮은 응집도와 높은 결합도는 변화에 취약하다.
- 객체 내부 인스턴스 요소가 외부에 노출되면 파급효과가 발생하기 쉬워진다.
- 변화가 생길 경우 의존성이 있는 다른 객체까지 변화가 필요하다.
- 이는 생산성을 낮추며, 시스템의 오류를 불러올 수 있다.
