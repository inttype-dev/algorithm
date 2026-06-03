function solution(num_list, n) {
    var answer = [];
    let j = 0;
    for(let i = 0; i < n; i++) {
        answer[j] = num_list[i];
        j++;
    }
    return answer;
}