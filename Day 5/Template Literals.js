//https://www.hackerrank.com/challenges/js10-template-literals/problem

function sides(literals, ...expressions) {
    var s1,s2;
    let A=expressions[0];
    let p= expressions[1];
    
    s1=(p+Math.sqrt((p*p)-(16*A)))/4;
    s2=(p-Math.sqrt((p*p)-(16*A)))/4;
    var s=[s1,s2]; 
    s=s.sort();
    return s;
    
}

function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}
