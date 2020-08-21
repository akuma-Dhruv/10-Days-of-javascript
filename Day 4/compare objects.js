//https://www.hackerrank.com/challenges/js10-count-objects/problem

function getCount(objects) {
let i;
var count=0;
//console.log(objects[1].x);
for(i =0;i<objects.length;i++)
{   
    if (objects[i].x==objects[i].y)
    {
        count++;
    }
}
   return count; 
