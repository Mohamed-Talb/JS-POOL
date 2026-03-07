function interpolation(obj)
{
    const delayPerStep = obj.duration / obj.step;
    const increment = (obj.end - obj.start) / obj.step;
    let currStep = 0;

    function run()
    {
        let x = obj.start + (increment * currStep);
        let y = delayPerStep * (currStep + 1);
        obj.callback([x, y]);
        currStep++;
        if (currStep < obj.step)
        {
            setTimeout(run, delayPerStep);
        }
    }

    setTimeout(run, delayPerStep);
}
