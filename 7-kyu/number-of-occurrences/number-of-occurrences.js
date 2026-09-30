Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    let occur=this.filter(num => num===element);
return occur.length;
  }
});