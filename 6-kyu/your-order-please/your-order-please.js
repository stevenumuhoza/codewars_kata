function order(words){
  let wordsArray=words.split(" ");
  let organised=[];
  let k=1;
  for(let i=0;i<wordsArray.length;i++){
    organised.push(wordsArray.find(word=>word.includes(k)));
    k++;
  }
  return organised.join(" ")
}