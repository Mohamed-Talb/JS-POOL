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

function timeout(delay, callback) 
{
	return async function (...args)
	{
    	try 
		{
			function delayTask(_, reject)
			{
				setTimeout(() => reject(new Error('timeout')), delay)
			};
			return await Promise.race([callback(...args),new Promise(delayTask)]);
    	} 
		catch (err) 
		{
      		return err;
    	}
  };
}
