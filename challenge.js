/* 1. Prime numbers */
function prime(array){
    let arr=[];
    let count=0;
    for(let i=0; i<array.length; i++){
        for(let k=1;k<=array[i]; k++)
        {
        if(array[i]%k===0){
            count+=1;
            
        }   
    }
    if(count ==2){
            arr.push(array[i]);
            count=0;
            
        }
}
return arr;  
}
console.log(prime([10,17,19,23,25,29]));

/* 2. Palindrome*/
function Pali(noun){
    var noun1= '';
    for(let i=noun.length-1; i>=0;i--){
    noun1+= noun[i];
    }
    if (noun1==noun){
    return true;
    }
    else{
        return false;
    }
    
}

console.log(Pali("MADAM"));
/* 3. Array reversing*/
function reversedArray(arr){
    var newArr=[];
    for(i=arr.length-1; i>=0;i--){
        newArr.push(arr[i]);
        
    }
    return newArr;
}
console.log(reversedArray([23,32,76,12]));

/* 4. people’s identities*/

function reversedArray(name){
           
    for(i=0;i<name.length;i++)   {
        for(k=0;k<name[i].lenth;k++){

        return name[i][k] + name[i];
    }   
      }
      return ne;
  }
  console.log(reversedArray(["Kalisa"," Claude",45],["Mukisa","Jimy",22],["Gatete"," Eric",7]));
/*6. Majority Element */

function majority(array){

    let count=0;
    let num= [];
    for(let k=0; k<array.length ;k++){
    for(let x=0; x<array.length ;x++){
    for(let i=0; i<array.length; i++){
        if(array[x]=== array[i]){     
            count+=1;
            

        }}
        num.push(count);
        count=0;
    }
   for(l=0;l<num.length;){
       if(num[l]>(num.length)/2){
           return "This has majority Element";
       }
       else{
           return "No majority element";
       }
   }
       
      

    }
    

}
console.log(majority([10,17,23,10,23,10,10,10]));


