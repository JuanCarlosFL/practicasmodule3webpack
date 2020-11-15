Ejercicio:

    Partiendo de la configuración básica, añadir:

    Que muestre un hola mundo desarrollado con React.
    Que tenga una versión de build de producción.
    Que tenga variables de entorno para desarrollo producción.
    Que tengamos una forma de medir cuanto ocupa cada librería y nuestro código en el bundle.
    Montar lo mismo con parcel.


Para esta práctica he intentado que la parte básica sea lo más básica posible cumpliendo lo que pide el ejercicio,
A continuación están la lista de paquetes instalados:

Continuamos con la parte opcional
Instalamos React

```npm install react react-dom --save```

Instalamos preset de babel para react

```npm install @babel/preset-react --save-dev```

Como tenemos instalado TypeScript y queremos tener intellisense con React también instalamos los types para que nos avise de los errores

```npm install @types/react @types/react-dom --save-dev```

Instalamos webpack-merge para poder tener una configuración de producción y otra de desarrollo

```npm install webpack-merge --save-dev```

Instalamos el paquete dotenv para poder usar las variables de entorno y poder crear una para por ejemplo apuntar a un localhost
cuando estemos en desarrolo y a la api real cuando estemos en producción

```npm install dotenv-webpack --save-dev```

Ahora para poder medir el peso de los ficheros y librerías instalamos el siguiente paquete

```npm install webpack-bundle-analyzer --save-dev```
