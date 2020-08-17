//https://www.hackerrank.com/challenges/js10-data-types/problem


function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    
    const firstDecimal = 4.0;
    
    const firstString = 'HackerRank ';
    
     var d= parseInt(secondInteger)+firstInteger;
    console.log(d);
    d=parseFloat(secondDecimal)+firstDecimal;
    console.log(d);
    console.log(firstString+secondString);
}


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}
