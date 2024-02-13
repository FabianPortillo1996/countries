<h3 align="center">Countries API Integration</h3>

  <p align="center">
    Este proyecto contiene la integración y maquetación ( mobile y desktop ) del endpoint de paises.
Asi mismo es posible visualizar el detalle de cada uno.
    <br />
    <a href="https://countries-eta-beige.vercel.app">View Demo</a>
  </p>
</div>



<!-- ABOUT THE PROJECT -->

## Acerca del proyecto

El enfoque que le di a nivel de componentes y visual, fue de atomic design, ello se puede ver en la carpeta
/src/components, elemento mas grande de este enfoque son las pages, que las pueden ver en src/app.

El enfoque en integración API fue una arquitectura BFF (BACK FOR FRONT) para que todas las peticiones pasen por nuestro
servidor y las rutas finales, tokens, headers finales no quedén expuestos.

Utilice Tailwind para el manejo de estilos, ya que ayuda a la mantenibilidad del CSS y que la unica preocupación sea
construir el contenido, ademas que lo hace mas semantico.

Para el manejo de información dinamica y schemas, use la libreria de zod, a diferencia de otras librerias como yup, este
funciona en tiempo de ejecución y tiene la caracteristica de inferir tipos.

Las pruebas unitarias las trabaje a nivel de componente, como roadMap se debe agregar pruebas e2e y de integracion con
playwright, para darle cobertura a servicios y la ruta de /src/app.

Lodash lo utilizo para la obtención segura de datos, y adicionalmente para funcionales que ya trae en su core.

ClassNames para classes dinamicas dependiendo de comportamientos o entry-values.

<!-- GETTING STARTED -->

## Getting Started

Con las siguientes instrucciones puedes correr tu proyecto en local

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalación

2. Clona el repo
   ```sh
   git clone https://github.com/FabianPortillo1996/countries.git
   ```
3. Instala los NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```js
   const COUNTRY_ENTRY_POINT = 'ENTER YOUR API';
   const BFF_ENTRY_POINT = 'ENTER YOUR API';
   ```

<!-- ROADMAP -->

## Roadmap

- [x] Responsive Design
- [x] Lista de paises
- [x] Detalle de pais
- [x] Filtro y buscador
- [x] Dark Mode
- [ ] MetaData por pagina, robots.txt
- [ ] Testing
    - [x] Pruebas unitarias
    - [ ] Pruebas de integración
    - [ ] Pruebas e2e
