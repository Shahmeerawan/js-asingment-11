//****CHP 38-42 *******

//***TASK 01********

// function power(a,b) {
//     var powers =1;
//     for(var i = 1 ; i <= b ; i++){
//         powers *= a;
//     }
//     return powers;

// }
// var b = power(5 , 3)
// console.log(b)

//***TASK 02********

// function leep(year) {
//     var division = year/4
//     if(division === 0){
//         alert("Its a leap year")
//     }
//     else{
//         alert("Its not a leap year")
//     }

// }
// leep(prompt())

//***TASK 03********

// var first = +prompt("Enter the lrngth of first side");
// var second = +prompt("Enter the length of second side")
// var third = +prompt("Enter the length of third side")

// function forS(a,b,c) {
//     var f=(a+b+c)/2;
//     return f;

// }
// var s = forS(first,second,third)
// function length(a,b,c,s) {
//     var z= (s*(s-a)(s-b)(s-c))
//     var g = Math.sqrt(z)
//     return g ;
// }
// var area = length(first , second , third , s)
// document.write(area + " is the area")

//***TASK 04********

// var x = +prompt("Enter the obtained marks in first subject")
// var y = +prompt("Enter the obtained marks in second subject")
// var z = +prompt("Enter the obtained marks in third subject")

// function main() {
//     var j = avg(x,y,z);
//     var h = perc(x,y,z);
//     document.write( j + " is the average")
//     document.write( h + " is the percentage")

// }
// function avg(a,b,c) {
//     var f = (a+b+c) / 3 ;
//     return f;
// }
// function perc(a,b,c) {
//     var g = (a+b+c) / 300 * 100 ;
//     return g ;
// }
// main()

//***TASK 05********

// function index(a , b) {
//     // var a = "Pakistan";
//     // var b = "stan"
//     for(var i = 0 ; i < a.length ; i++){
//         if( b === a.slice(i ,b.length +i)){
//             document.write (a + "<br>")
//             document.write (b + "<br>")
//             document.write(i + " is  the index of given word or letter")

//         }
//     }
// }
// index(prompt("Enter a line of word"),prompt("Enter a word,letter whose index u want"))


//***TASK 06********
// var vowels = "aieou";
// var sentence = "The Quick BrOwn fox".toLocaleLowerCase();
// var result = [];

// for (i = 0; i < sentence.length; i++) {
//   for (j = 0; j < vowels.length; j++) {
//     if (sentence[i] === vowels[j]) {
//       break;
//     } else if (j === vowels.length - 1) {
//       result.push(sentence[i]);
//     }
//   }
// }
// console.log(result.join(""));
// 



//***TASK 07********


// function occr(a) {
//     var b = "aeiou";
//     var arr = ["ae","ai","ao","au","ea","ei","eo","eu","ia","ie","io","iu","oa","oe","oi","ou","ua","ue","ui","uo"]
//     for(i = 0;i<a.length ; i++){
//         for(j=0 ; j<arr.length;j++){
//             if(a.sloce(i,i+2) === ar[j]){
//                 console.log(a.slice(i,i+2))
//             }
//         }
//     }

// }
// occr(prompt("enter a line of diferent words"))
    


//***TASK 08********

// function converter(a) {
//     var meter = a * 1000;
//     var centimeter = a *100000;
//     var feet = a * 3280.84 ;
//     var inches = a * 39370.1;
//     console.log( a + " kilometers are equal to " + meter + " meters" + "<br>")
//     console.log( a + " kilometers are equal to " + centimeter + " centimeters" + "<br>")
//     console.log( a + " kilometers are equal to " + feet + " feet" + "<br>")
//     console.log( a + " kilometers are equal to " + inches + " inches" + "<br>")
//   }
//   converter(+prompt("Enter any length in kilometers"))


//***TASK 09********

// function calc(user) {
//     if(user > 40){
//         var z = (user - 40) * 12;
//         console.log(z)
//     }
//     else{
//         alert("Your work hours are less")
//     }
// }
// calc(+prompt("Enter your hours"))


//***TASK 10********
//function note() {
    //     var user = +prompt("Enter amount");
    //     var result = 0;
    //     var hun = 0;
    //     var fiv = 0;
    //     var ten = 0;
    //     var one = 0;
    
    //     for(i = 0 ; i<5 ; i++){
    //         if(user >=100){
    //             hun = Math.floor(user / 100);
    //             user -= hun * 100
    //         }
    //         else if(user >=50){
    //             fiv = Math.floor(user / 50);
    //             user -= fiv * 50
    //         }
    //         else if(user >=10){
    //             ten = Math.floor(user / 50);
    //             user -= ten * 10
    //         }
    //         else if(user >=1){
    //             one = Math.floor(user / 1);
    //             user -= one * 1
    //         }
    //     }
    //     console.log(hun + "hundred rupee" , fiv + " rupee" , ten + " rupee" , one + "rupee")
    
        
    // }
    // note()

