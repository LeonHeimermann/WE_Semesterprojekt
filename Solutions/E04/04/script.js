function topsort(list) {
	var output = []
	len = list.length;
	for (var _ = 0; _ < len; _++) {
		indexI = -1;
		indexJ = -1;
		for (var i = 0; i < list.length; i++){
			indexI = i;
			indexJ = -1;
			for (var j = 0; j < list.length; j++) {
				if (i != j && list[i][0] == list[j][1]) {
					indexJ = j;
					break;
				}
			}
			if (indexJ == -1){
				break;
			}
		}
		output.push(list[indexI]);
		list.splice(indexI, 1);
	}
	return output;
}


var list = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]];
output = topsort(list);
console.log(output);

console.assert(output instanceof Array);
console.assert(output.length == 3);
