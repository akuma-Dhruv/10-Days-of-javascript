https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

//function to rev a string
function getSecondLargest(nums) {
    // Complete the function
    var max1=0,max2=0;
    var i;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]>max1)
        {
            max2=max1;
            max1=nums[i];
        }
        if(max2<nums[i]&&nums[i]<max1)
        max2= nums[i];
    } 
return max2;
}
