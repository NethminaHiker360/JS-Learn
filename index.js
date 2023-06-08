function lifeInWeeks(age){
    var leftYears=90-age;
    var leftWeeks=leftYears*52;
    var leftMonths=leftYears*12;
    var leftDays=leftYears*365;
    console.log("You have "+leftYears+" Years Left, "+leftMonths+" Months Left, "+leftWeeks+" Weeks Left, "+leftDays+" Days Left")
}

lifeInWeeks(20);