const initialState = {
  notes: [],
  archives: [],
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
    default:
      return state;
  }
};

export { DataReducer, initialState };
