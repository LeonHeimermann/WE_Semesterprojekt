function deepCopy(struct) {
	return JSON.parse(JSON.stringify(struct));
}

var o = {
	a: 3, b:4
};
