const initialState = {
  notes: [],
  archives: [],
  searched: "",
  date: "",
};

const DataReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ENTERNOTE": {
      return {
        ...state,
        notes: [...payload.note],
      };
    }

    case "ARCHIVE": {
      return {
        ...state,
        archives: [...payload.archives],
      };
    }

    case "SEARCHFILTER": {
      return {
        ...state,
        searched: payload.value,
      };
    }

    case "SEARCHRESET": {
      return {
        ...state,
        searched: "",
      };
    }

    case "DATEFILTER": {
      console.log(payload);
      return {
        ...state,
        date: payload,
      };
    }

    case "CLEAR": {
      return {
        ...state,
        searched: "",
        date: "",
      };
    }
    default:
      return state;
  }
};

export { DataReducer, initialState };
