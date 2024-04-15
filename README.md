<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Proyecto-v1
Proyecto v1, en este proyecto vamos a realizar una tienda en línea de jerseys de futbol.
Para ello va a ser importante que estén familiarizados con el uso de la herramienta REACT, dentro del archivos JSON encontrarán un apartado donde vienen todas las librerias que se utilizaron y las cuales serán necesarias para el uso correcto de esta APP.
### 'npm install ...'
### 'yarn install ...'
Sería la manera más común de instalar estas librerías necesarias dentro del proyecto.
Además de contar con una base de datos de manera local o una base de datos ya desplegada de manera formal. Para que así puedan interactuar con la manera de los registros de los LogIn y los SignIn. Lo ideal para este proyecto es utilizar MySQL.
Dentro del archivo  de nombre "server.js" únicamente tendrán que modificar las credenciales de acceso que se necesitarán para ingresar a la base de datos donde estará la infomración.


# Despliegue de pagina 
Para el despliegue de la pagina decidimos hacerlo en Github pages, por que se eligio es opcion? Beno pues para poder explicar eso primero tenemos que analizar las opciones que teniamos para el despliegue, por ejemplo Heroku, este servicio es muy confiable a la hora de desplegar proyectos ya que admite distintos lenguajes de programacion, se dice que esta plataforma como servicio se considera como poliglota ya que admite Java, Node.js, Scala, Clojure, Python y PHP. Esto le daria una gran ventaja a la hora de ser el PaaS para desplegar nuestro proyecto. Sin embargo, tiene un pequeño inconveniente, esta plataforma solicita tener un metodo de pago para cuando se acaba el periodo de “prueba” del proyecto y como el tiempo que necesitamos para el desarrollo del proyecto es superior a la prueba descartamos este modo. Por su lado GitHub Pages cuenta con la misma habilidad poliglota que Heroku, con la gran ventaja de que esta se puede desplegar desde un repositorio de GitHub lugar donde tenemos todo el proyecto, esto facilita mucho el despliegue del proyecto ya que no tenemos que resubir nada a ningun otro sitio, ademas de que no requiere ningun metodo de pago por ello decidimos usar GitHub pages. 

El deploy está realizado por una serie de comandos que se ejecutan dentro de la parte de scrips de nuestro archivo package.json. Utilizando en nuestra terminal el comando "npm run deploy" y esperamos a que salga el mensaje de Published.

![image](https://github.com/aldoroman27/Proyecto-v1/assets/142856302/b2b395fb-0401-42e8-89ed-7eac79e6fd4b)

Dentro de ese mismo archivo, tendremos que especificar en la variable homepage nuestro usuario y el nombre nuestro repositorio para que se haga de manera correcta el deploy.

![image](https://github.com/aldoroman27/Proyecto-v1/assets/142856302/e946ded6-8096-4642-b9d7-119e219631bd)

