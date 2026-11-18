function sum (numbers) {
  if (numbers.length==0)
  return 0
  else{
    return numbers.reduce((acc,curr)=>acc+curr,0);
  }
}