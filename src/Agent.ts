export class Agent {
  private readonly _name: string;

  constructor(name: string = "FA") {
    this._name = name;
  }

  introduce = (): void => {
    console.log(`agent is ${this._name}`);
  }
}