import Bag from "./Bag";

// 관람객
class Audience {
  private bag: Bag;

  // 소지품을 보관하기 위해 가방을 소지할 수 있다
  public constructor(bag: Bag) {
    this.bag = bag;
  }

  public getBag = () => {
    return this.bag;
  };
}

export default Audience;
