String.prototype.toAlternatingCase = function () {
let word=this.split("")
let compare=this.toUpperCase().split("")
let result=[];
for(let i=0;i<compare.length;i++){
  if(word[i]==compare[i]){
    result.push(word[i].toLowerCase())
  }
else{result.push(word[i].toUpperCase())}
}
return result.join("")
}