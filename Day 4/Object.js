//https://www.hackerrank.com/challenges/js10-objects/problem

function Rectangle(a, b) {
    var rectangle = {
        length:a,
        width:b,
        perimeter : 2*(a+b),
        area : a*b
    };
    return rectangle;
