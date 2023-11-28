function fuse(t1, t2) {
    for (var i = 0; i < t2.length; i++) {
      t1.push(t2[i]);
    }
    return t1;
  }
  
  var im1 = ["Hania", "Ania"];
  var im2 = ["Gregor", "Henio"];
  
  var imall = fuse(im1, im2);
  
  console.log(imall);
  