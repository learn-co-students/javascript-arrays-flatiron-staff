var chocolateBars = [
	'snickers',
	'hundred grand',
	'kitkat',
	'skittles'
];

var addElementToBeginningOfArray = (array, element) => {
	new_array = [element, ...array];
	return new_array
} 

var destructivelyAddElementToBeginningOfArray = (array, element) => {
	array.unshift(element);
	return array;
}

var accessElementInArray = (array, index) => {
	return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = (array) => {array.shift(); return array}

var removeElementFromEndOfArray = (array) => {
	new_array = array.slice(0, array.length-1);
	return new_array
}

var destructivelyRemoveElementFromEndOfArray = (array) => {array.pop(); return array}

var addElementToEndOfArray = (array, element) => {
	new_array = [...array, element];
	return new_array
}

var destructivelyAddElementToEndOfArray = (array, element) => {
	array.push(element); 
	return array
}

var removeElementFromBeginningOfArray = (array) => {
	new_array = array.slice(1);
	return new_array
}