function solution(num_list) {
    var answer = 0;
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] < 0) {
            return i;
        }
    }
    if(answer == 0) answer = -1;
    return answer;
}