// 1st part
function kilometerToMeter(n){
    var meter = n * 1000;
    return meter;
}
var converter = kilometerToMeter();
console.log("Convart to Meter = ", converter,"meter");


// 2nd part

function budgetCalculator(watch, phone, laptop){
    if(watch <=0 && phone <=0 && laptop <=0){
        return "please enter corract value";
    }
    else{
        var watch = watch*50;
        var phone = phone*100;
        var laptop = laptop*500;
        var sum = watch + phone + laptop;
        return sum;
    }
}
var total = budgetCalculator();
console.log(total);

// 3rd part

function hotelCost(days){
    var  rant= 0;
    if(days <= 10){
        rant = days * 100;
    } 
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remain = days - 10;
        var secondPart = remain * 80;
        rant = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remain2 = days - 20;
        var thirdPart = remain2 * 50;
        rant = firstPart + secondPart + thirdPart;
    } 
    return rant;
}
var totalRent = hotelCost();
console.log(totalRent);

// 4th part

function megaFriend(n){
    var length = 0;
    var longest;
    
    for (var i = 0; i < n.length; i++) {
      if (n[i].length > length) {
        var length = n[i].length;
        longest = n[i];
      }
    }
    return longest;
}
var result = megaFriend([]);
  console.log(result);
