//forma antigua require("dotenv").config(); //hace que las variable de entorno se actualicen según nuestro .env
//forma moderna:
import dotenv from "dotenv";
import envVar from "env-var";   //importo la librería env-var y le doy el nombre envVar para usarla

dotenv.config(); //configura las variables de entorno del .env

//traigo las variables de entorno de .env a este script

export const envs = {
    //*traigo "PORT" de .env y lo convierto a número y lo hago que sea requerido
    PORT: envVar.get("PORT").required().asPortNumber(),    //este get es de "env-var" 

    //*traigo "PUBLIC_PATH" de .env y lo convierto a stringy si es que no existiera le digo que el valor sea "public" (que es la carpeta donde está el proyecto)
    PUBLIC_PATH: envVar.get("PUBLIC_PATH").default("public").asString()
}













