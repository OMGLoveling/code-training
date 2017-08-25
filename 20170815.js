//题目：统计数组 arr 中值等于 item 的元素出现的次数
//例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
//要求：不要使用for循环
function test(arr,item)
{	let k=0;
	arr.forEach(i=>{
		if(i===item)
		k++;
	});
	return k;
}
arr=[1,3,7,1,4];
item=1;
result=test(arr,item);
console.log(result);
