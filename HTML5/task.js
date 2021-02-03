function calculate()
	{
		var result;
		for(var i =0; i < 2000000000 ; i++)
			{
				result = i;
			}
		postMessage("Result: " + result);
	}

onmessage = function(e) {
	
	message = e.data;
	if(message == "callCalculate")
		{
			calculate();
		}
	else
		{
			postMessage("unknown command");
		}
}

