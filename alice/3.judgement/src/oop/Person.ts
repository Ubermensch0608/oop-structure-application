export class Person {
  name: string;
  age: number;
  //   score: number;

  constructor(props: { name: string; age: number; score: number }) {
    console.log(this);

    this.name = props.name;
    this.age = props.age;
  }
}
