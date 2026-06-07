function solution(arr) {
    let n = 0;

    while (Math.pow(2, n) < arr.length) n++;
    
    const targetLength = Math.pow(2, n);
    
    for (let i = arr.length; i < targetLength; i++) arr.push(0);
    
    return arr;
}