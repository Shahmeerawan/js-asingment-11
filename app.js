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