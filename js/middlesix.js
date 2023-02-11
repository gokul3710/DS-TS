
// //linear search

// let a = [1,2,3,4,5,6,7,8,9,10]

// // for(i=0;i<a.length;i++){
// //     if(a[i] === target){
// //         return [i,]
// //     }
// // }

// //binary search

// function binarySearch(a,target){
//     let start = 0
//     let end = a.length-1
//     let mid 


//     if(a[mid]===target){
//         return mid
//     }
    

//     while(start<=end){

//         mid = Math.floor((start+end)/2)

//         if(a[mid]===target){
//             return mid
//         }

//         if(target>a[mid]){
//             start = mid + 1
//         }else{
//             end = mid -1
//         }

//     }

//     return false
// }

// // console.log(binarySearch(a,2))

// function binaryRecursion(arr,target,start=0,end=a.length-1){

//     mid = Math.floor((start+end)/2)
    
//     if(arr[mid]===target){
//         return mid
//     }
//     else if(target>arr[mid]){
//         return binaryRecursion(arr,target,mid+1,end)
//     }
//     else{
//         return binaryRecursion(arr,target,start,mid -1)
//     }

// }

// console.log(binarRecursion(a,8));




//fibonacci

// function fibonacci(index){
//     if(index<2){
//         return index
//     }
//     return fibonacci(index-1) + fibonacci(index-2)
// }
// console.log();


// str = "function"
// f 
// un
// cti
// onxx


// sum alternate elements


// while(head){
//     sum1 += head.data
//     head = head.next 
//     if(head){
//         sum2 += head.data
//         head = head.next
//     }
// }


// print middle six

// "use strict";
// let array = [0, 2, 3];
// function middleSix(array) {
//     let limit = 6;
//     let start = Math.floor((array.length - limit) / 2);
//     let end = start + 6;
//     let sum = 0;

//     for (let i = start; i < end; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// console.log(middleSix(array));


// [0,1,1]

// function fibonacci(n) {
//     let a = 0, b = 1, result = [a, b];
//     for (let i = 2; i <= n; i++) {
//       let c = a + b;
//       result.push(c);
//       a = b;
//       b = c;
//     }
//     return result;
//   }
//   console.log(fibonacci(10));


//   function fibReccursion(n,a=0,b=1,result= [a,b]){

//   }
// console.log(a);
// var a= 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let arr2  = []
// console.log(arr.length)


// class node {
//     constructor(data) {
//         this.data = data;
//         this.next = null
//     }
// }


// class linkedList {

//     addValues(data) {
//         let newNode = new node(data)

//         if (this.head == null) {
//             this.head = newNode
//             this.tail = newNode
//         }
//         else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//     }

//     display() {
//         console.log(this.head);
//     }

//     displayData() {
//         let head = this.head
//         while (head) {
//             console.log(head.data);
//             head = head.next
//         }
//     }

//     toArray(){
//         let head= this.head

//         while(head){
//             arr2.push(head.data)
//             head = head.next
//         }
//     }
// }

// let list = new linkedList()

// for (i = 0; i < arr.length; i++) {
//     list.addValues(arr[i])
// }
// console.log(arr2);

// list.displayData()
// list.toArray()
// console.log(arr2);
// console.log(a)




nums = [0,1,2,3,4]
index = [0,1,2,2,1]
result= []

for(i=0;i<nums.length;i++){
    if(result[index[i]]){
        for(j=result.length;j>=index[i];j--){
            result[j] = result[j-1]
        }
        result[index[i]] = nums[i]
    }
    result[index[i]] = nums[i]

}

console.log(result);



