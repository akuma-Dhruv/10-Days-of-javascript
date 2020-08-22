//https://www.hackerrank.com/challenges/js10-inheritance/problem

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area=function()
{
    return this.h*this.w;
}


class Square extends Rectangle{
    
     constructor(s)
    {
        super(s,s);
        this.w=s;
        this.h=s;
    }
}
