// Имеется массив произвольной длины, заполненный случайными значениями:
//     var list = [34, 1, 529, -78, 89.7, 1243];

var list = [34, 1, 529, -78, 89.7, 1243];
var maxList = list[0];

for (var i = 0; i < list.length; i++){
    if (maxList < list[i]){
        maxList = list[i];
    }
}
console.log(maxList);

