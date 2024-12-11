interface INumbers {
    a: number;
    b: number;
}

let nums: INumbers = {
    a: 34,
    b: 12
};


if (nums.a > nums.b) {
    console.log('The number ' + nums.a + ' is greater than the number ' + nums.b);
} else if (nums.a < nums.b) {
    console.log('The number ' + nums.a + ' is less than the number ' + nums.b);
} else {
    console.log(nums.a + ' and ' + nums.b + ' equal numbers');
}