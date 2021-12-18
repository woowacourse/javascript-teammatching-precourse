export function chunk(arr, size) {
    var i, j, temparray = [], chunk = size;
    for (i = 0, j = arr.length; i < j; i += chunk) {
        temparray.push(arr.slice(i, i + chunk));
    }
    return temparray
}