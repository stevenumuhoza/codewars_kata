function countPositivesSumNegatives(input){
  if(input==null){
    return []
  }
  else if(input.length==0){
    return [];
  }
​
 else{
  let p=input.filter(num => num>0 );
  let n=input.filter(num => num<0).reduce((curr,acc) => acc+curr,0);
  
 return[p.length,n];
   }
}