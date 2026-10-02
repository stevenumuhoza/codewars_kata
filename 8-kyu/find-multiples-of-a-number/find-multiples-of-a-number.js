function findMultiples(integer, limit) {
let result=[]
for(let i=integer;i<=limit;i++){
  if(i%integer==0)result.push(i)
}
return result
  }
​