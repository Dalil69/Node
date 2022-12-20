/**
 * 
 * @param {*} numbers : an array of number
 */
function getMaxNumber(numbers) {
    let max = numbers[0]; // on declare une variable max on l'initialise avec numbers[0]

    // On parcourt le tableau numbers avec une boucle for
    for (let  i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max;
}