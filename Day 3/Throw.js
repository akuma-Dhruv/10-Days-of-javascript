//https://www.hackerrank.com/challenges/js10-throw/problem

function isPositive(a) {
      try {
    if(a > 0)
    return "YES";
    else if(a==0 ) throw "Zero Error";
    if(a < 0) throw "Negative Error";
  }
  catch(err) {
   return err;
  }
    
}
