import {Agent} from "./Agent";

export class Player {
  private readonly _name: string;
  private _team: string = "FA";
  private _contractPeriodMonth: number = 0;
  private _agent: Agent = new Agent();


  constructor(name: string) {
    this._name = name;
  }

  introduce = (): void => {
    console.log(`player is ${this._name}`);
    console.log(`team is ${this._team}`);
    console.log(`contract period month is ${this._contractPeriodMonth}`);
    this._agent.introduce();
  }

  join = (team: string, contractMonth: number): void => {
    this._team = team;
    this._contractPeriodMonth = contractMonth;
  }

  leave = (): void => {
    this._team = "FA";
  }

  extendContract = (periodMonth: number): void => {
    this._contractPeriodMonth = this._contractPeriodMonth + periodMonth;
  }

  managedBy = (agent: Agent): void => {
    this._agent = agent;
  }
}