function retry(count, callback)
{
	return async function run(...args)
	{
		await callback(...args)
		.then(result => result)
		.catch()
		{
			console.log("fetch data faild");
			for (let i = 1; i <= count; i++)
			{
				await callback(...args).then(res => res);
				console.log("fetch data faild");
			}
			throw new Error("callback of Function faild");
		}
	}
}


async function func()
{
	function fetchData()
	{
		return new Promise(reject => 
		{
			setTimeout(()=> reject("faild"), 2000);
		})
	}
	const result = await fetchData();
	return result;
}





function timeout(delay, callback) 
{
	return function invoke(...args)
	{
		const timeoutPromise = new Promise((_, reject) => {setTimeout(() => reject(new Error("timeout")), delay);});
		const callbackPromise = callback(...args);
		return Promise.race([timeoutPromise, callbackPromise]).catch(err => err);
	};
}

console.log(timeout(1000, func)());