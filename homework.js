const summation = function(n){
    let sum=null;
    for(n;n>0;n--){
        sum=sum+n;
    }
    return sum;
}


const summationEven = function(n){
    let sum = null;
    for(n;n>0;n--){
        if(n%2===0){
            sum = sum + n;
        }
    }
    return sum;
}

const avg = function(arr){
    let sum = null;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}


const reverse = function(n){
    let rev='';
    for(i=n.length-1;i>=0;i--){
        rev+=n[i];
    }
    return rev;
}

const addDashes = function (arr){
    let str ='';
    for(i=0 ; i < arr.length ; i++){
        str += arr[i];
        if(i!==arr.length-1){
            str += '-';
        }
    }
    return str;
}


const countUpAndDown = function(n){
    let speed= 1;
    let str='';
    let num=null;
    for(i=1;i<=(n*2)-1;i++){
        num+=speed;
        str+=num
        if(i!==(n*2)-1){
            str += ' ';
        }
        if(i===n){
            speed=-1;
        }
        
    }
    return str ;
}


const wordsWithA = function(arr){
    let finalarr = [];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            if(arr[i][j]==="a"){
                finalarr.push(arr[i]);
            }
        }
    }
    return finalarr;
}


const wordsWithAny = function(ch,arr){
    let finalarr = [];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            if(arr[i][j]===ch){
                finalarr.push(arr[i]);
            }
        }
    }
    return finalarr;
}

const longestWord = function(str){
    let tmpArr=[];
    let arr=[];
    let biggestNum=0;
    let counter=0;
    for(i=0;i<str.length;i++){
        if(str[i]!==" "){
            tmpArr[counter]=str[i];
            counter++;
        }
        else{
            if(biggestNum<counter){
                arr=tmpArr;
                biggestNum=counter;
                tmpArr=[];
            }
            counter=0;
        }
    }
    return arr.join('');
}


const largestEvenNumber = function(arr){
    let biggestNum = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            if(arr[i]>biggestNum){
                biggestNum=arr[i];
            }
        }
    }
    return biggestNum;
}


