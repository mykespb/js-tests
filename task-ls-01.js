// Task on Javascript
// Solution: Mikhail Kolodin, 2019-03-29 2019-04-01 1.1

// Write a program that takes input of  integers N and M, followed by N more integers and then M more integers. For each of the last M numbers, the program outputs true, if that number was present in the array of N numbers, output False otherwise

// Constraints:
// 0 < N ≤ 20000

// 0 < M ≤ 15000

// Your output lines should not have any trailing or leading whitespaces

// Input
// 4 2 99 12 10 23 23 25

// Output
// True
// False

// Explanation: An input containing 8 integers is taken, the 1st integer is the value of N, 2nd number is the value of M, follwed by N integers + M integers. 23 outputs True, since 23 is present in N, 25 outputs false because it was not in N.


const val = '6 4 99 12 10 23 23 25 34 56 23 11'.split(' ')

function line(value) {

	var N = parseInt(value[0]);
	var M = parseInt(value[1]);
//	for (i=2; i<2+N+M; i++){ // 1
//		value[i] = parseInt (value[i])
//	}

	for (i=2+N; i<2+N+M; i++){
		v = value[i];
		present = 0;
		for (j=2; j<2+N; j++){
			if (v == value[j]){
				console.log("True");
				present = 1;
				break;
			}
		}
		if (present == 0){
			console.log("False");
		}
	}
	
}

line(val)

// 1. we might convert strings to numbers 2..2+N+M as strings, it changed nothing.

// 2. we might store many numbers in1 cell, up to 64, 
//    make  a function to store the bit, 
//    and a function to check the bit;
//    that would be slower but will save a lot of storage.

// 3. we should check correctness of all input data:
//    if all control numbers exists,
//    if they are withing [1..limit] range,
//    if subsequent numbers exist

// 4. for the data given these corrections change practically nothing
//    neither in speed nor in space.

