import { StateType } from "../Types/StateType";
import { ActionType, DataReducer } from "./Datareducer";

describe("test data reducer", () => {
  test("Should add new note to notes array", () => {
    // Arrange
    const initialTestState: StateType = {
      notes: [],
      archives: [],
      searched: "",
      date: "",
    };

    const action: ActionType = {
      type: "ENTERNOTE",
      payload: {
        note: [
          {
            backgroundColor: "#FFFFFF",
            content: "zxcvxv",
            tag: "",
            tags: [],
            time: 1666462991754,
            timeCreated: "23:53:11",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835f",
          },
        ],
      },
    };

    const finalState: StateType = {
      notes: [
        {
          backgroundColor: "#FFFFFF",
          content: "zxcvxv",
          tag: "",
          tags: [],
          time: 1666462991754,
          timeCreated: "23:53:11",
          title: "",
          _id: "bf2145e8-d460-4935-879f-e78e50c7835f",
        },
      ],
      archives: [],
      searched: "",
      date: "",
    };

    //Act
    const computedState = DataReducer(initialTestState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should add the note to archives arrray", () => {
    // Arrange
    const initialTestState: StateType = {
      notes: [],
      archives: [],
      searched: "",
      date: "",
    };

    const action: ActionType = {
      type: "ARCHIVE",
      payload: {
        archives: [
          {
            backgroundColor: "#FFFFFF",
            content: "zxcvxv",
            tag: "",
            tags: [],
            time: 1666462991754,
            timeCreated: "23:53:11",
            title: "",
            _id: "bf2145e8-d460-4935-879f-e78e50c7835f",
          },
        ],
      },
    };

    const finalState: StateType = {
      notes: [],
      archives: [
        {
          backgroundColor: "#FFFFFF",
          content: "zxcvxv",
          tag: "",
          tags: [],
          time: 1666462991754,
          timeCreated: "23:53:11",
          title: "",
          _id: "bf2145e8-d460-4935-879f-e78e50c7835f",
        },
      ],
      searched: "",
      date: "",
    };

    //Act
    const computedState = DataReducer(initialTestState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });

  test("Should set search filter value", () => {
    // Arrange
    const initialTestState: StateType = {
      notes: [],
      archives: [],
      searched: "",
      date: "",
    };

    const action: ActionType = {
      type: "SEARCHFILTER",
      payload: {
        value: "label",
      },
    };

    const finalState: StateType = {
      notes: [],
      archives: [],
      searched: "label",
      date: "",
    };

    //Act
    const computedState = DataReducer(initialTestState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });



  test("Should set search filter value to empty string", () => {
    // Arrange
    const initialTestState: StateType = {
      notes: [],
      archives: [],
      searched: "LABEL",
      date: "",
    };

    const action: ActionType = {
      type: "SEARCHRESET",
    };

    const finalState: StateType = {
      notes: [],
      archives: [],
      searched: "",
      date: "",
    };

    //Act
    const computedState = DataReducer(initialTestState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });



  test("Should set date for date filter", () => {
    // Arrange
    const initialTestState: StateType = {
      notes: [],
      archives: [],
      searched: "",
      date: "",
    };

    const action: ActionType = {
      type: "DATEFILTER",
      payload: "22-22-22"
    };

    const finalState: StateType = {
      notes: [],
      archives: [],
      searched: "",
      date: "22-22-22",
    };

    //Act
    const computedState = DataReducer(initialTestState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });



  test("Should set search filter value and date filter value to empty string", () => {
    // Arrange
    const initialTestState: StateType = {
      notes: [],
      archives: [],
      searched: "",
      date: "",
    };

    const action: ActionType = {
      type: "CLEAR"
    };

    const finalState: StateType = {
      notes: [],
      archives: [],
      searched: "",
      date: "",
    };

    //Act
    const computedState = DataReducer(initialTestState, action);

    //Assert
    expect(computedState).toEqual(finalState);
  });




});
