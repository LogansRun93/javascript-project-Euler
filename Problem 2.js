var sum = 2;
var firstNum = 1;
var secondNum = 2;
while (firstNum + secondNum <= 4000000)
{
	var newNum = firstNum + secondNum;
	firstNum = secondNum;
	secondNum = newNum;
	
	if (newNum % 2 === 0)
	{
		sum += newNum;
	}
}
console.log(sum);
	



