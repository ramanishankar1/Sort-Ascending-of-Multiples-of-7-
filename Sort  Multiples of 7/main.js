
const isAsc = (num) => {
    for (let i = 0; i <= num.toString().length; i++) {
        let lastDigit = num % 10;
        num = (num - lastDigit) / 10;
        let lastDigit1 = num % 10;
        if (lastDigit - lastDigit1 > 0) {
            return false

        }
    }
    return true;
}
// console.log(isAsc(454));

var arr=[]
for(i=1;i<200;i++){
    if(i%7==0){
       if(isAsc(i)){
        arr.push(i)
       }    

    }
}
  console.log(arr);  
 