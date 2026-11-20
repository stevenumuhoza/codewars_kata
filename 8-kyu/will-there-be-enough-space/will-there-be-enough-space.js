function enough(cap, on, wait) {
  // your code here
  if((cap-on)>=wait){
    return 0;
  }
    else{
      return wait-(cap-on)
    }
  }
​