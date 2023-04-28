## Pagina de peliculas 

### Tecnologias 

* Reactjs
* Sass 

> iniciamos por tener una vista principal de entrada donde analizamos los componentes y estilos para agregarle a la vista principal de la app. primero separamos y analizamos que componentes son esenciales, pensando en la reutilización de cada uno y su personalización. creamos el componente navbar que nos permite tener un botton de inicio y el buscador de nuestra pelicula de eleccion. tambien creamos nuestra vista principal de movies donde mostraremos todo lo que consultamos de la api. 

usamos una funcion auxiliar para hacer la peticion a la api y desestructurando los datos nada mas tomando los que queremos mostrar. 

esta funcion la llamamos en nuestra vista principal de movies donde tenemos las card de nuestras peliculas para recorrer los datos y poder mostrarlos al usuario. 

tambien creamos dos estados para tener control de los datos necesarios y el titulo de la pelicula que buscamos

creamos funciones que nos ayudan a controlar y a editar las acciones de estos estados, teniendo encuenta que cada vez que buscamos un nombre de una pelicula se filtrara solamente ese pelicula.

tambien se desarrollaron los estilos completamente personalizados de cada componente.