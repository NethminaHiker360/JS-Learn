function leapYear(year){
    if((year%4==0 && year%100!=0)||year%400==0){
        return "leapYear";
    }else{
        return "Not LeapYear";
    }
}

console.log(leapYear(2000));