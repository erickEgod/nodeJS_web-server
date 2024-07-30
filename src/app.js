import {envs} from "./config/env.js";    //? traigo el objeto envs que exporté de env.js
import { startServer } from "./server/server.js";   //?traigo la función startServer de server.js

const main = () =>{ //función principal, ejecuta la función "startServer" y le envía los parámetros de las variables locales PORT y PATH
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


//*función autoconvocada:
// es una función que se llama a sí misma , dentro tiene otra función que llamará a otra función "main"
(async () => {
    await main();
})();




