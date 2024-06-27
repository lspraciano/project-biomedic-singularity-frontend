export const mergeOutputDict = (currentOutput, newOutput) => {
    Object.keys(newOutput).forEach(key => {
        if (key in currentOutput) {
            newOutput[key].forEach(value => {
                currentOutput[key].add(value);
            });
        } else {
            currentOutput[key] = newOutput[key];
        }
    });
    return currentOutput;
}