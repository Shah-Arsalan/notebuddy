const sortByTag = (state, data) => {
  if (state.searched === "") {
    return data;
  }
  return data.filter((el) =>
    el.tag.toLowerCase().includes(state.searched.toLowerCase())
  );
};

const sortByDate = (state, data) => {
  if (state.data === "oldestFirst") {
    return data.sort((a, b) => b.timeCreated - a.timeCreated);
  } else {
    return data.sort((a, b) => a.timeCreated - b.timeCreated);
  }
};

export { sortByTag, sortByDate };
