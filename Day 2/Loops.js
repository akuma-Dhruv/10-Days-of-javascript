//https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
    var count=0;
    var j=0;
    let index=0;
    //to print vovels
        while(j<s.length)
        {
            if(s.charAt(j)=='a' ||s.charAt(j)=='e' ||s.charAt(j)=='i' ||s.charAt(j)=='o' ||s.charAt(j)=='u')
            console.log(s.charAt(j));

            j++;
        }
        count++;
    
    //to print consonents
    j=0;
    
        while(j<s.length)
        {
            if(s.charAt(j)!='a' &&s.charAt(j)!='e' &&s.charAt(j)!='i' &&s.charAt(j)!='o' &&s.charAt(j)!='u')
            console.log(s.charAt(j));

            j++;
        }
        count++;
    
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
