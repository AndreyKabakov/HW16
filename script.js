function myReduce(array, callback, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], i, array);
    }

    return acc;
}

function minMaxNum(array) {
    return myReduce(array, (acc, cur) => {
        if (typeof cur === 'number' && !isNaN(cur)) {
            if (acc === undefined) return [cur, cur];
            const [min, max] = acc;
            return [Math.min(min, cur), Math.max(max, cur)];
        }
        return acc;
    }, undefined);
}

function minMaxStr(array) {
    return myReduce(array, (acc, cur) => {
        if (typeof cur === 'string') {
            if (acc === undefined) return [cur, cur];
            const [min, max] = acc;
            return [min < cur ? min : cur, max > cur ? max : cur];
        }
        return acc;
    }, undefined);
}

function minMaxValue(array) {
    const numbers = array.filter(item => typeof item === 'number' && !isNaN(item));
    const strings = array.filter(item => typeof item === 'string');

        const numberMinMax = minMaxNum(numbers);
        const stringMinMax = minMaxStr(strings);

    return [numberMinMax, stringMinMax];
}

const array = [0, -1, 2.25, 3.14, "summer", "Rabindranath", "generation", null];
console.log(minMaxValue(array));