function findNum(arr){
var ar = bubbleSort(arr);
for(var j=0;j<ar.length;j++)
        {


                 if(ar[j]!=ar[j-1]&&ar[j]!=ar[j+1])
                {
                        k = ar[j];
                }

        }
        return k;
}


function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
 }
arr=[1,2,3,3,2,1,4,5,5];
result = "数组是"+arr+","+"数字是"+findNum(arr);
console.log(result);
