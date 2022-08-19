/*
- Az `app01.js` fájlban dolgozz.
- A függvény neve `showMessage` legyen.
- A függvény vár egy nevet, ami String típusú.
- A függvény visszaad egy String-et, ami tartalmazza a nevet, a minta szerint:  
`Hello, my name is <name>!`. A <name> helyett szerepeljen a kapott String.
*/

const showMessage = (name = '') => {
    return `Hello, my name is ${name}!`;
};

export {
    showMessage,
}
