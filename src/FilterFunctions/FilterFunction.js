const sortByTag = (state, data) => {
  if (state.searched === "") {
    return data;
  }
  return data.filter((el) =>
    el.tag.toLowerCase().includes(state.searched.toLowerCase())
  );
};

const sortByDate = (state, data) => {
  if (state.date === "oldestFirst") {
    return data.sort((a, b) => b.time - a.time);
  } else {
    return data.sort((a, b) => a.time - b.time);
  }
};

export { sortByTag, sortByDate };
