function solution(strArr) {
    const counter = Array(31).fill(0);
    for (const str of strArr) {
        counter[str.length]++;
    }

    let max = 0;
    for (let i = 0; i < counter.length; i++) {
        if (counter[i] > max) {
            max = counter[i];
        }
    }
    return max;
}