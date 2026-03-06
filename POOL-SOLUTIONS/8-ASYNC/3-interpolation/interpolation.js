function interpolation(obj)
{
	const delayPerStep = obj.duration / obj.step;
	let currStep = 0; 
	function run()
	{
		if (currStep === obj.step)
			return ;
		let currTime = delayPerStep * (currStep + 1);
		let currPoint = obj.start + (obj.end - obj.start) * currStep / obj.step;
		obj.callback([currPoint, currTime]);
		currStep++;
		setTimeout(run, delayPerStep);
	};
	setTimeout(run, delayPerStep);
}
function func(arr)
{
	console.log(arr);
}

// const obj = {step: 5, start:0, end:1,callback: func, duration:10,}
// interpolation(obj);
// interpolation({step: 5, start: 0, end: 4,callback:func, duration: 50});
// interpolation({ step: 10, start: 2, end: 6, callback:func, duration: 4 });