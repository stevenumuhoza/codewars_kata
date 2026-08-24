function duplicateCount(text){
  let lower=text.toLowerCase();
  let duplicates=lower.split("").filter(texts => lower.indexOf(texts)!==lower.lastIndexOf(texts))
        return new Set(duplicates).size;
}