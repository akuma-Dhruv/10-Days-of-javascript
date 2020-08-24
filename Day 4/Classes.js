//https://www.hackerrank.com/challenges/js10-class/problem

class Polygon{
    constructor(ar)
{
    this.sides=ar;
}
perimeter()
{
    let s=0
    var peri=0;
    while(s<this.sides.length)
    {
        peri+=this.sides[s];
        s++;
    }
    return peri;
}
}
