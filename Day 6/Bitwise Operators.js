//https://www.hackerrank.com/challenges/js10-bitwise/problem


function getMaxLessThanK(n, k)
{
    let i;
    var result=0;
    for (i=0;i<n;i++)
    {
        let j;
        for(j=i+1;j<=n;j++)
        {
            let calc=i&j;
            if(calc>result && calc<k)
            {
                result=calc;
            }

        }
    }
    return result;

}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}
