function reverseBinary(dec){
    return parseInt(reverseString(dec2bin(dec)),2)
}


//no tech



function toDecimal(){
    let binary = ''
    if(typeof v == 'string'){
        binary = v.split()
    }else{
        binary = v.toString().split();
    }

    let decimal = 0;
    for (let index = 0; index < binary.length; index++) {
        decimal = (decimal * 2) + binary[i];
    }
    return decimal;
}

