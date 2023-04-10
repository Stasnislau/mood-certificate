import { makeAutoObservable } from "mobx";

export interface stateInterface {
  name: string;
  surname: string;
  predictedMood: string;
  discoveredMood: string;
  dateOfSurvey: string;
  photo: string | undefined;
  timeOfSurvey: string;
}
export default class Store {
  state: stateInterface;

  constructor() {
    this.state = {
      name: "",
      surname: "",
      predictedMood: "",
      discoveredMood: "",
      dateOfSurvey: "",
      photo: undefined,
      timeOfSurvey: "",
    };
    makeAutoObservable(this);
  }
}
