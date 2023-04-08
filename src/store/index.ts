import { makeAutoObservable } from "mobx";

interface stateInterface {
  name: string;
  surname: string;
  predictedMood: string;
  discoveredMood: string;
  dateOfSurvey: string;
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
        };
        makeAutoObservable(this);
    }
    
    setState(newState: stateInterface) {
        this.state = { ...this.state, ...newState };
    }
}