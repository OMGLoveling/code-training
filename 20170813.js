function test(str)
{
	var res=[];
	var k,t;
	res=bubbleSort(str);
	if(res.length%2===0)
	{
		t=(res.length)/2;
		k=(res[t-1]+res[t])*0.5;	
	}
	else
	{
		t=parseInt(res.length/2);
		k=res[t];
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
str= [1,2,5,10,7,16,3];//1 2 3 5 7 10 16
st=bubbleSort(str);
s=[4,5,2,1,0,0];
s1=bubbleSort(s);
result="奇数"+str+"排序后是"+st+"中位数是："+test(str)+"\n"+"偶数"+s+"排序后是"+s1+"中位数是："+test(s);
console.log(result);
