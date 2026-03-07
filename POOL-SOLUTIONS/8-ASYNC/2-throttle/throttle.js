function throttle(fn, wait)
{
    let lastCall = 0;
    return function (...args)
    {
        const now = Date.now();
        if (now - lastCall >= wait)
        {
            lastCall = now;
            return fn(...args);
        }
    };
}

function opThrottle(fn, wait, { leading = true, trailing = true } = {})
{
    let timer = null;
    let lastArgs = null;
    let lastCallTime = 0;

    return function (...args)
    {
        const now = Date.now();
        lastArgs = args;
        if (lastCallTime === 0 && leading === false)
        {
            lastCallTime = now;
        }
        const remaining = wait - (now - lastCallTime);
        if (remaining <= 0 || remaining > wait)
        {
            if (timer)
            {
                clearTimeout(timer);
                timer = null;
            }
            lastCallTime = now;
            fn(...lastArgs);
            lastArgs = null;
        }
        else if (trailing && !timer)
        {
            timer = setTimeout(() =>
            {
                lastCallTime = leading === false ? 0 : Date.now();
                timer = null;
                if (lastArgs)
                {
                    fn(...lastArgs);
                    lastArgs = null;
                }
            }, remaining);
        }
    };
}