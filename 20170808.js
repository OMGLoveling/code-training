function test(num){
var i;
var result = num + '=';
for(i=2;i<=Math.sqrt(num);i++)    
{ 
	if(num%i === 0 && num/i != 1)    
	{    result += +i;
	     num = num/i;  				
	     i=1;   
	} 
} 
result += num;
console.log(result);
}
test(90);
