function indexOf (array, value, begin = 0)
{
    let index = begin, iteration = array.length;
	if (begin < 0) 
		index = iteration + begin;
	while (index < iteration)
	{
		if (array[index] == value)
			return index;
		index++;
	}
	return -1;
}

function lastIndexOf (array, value, begin)
{
	if (begin === undefined) {begin = array.length - 1};
    let index = begin;
	if (begin < 0) 
		index = array.length + begin;
	while (index >= 0)
	{
		if (array[index] === value)
			return index;
		index--;
	}
	return -1;
}

const array = [2, 9, 9];
// console.log(indexOf(array, 2),indexOf(array,7), indexOf(array, 9, 2), indexOf(array, 2, -1), indexOf(array, 2, -3));
const array2 = [2, 5, 9, 2];
console.log(lastIndexOf(array2, 2), lastIndexOf(array2, 7), lastIndexOf(array2, 2, 3), lastIndexOf(array2, 2, 2), lastIndexOf(array2, 2, -2), lastIndexOf(array2, 2, -1));
// console.log(lastIndexOf(array2, 2, 2))