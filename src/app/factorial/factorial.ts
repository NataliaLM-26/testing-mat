function factorial(num: number): number {
    if (num < 0) {
        return 0;
    }
    else if(num === 0){
        return 1;
    }else if(num>15){
        return 0;
    }else{
        let result = 1;
        for (let i=1;i<=num;i++){
            result *= i;
        }
        return result;
    }
}
export {factorial};