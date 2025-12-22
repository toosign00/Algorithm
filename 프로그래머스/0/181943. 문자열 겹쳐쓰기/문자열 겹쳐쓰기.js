function solution(my_string, overwrite_string, s) {
    const front = my_string.slice(0, s);
    const middle = overwrite_string;
    const back = my_string.slice(s + overwrite_string.length);
    
    const answer = front + middle + back;
    return answer;
}