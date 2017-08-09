//查找斐波那契第n个数字
function test(n)
{	var result;
	if(n===1||n===2)
	{
		result = 1 ;
	}
	else if (n===2)
	{
		result = 1;
	}

	else	
		result = test(n-1)+test(n-2);	
	
	return result;
		
}
n = 9;
fi="第"+n+"个数是"+test(n);
console.log(fi);
