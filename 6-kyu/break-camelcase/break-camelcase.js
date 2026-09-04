function solution(string) {
  let array=string.split("")
  let result=[];
  for(const i of array){
    if(i.toUpperCase()===i && i.toLowerCase()!==i){
      result.push(' ');
    }
    result.push(i)
  }
  return result.join("");
}