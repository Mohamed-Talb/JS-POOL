
function debounce(func, delay)
{
	let timeOut;
	return function (...args)
	{
		clearTimeout(timeOut);
		timeOut = setTimeout(()=> func(...args), delay);
	}

}

function opDebounce(fn, wait, options = {}) 
{
    let timeout, lastCallTime = 0;
    return function(...args) 
	{
        return new Promise(resolve =>
		{
            const now = Date.now();
            const callLeading = options.leading && now - lastCallTime > wait;
            if (timeout) clearTimeout(timeout);
            if (callLeading)
			{
                lastCallTime = now;
                resolve(fn(...args));
            }
			else
			{
                timeout = setTimeout(() =>
				{
                    lastCallTime = Date.now();
                    if (!options.leading) 
						resolve(fn(...args));
                }, wait);
            }
        });
    };
}