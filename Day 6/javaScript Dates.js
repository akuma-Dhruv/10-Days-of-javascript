//https://www.hackerrank.com/challenges/js10-date/problem

function getDayName(dateString) {
    let dayName;
    var d = new Date(dateString);
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    dayName= days[d.getDay()];
    
    return dayName;
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}
