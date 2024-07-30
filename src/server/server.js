import express from "express"; //importamos express y le dames el nombre express
import path from "path" //para leer el directorio local (ya viene instalado)

//bloque para usar el __dirname (dirname es la ubicación actual)
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const startServer = (options) => {   //función para importar las var de entor a este server
    const {port, public_path = "public"} = options;
    
    const app = express(); //todo ejecuto expres

    //!usamos un middleware con la palabra "use" (esto es propio de express)
    app.use(express.static(public_path))    //el contenido estático que ponemos disponible

    //! significa que cuando pongamos "localhost:3000/home" en nuestro servidor nos debe llevar a el index_cofla.html
    app.get("/home", (req, res) => {    //*require, responsa
        //guardamos la direción donde está el index.html (usamos "path" que importamos)
        const indexPath = path.join(`${__dirname}../../../${public_path}/index_cofla.html`);
        //también se puede mandar toda la dirección
        //const indexPath = path.join("C:/Users/TGOD/Desktop/PROGRAMACIÓN/FULL STACK/NODE JS/Curso Node/04_Práctica 2 web-server/public/index_cofla.html");

        //respondemos desde el servidor enviando "indexPath"
        res.sendFile(indexPath);
    });

    //!Ponemos disponible el servidor (se mantiene a la escucha)
    app.listen(port, ()=>{
        console.log(`Escuchando en el puerto ${port}`);
        console.log(__dirname);
    });

};













