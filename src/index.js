import React from "react";

export const keyValueMap = React.PropTypes.shape({
	key: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired
});

// ARRAY OF

export const arrayOfKeyValueMaps = React.PropTypes.arrayOf(keyValueMap);

export const arrayOfStrings = React.PropTypes.arrayOf(React.PropTypes.string);

export const arrayOfElements = React.PropTypes.arrayOf(React.PropTypes.element);


// OR

export const stringOrArray = React.PropTypes.oneOfType([
	React.PropTypes.string,
	React.PropTypes.array
]);

export const stringOrKeyValueMap = React.PropTypes.oneOfType([
	React.PropTypes.string,
	keyValueMap
]);

export const stringOrArrayOfStrings = React.PropTypes.oneOfType([
	React.PropTypes.string,
	arrayOfStrings
]);

export const elementOrArrayOfElement = React.PropTypes.oneOfType([
	React.PropTypes.element,
	arrayOfElements
]);

export const arrayOfStringsOrArrayOfKeyValueMaps = React.PropTypes.oneOfType([
	arrayOfStrings,
	arrayOfKeyValueMaps
]);

export const keyValueMapOrArrayOfKeyValueMaps = React.PropTypes.oneOfType([
	keyValueMap,
	arrayOfKeyValueMaps
]);