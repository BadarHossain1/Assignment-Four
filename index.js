function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return "Invalid Number";
    }
    const remainingMoney = (ticketSale*120) - (500+(8*50));
    return remainingMoney;
}



function checkName(name) {
    if(typeof name!== 'string'){
        return "invalid";
    }
    const nameLower = name.toLowerCase();
    const words = nameLower.trim().split('');
    const Lastletter = words[words.length-1];

    if(Lastletter == 'a' || Lastletter == 'y' || Lastletter == 'i' || Lastletter == 'e' || Lastletter == 'o' || Lastletter == 'u' || Lastletter == 'w'){
        return "Good Name";
     }
    else{
        return "Bad Name";
    }

}



function deleteInvalids(array) {

    if(!Array.isArray(array)){
        return "Invalid Array";
    }
    valid = [];
    const length = array.length;
    
    for(let i=0;i<=length;i++){
        if(typeof array[i]=== 'number' && !isNaN(array[i])){
            valid.push(array[i]);

        }
    }
    
    return valid;

  }




 function password(obj) {
    if(!(obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName'))){
        return "invalid";
    }
    const Length = String(obj.birthYear);
    if(Length.length<4){
        return "invalid";
    }
    const length = obj.siteName.length;

    const letters = obj.siteName.split('');
    const firstLetter = letters[0];
    const first_upper_case = firstLetter.toUpperCase();
    const restLetters = letters.splice(1,length).join('');
    
    
    const password_structure = `${first_upper_case}${restLetters}#${obj.name}@${obj.birthYear}`
    return password_structure;
    
 }




 function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr)){
        return "invalid input";
    }
    let sum = 0;
        for(let i = 0;i<arr.length;i++){
            if(arr[i]>=3000){
                const taxCut = arr[i] * 0.2;
                arr[i] = arr[i] - taxCut ;
                
                
            }
            sum = sum + arr[i];

        }
        
        const Total_Savings = sum - livingCost;
        if(Total_Savings>=0){
            return Total_Savings;
        }
        else if(Total_Savings<0){
            return "earn more";
        }

        
    }


