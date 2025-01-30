import _ from "lodash";

export default function getDiffs (data1, data2) {
	const firstDataArr = Object.entries(data1);
	const secondDataArr = Object.entries(data2);
	const sortedFullData = _.sortBy([...firstDataArr, ...secondDataArr], [function([key,]) { return key }]);
	const uniqFullData = _.uniqBy(sortedFullData, function([key, value]) { return key, value});
	const initialValue = `{\n`;

	const objectWithDiffs = uniqFullData.reduce((acc, currentValue) => {
		const [key, value] = currentValue;
		const firstDataParam = firstDataArr.find(([firstKey, firstValue]) => firstKey === key && firstValue === value);
		const secondDataParam = secondDataArr.find(([secondtKey, secondValue]) => secondtKey === key && secondValue === value);
		let result;

		if(firstDataParam && secondDataParam) {
			result = `${acc}   ${key}: ${value}\n`;
		} else {
			result = firstDataParam 
			? `${acc} - ${key}: ${value}\n`
			:`${acc} + ${key}: ${value}\n`;
		}
		return result;
		}, initialValue);
	return `${objectWithDiffs}}`
}
