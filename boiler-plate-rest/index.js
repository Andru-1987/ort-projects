import path from 'node:path';
import fs from 'fs'

import { exec } from 'node:child_process'
import { argv } from 'node:process'



function updatePackageJson() {
    const packageJsonPath = path.join(projectName, 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
        console.error("❌ package.json not found!");
        return;
    }

    try {
        const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

        // Modificar el contenido
        packageData.name = projectName;
        packageData.scripts = packageData.scripts || {};
        packageData.scripts.dev = "node --watch src/index.js";
        packageData.type = "module";

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2));
        console.log("✅ package.json updated successfully!");
    } catch (error) {
        console.error("❌ Error updating package.json:", error);
    }
}


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

exec(`mkdir ${projectName} && cd ${projectName} && npm init es6 -y && mkdir -p src`, (e, stdout, stderr) => {
    if (e) { console.error(e.message); return; }
    if (stderr) { console.error(stderr); return; }
    console.log(stdout);

    exec(`cd ${projectName} && npm install express`, (e, stdout, stderr) => {
        if (e) { console.error(e.message); return; }
        if (stderr) { console.error(stderr); return; }
        console.log(stdout);

        updatePackageJson();
    });
});


const BASE_ROOT = `${projectName}/src`
const boilerPlateFiles = {}


boilerPlateFiles["index.js"] = `import AppServer from "./server.js"
import AppRouter from "./router.js"

const options = {
    routes: AppRouter.routes,
    port: 3001
}

const server = new AppServer(options)
server.start()`


boilerPlateFiles['router.js'] = `import { Router } from "express"
import MappingRouter from "./routes/mapping.router.js"
import MappingController from "./controllers/mapping.controller.js"

export default class AppRouter {

    static get routes() {

        const router = Router()

        router.use(MappingRouter.routers(MappingController))

        return router
    }
}
`



boilerPlateFiles["server.js"] = `import { json } from "express"
import express from "express"

export default class AppServer {

    constructor({ routes, port }) {
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
`

boilerPlateFiles["routes/mapping.router.js"] = `import { Router } from 'express'

export default class MappingRouter {


    static routers(ControllerClass, middlewares = []) {
        const router = Router();

        if (middlewares.length) {
            router.use(middlewares);
        }

        router.get("/mapping", ControllerClass.getAll);
        router.get("/mapping/:id", ControllerClass.get);
        router.post("/mapping/create", ControllerClass.post);
        router.put("/mapping/update", ControllerClass.put);
        router.delete("/mapping/delete", ControllerClass.delete);

        return router;
    }
}`

boilerPlateFiles["controllers/mapping.controller.js"] = `export default class MappingController {
    static getAll(req, res) {
        res.json({ message: "Fetching all mappings" });
    }

    static get(req, res) {
        res.json({ message: "Fetching mapping with id " + req.params.id });
    }

    static post(req, res) {
        res.json({ message: "Creating a new mapping", data: req.body });
    }

    static put(req, res) {
        res.json({ message: "Updating mapping with id " + req.params.id, data: req.body });
    }

    static delete(req, res) {
        res.json({ message: "Deleting mapping with id " + req.params.id });
    }
}

`


Object.keys(boilerPlateFiles).forEach(filePath => {
    const fullPath = path.join(BASE_ROOT, filePath);
    const dir = path.dirname(fullPath);
    console.log("Creating ... \n" + dir);

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(fullPath, boilerPlateFiles[filePath]);
    console.log(`Created: ${fullPath}`);
});



console.log("Project setup complete!");