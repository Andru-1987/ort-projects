import path from 'node:path';
import fs from 'fs'

import { exec } from 'node:child_process'
import { error, log } from 'node:console';
import { argv } from 'node:process'

let parsedParams = {}
let params = argv.slice(2)

params.forEach((param, index) => {
    const indicator = "--"

    if (param.startsWith(indicator)) {
        let key = param.replace(indicator, "")
        let value = params[index + 1] && !params[index + 1].startsWith("--") ? params[index + 1] : true;
        parsedParams[key] = value;
    }
})

const projectName = parsedParams.project ?? "project"

exec(`mkdir ${projectName} && cd ${projectName} && npm init es6 -y && mkdir -p src ;  `, (e, stdout, stderr) => {
    if (e) {
        console.error(error.message);
        error
    }

    if (stderr) { console.error(stderr); return }

    console.log(stdout);
})


const BASE_ROOT = `${projectName}/src`

const boilerPlateFiles = {
    "index.js": `import { Server } from "./server"
    import { AppRouter } from "./router"
    
    const options = {
        routes: App.routes,
        port: 3001
    }
    
    const server = new Server(options)
    server.start()
    `,

    "server.js":`import { json } from "express"
    import express from "express"
    
    export default class Server {
        constructor(routes, port) {
            this.routes = routes
            this.port = port
        }
    
        app = express()
    
    
        start() {
            this.app.use(json())
            this.app.use(express.urlencoded({ extended: true }))
            this.app.use(this.routes)
    
            this.app.listen(this.port, () => { console.log("🚀 Running at port: http://127.0.0.1:" + this.port) })
        }
    
    }
    
    `,

    "router.js": `import { Router } from "express"
    import { MappingRouter } from "./routes/mapping.router"

    export default class AppRouter {

        static routes() {

            const router = Router()

            router.use(Mapping.routes)

            return router
        }
    }


    `,
    "routes/mapping.router.js": ``,
    "controllers/mapping.controller.js": ``,
}

Object.keys(boilerPlateFiles).forEach(filePath => {
    const fullPath = path.join(BASE_ROOT, filePath);
    const dir = path.dirname(fullPath);
    console.log("Creating ... \n" + dir);

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(fullPath, boilerPlateFiles[filePath]);
    console.log(`Created: ${fullPath}`);
});

console.log("Project setup complete!");