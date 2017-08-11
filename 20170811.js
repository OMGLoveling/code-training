//1->2->3->3->4->5->3

function test(str,val)
{
	var reg = /->/g;
	var st = str.replace(reg,"").split("");
	var s= [];
	for(var i=0;i<st.length;i++)
	{
		s[i]=parseInt(st[i]);
	}
	var ss= removeByValue(s,val);
	var a = ss.join("->");
	return a;
}
 function removeByValue(arr, vl) 
 {
     	for(var j=0; j<arr.length; j++) 
	{
	    if(arr[j] == vl) 
	    {
		arr.splice(j, 2);
								 
	    }                          
	}
	return arr;
}
str = "1->2->3->3->4->5->3";
val =3;
var result = test(str,val);

console.log(result);
