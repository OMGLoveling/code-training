//打印1000以内所有的水仙花数
function test()
{
	var res = [];
	var a=0,b=0,c=0;
	for(var i = 100;i < 1000;i++)
	{
		a=parseInt(i/100);
		b=parseInt((i-a*100)/10);
		c=parseInt(i%10);
		if(a*a*a+b*b*b+c*c*c===i)
		{
			result.push(i);
		}
	}
	return result;
}
var result = [];
result=test();
console.log(result);
