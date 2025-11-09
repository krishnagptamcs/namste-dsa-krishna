//To chekc the given number palingdrom is not 
//121 ----> 121 
//4321 ---->1234 xxxxxxxx

function checkPalingdrom (num){
    let x= num;
    let reverse= 0;


    while(x>0){

        // x  module 10 gives the remainder 
        let rem = x%10;
        //add the reminder and reverse both 
        //rev =4, and remainder =3 , gives 43
        //so we multiple the reverse * 10 , which gives 40 and + 3 , gives 43
        reverse = reverse*10 + rem;
        //take the math.floor value , to avoid decimal number
        x= Math.floor(x/10);
    }

    //check and return the reve with actual number
    if(reverse === num){
        return true
    }else{
        return false
    }

}


console.log(checkPalingdrom(2553));