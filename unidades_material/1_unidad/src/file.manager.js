/**
 * 
 * File managers -> lets use fs -> 
 * class -> abastract classes in JS no lo tiene como lo podria llegar a tener TS - JS o Python 
*/

// metodo tradicional sincronico

import fs from "fs";
import path from "path";

class StoreManager {
    constructor() {
        if (new.target === StoreManager) {
            throw new Error("Cannot instantiate an abstract class.");
        }
    }

    read() { throw new Error("Method must be implemented"); }
    create() { throw new Error("Method must be implemented"); }
    update() { throw new Error("Method must be implemented"); }
    delete() { throw new Error("Method must be implemented"); }
}

class LocalStoreManager extends StoreManager {
    constructor(filePath, encoding = 'utf8') {
        super();
        this.filePath = filePath;
        this.encoding = encoding
        this.#checkOrCreate()

    }

    #checkOrCreate() {
        let exits = !fs.existsSync(this.filePath)
        // let emptyInitArray = [] //me lanza un error -> por que sera?
        let emptyInitArray = JSON.stringify([]) // ahora no me da un error

        if (exits) {
            fs.writeFileSync(this.filePath, emptyInitArray, this.encoding)
            // console.log({ status: 200, msg: `✔️     ${this.filePath} has been created` });
        }
    }


    read() {
        try {
            const data = fs.readFileSync(this.filePath, this.encoding);

            return {
                status: 200,
                msg: "Sucess",
                payload: JSON.parse(data)
            }


        } catch (error) {

            return {
                status: 200,
                msg: `Error reading file: ${error.message}`
            }
        }
    }
    create() { return }
    update() { return }
    delete() { return }
}

// Usage
const URI_PATH = "./src/local-store/data.json"

console.log("list all files in a directory");

fs.readdir(
    "./src",{encoding:"utf8",recursive:true},
    (e,files) => {
        if (e) { throw new Error(`something is nor properly made ${e.message}`) }
        files.forEach(file => {
            console.log(file);
          })

    }
)



// const store = new LocalStoreManager(URI_PATH);

// console.log(

//     store.read()
// );

