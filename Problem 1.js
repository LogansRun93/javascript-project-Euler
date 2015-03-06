
var sum = 0;

for (var i = 0; i < 1000; i++)
{
	if ((i % 3 === 0) || (i % 5 === 0))
	{
		sum += i;
	}
}
console.log("Sum of all numbers below 1000 that are multiples of 3 or 5: " + sum);		



