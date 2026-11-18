# Art Explorer 🎨

Art Explorer es una aplicación web desarrollada con React que permite descubrir obras de arte utilizando la API pública del Metropolitan Museum of Art de Nueva York.

El proyecto fue creado como parte de mi formación en desarrollo web en TripleTen.

## 🌐 Aplicación publicada

**[Visitar Art Explorer](https://around-ivga.chickenkiller.com/art-explorer/)**

## ✨ Funcionalidades

- Consulta de obras de arte mediante una API externa.
- Búsqueda por nombre de artista o palabras clave.
- Visualización de imágenes, títulos y nombres de artistas.
- Carga progresiva de resultados mediante el botón «Mostrar más».
- Indicador de carga mientras se realizan las consultas.
- Mensajes para búsquedas sin resultados y errores de conexión.
- Navegación entre Inicio, Explorar y Acerca de.
- Diseño adaptable a dispositivos móviles.

## 🔎 ¿Cómo utilizar la aplicación?

1. En la página principal se muestran algunas obras de arte.
2. Escribe el nombre de un artista o una palabra relacionada con el arte en el buscador.
3. Presiona «Buscar» para consultar las obras disponibles.
4. Utiliza «Mostrar más» para visualizar otros resultados de la búsqueda.
5. Visita la sección «Explorar» para conocer una galería inicial de obras.

**¿No conoces muchos artistas?** Puedes comenzar buscando nombres como Van Gogh o Rembrandt. También puedes probar términos como `portrait` o `landscape`, ya que la API utiliza principalmente información en inglés.

La sección «Explorar» funciona actualmente como una galería introductoria. En futuras versiones se contempla incorporar recomendaciones de artistas, movimientos artísticos y categorías para facilitar el descubrimiento.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- React Router
- Vite
- Fetch API
- Git y GitHub
- Nginx y Google Cloud para el despliegue

## 🖼️ API utilizada

La información de las obras proviene de la API pública del Metropolitan Museum of Art:

https://metmuseum.github.io/

Las imágenes y los datos pertenecen a sus respectivas fuentes. La aplicación filtra los resultados para mostrar obras identificadas como de dominio público y con imágenes disponibles.

## 💻 Instalación local

Clona el repositorio:

```bash
git clone https://github.com/Ivgalo/art-explorer-frontend.git
```

Entra a la carpeta:

```bash
cd art-explorer-frontend
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre en el navegador la dirección local que indique Vite, utilizando la ruta `/art-explorer/`.

## 🚀 Despliegue

La aplicación se encuentra publicada en Google Cloud mediante Nginx. El servidor entrega los archivos compilados de React y actúa como intermediario para las solicitudes a la API del museo.

## 👨‍💻 Autor

**Iván Garduño**

Proyecto desarrollado durante mi formación como desarrollador web en TripleTen.

## 🔮 Mejoras futuras

- Explorar obras por movimientos artísticos.
- Incorporar recomendaciones de artistas.
- Añadir categorías de pinturas, esculturas y otras disciplinas.
- Facilitar el descubrimiento de obras sin necesidad de conocer previamente a sus autores.