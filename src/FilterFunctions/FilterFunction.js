const sortByTag = (state, data) => {
  console.log("checking state", state);
  if (state.searched === "") {
    return data;
  }
  return data.filter((el) =>
    el.tag.toLowerCase().includes(state.searched.toLowerCase())
  );
};

const sortByDate = (state, data) => {
  if (state.data === "olsestFirst") {
    return data.sort((a, b) => b.timeCreated - a.timeCreated);
  } else {
    return data.sort((a, b) => a.timeCreated - b.timeCreated);
  }
};

export { sortByTag, sortByDate };
