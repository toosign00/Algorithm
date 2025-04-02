function solution(dot) {
    switch (true) {
        case dot[0] > 0 && dot[1] > 0:
        answer = 1;
        break;
            
        case dot[0] < 0 && dot[1] > 0:
        answer = 2;
        break;
            
        case dot[0] < 0 && dot[1] < 0:
        answer = 3;
        break;

        case dot[0] > 0 && dot[1] < 0:
        answer = 4;
        break;
            
        default:
        answer = 0;
    }
    return answer;
}