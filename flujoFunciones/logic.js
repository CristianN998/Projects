/*function secondLargestNumber(numbers) {
    let first = numbers[0];
    let second = 0;
    for (let i; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        }
        if (numbers[i] > second && numbers[i] < first) {
            second = numbers[i];
        }

    }
    console.log(second, numbers, first);
    return second;
}
console.log(secondLargestNumber(nums));
*/
let nums = [8, 4, 6, 2, 10, 11, 9];

function secondNumber(numbers) {
    console.log(numbers);
    numbers.sort();
    console.log(numbers);
    numbers.reverse();
    console.log(numbers);
    return numbers[1];
}
console.log(secondNumber(nums));