let arr1= [3, 5, 1, 8, -3, 7, 8];
let arr2=[7, 12, 6, 9, 20, 56, 89];
let arr4= [0, 0, 0, 0, 0, 0];


// c1 tim kiem tuyen tinh
function finMinInArr(arr){
    let min =arr[0];
    for (i=1; i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    return min
}


console.log(finMinInArr(arr1))
console.log(finMinInArr(arr2))

