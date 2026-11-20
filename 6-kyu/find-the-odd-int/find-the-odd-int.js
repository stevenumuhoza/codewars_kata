function findOdd(A) {
 const test=[...new Set([...A])];
  console.log(test)
 for(let i=0;i<test.length;i++){
   let count=0;
   for(let k=0;k<A.length;k++){
     if(test[i]===A[k]){
       count++;
     }
   }
   if(count%2!=0){
     return test[i];
     break;
   }
 } 
  }
​