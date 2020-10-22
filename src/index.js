// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix)) {
        let arr = [];
        for (let i = 0; i <= matrix.length - 1; i++) {
            if (i % 2 !== 0) {
                arr.push(matrix[i].reverse());
            } else arr.push(matrix[i]);
        }
        let answ = []
        return answ.concat(...arr);
    } else return [];
}