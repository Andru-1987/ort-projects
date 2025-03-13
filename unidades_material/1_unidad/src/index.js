
/**
 * URL -> https://es.stackoverflow.com/questions/244344/regexp-sobre-nombres-compuestos
 * 
 */
const validateName = (name) => {
    const pattern = new RegExp(/(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/);

    return pattern.test(name);
}


const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};


export { validateName, isLeapYear }