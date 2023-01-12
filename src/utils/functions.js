export const truncateText = (str, maxLength) => {
	if (!str || str.length === 0) return undefined;
	return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
}
