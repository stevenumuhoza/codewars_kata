function sortList(sortBy, list) {
  let sortedList=structuredClone(list);
    sortedList=sortedList.sort((i,j)=> j[sortBy]- i[sortBy]);
  
    return sortedList;
}