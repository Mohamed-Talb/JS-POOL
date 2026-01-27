function getURL(dataSet)
{
    return dataSet.match(/https?:\/\/\S+/g) || [];
}


function greedyQuery(dataSet)
{
    return dataSet.match(
        /https?:\/\/\S+\?[^\s&=]+=[^\s&=]+(?:&[^\s&=]+=[^\s&=]+){2,}/g
    ) || [];
}

function notSoGreedy(dataSet) 
{
    return dataSet.match(
        /https?:\/\/\S+\?[^\s&=]+=[^\s&=]+(?:&[^\s&=]+=[^\s&=]+){1,2}(?=\s|$)/g
    ) || [];
}
