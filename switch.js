let gen="m"
switch(gender){
	case "m":
	    console.log("male") ;
	    break;
	case "m":
	   console.log("famale");
	   break;
	default:
	     console.log("trans-gender") ;
         break;
}
// Take age as the variable 
// age < 18 = Child
// greater than 18 but less than 40 = Adult 
// age is greater than 40 = Old age
let age=20;
switch(true){
	case age<18:
	    console.log("child") ;
	    break;
	case 18<=age<=40:
	   console.log("adult");
	   break;
    case 40>age:
        console.log("old age");
        break;
	default:
	    console.log("default") ;
         break;
}
// take variable name as day , its possible values are 0 1 2 3 4 5
// 0 = Monday 
// 5 : Saturday
let day=3
switch (day) {
    case 0:
      console.log("Monday");
      break;
    case 1:
      console.log("Tuesday");
      break;
    case 2:
       console.log("Wednesday");
      break;
    case 3:
      console.log("Thursday");
      break;
    case 4:
      console.log("Friday");
      break;
    case 5:
      console.log("Saturday");
      break;
    default:
      console.log("Sunday");
  }

  for (let i = 0; i < 5; i++) {
    console.log("i");
  }
 // Question : Print the table of 19 like 19 * 1 = 19
// 19 * 1 = 19
// 19 * 2 = 38

for (let i = 0; i < 11; i++) {
    console.log("19*"+ i + "=" + 19*i);
}
var g=2;
  switch(true){
    case g>=1:
        console.log("hello") ;
        break;
    case g<1:
       console.log("hai");
       break;
    default:
        console.log("default") ;
           break;
  }

const  i=2 ;
for(;i>10;) {
  console.log(i);
  i--;
}


let i=0;
while (i<10){
  console.log("the value is :" +i);
  i++;
}
console.log("outside the loop")

for(let i=0; i<5; i++){
  for(j=0;j<2;j++){
    
    console.log("the value of i="+i + "the val of j is"+j);
    
  }
}
