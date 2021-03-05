
exports.min = function min (array) {
  
  if(typeof array != "undefined" && array != null && array.length > 0){
    let len = array.length; 
    var minim = 0;
    while (len--) {
      if (array[len] < minim) {
        minim = array[len];
      }
    }
    return minim;
  }
    return 0;
}

exports.max = function max (array) {
  if(typeof array != "undefined" && array != null && array.length > 0){
    let len = array.length;  
    var maxim = 0;
    while (len--) {
      if (array[len] > maxim) {
        maxim = array[len];
      }
    }
    return maxim;  
  }
    return 0;
 }

exports.avg = function avg (array) {
  if(typeof array != "undefined" && array != null && array.length > 0){
  let len = array.length;  
  var aveg = 0;
  while (len--) {
      aveg+= array[len];
  }
  aveg/=array.length;
  return aveg;
}
  return 0;
}

