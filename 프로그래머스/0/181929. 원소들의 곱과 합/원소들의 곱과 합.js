function solution(num_list) {
    sum = 0;
    mul = 1;
    for (let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
        mul *= num_list[i];
    }
    if (mul < Math.pow(sum, 2)) {
        return 1;
        } else {
        return 0;
    }
}