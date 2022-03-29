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


