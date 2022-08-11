import { useData } from "../Contexts";
import { sortByTag, sortByDate } from "../FilterFunctions/FilterFunction";

const useFilter = () => {
  const { state } = useData();
  const { notes } = state;
  const tagData = sortByTag(state, notes);
  const dateData = sortByDate(state, tagData);
  return { filteredData: dateData };
};
export { useFilter };
