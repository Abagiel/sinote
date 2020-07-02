export function capitalize(str) {
	if (typeof str !== 'string') retrun;

	return str.charAt(0).toUpperCase() + str.slice(1);
}