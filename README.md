# Práctica: Fizzbuz

Práctica 1 - Semana 4 - Backend NodeJS - LaunchX.

### ***¿Qué es Fizzbuz?***

Fizz Buzz es un juego de palabras grupales para que los niños les enseñen sobre la división.
Los jugadores se turnan para contar de forma incremental, reemplazando cualquier número divisible por tres con la palabra "fizz", y cualquier número divisible por cinco con la palabra "buzz".

![1651199366187.png](image/README/1651199366187.png)

### ***Objetivo del proyecto.***

Refactorizando el código proporcionado para la práctica, cubrir las necesidades de los requerimientos enlistados, los cuales consisten en:

| FN. # | Descripción                                                                                                                                                                                                                                                                                                                                                                                                               | Cumplimiento dentro del código.                                                                                                                                                                                                                     |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Refactorizar el código legado en los siguientes<br />determinantes:<br />1. Obtener la lista de explorers que solo están en node.<br />2. Obtener la cantidad de explorers en el curso de node.<br />3. Obtener la lista de los usuarios de github de los explorers.<br />4. Crear una validación para los explorers de Fizzbuzz, dejando <br />todo en una misma función en vez de validarlo de manera independiente. | 1.![1651198341851.png](image/README/1651198341851.png)<br />2.![1651198355460.png](image/README/1651198355460.png)<br /><br />3.<br />![1651198400587.png](image/README/1651198400587.png)<br />4.<br />![1651198311220.png](image/README/1651198311220.png) |
| 2.    | Creación de una API que consuma los servicios desarrollados.                                                                                                                                                                                                                                                                                                                                                              | En Proceso.                                                                                                                                                                                                                                          |

### ***Documentación API.***

Para conocer más en cuanto a las HTTPS request implementadas, puedes visitar este [enlace](https://documenter.getpostman.com/view/20762518/UyrGAtjG) de la documentación generada con Postman y también encontrarás algunos ejemplos de implementación.

Si no puedes ver el enlace, pega la siguiente url en tu navegador:

```
https://documenter.getpostman.com/view/20762518/UyrGAtjG
```

### ***Estructura del Proyecto.***

**fizzbuz** es la raíz del proyecto.

**app** es una carpeta en donde se encuentran almecenado el código funcional.

    - app.js : que continene todo el código a refactorizar en un servicio llamado
	ExplorerService y Fizzbuz Service

**test** es la carpeta en donde se almacenan las pruebas unitarias desarrolladas con *jest*.
**lib** es el folder en donde el código de app.js está refactorizado.

    -*services* : Carpeta en donde se almacenan los servicios requeridos para el aplicativo.

    -*utils*: Carpeta en donde se encuentran algunos utils, funciones, que se ocupan a lo largo

    del proyecto.

### Github Actions.

Adicionalmente, este proyecto implementa Github Actions, cuyo yml puede ser consultado en el directorio .github/workflows.

Dicho yml fue ajustado para la versión de node con la cual se desarrolló el proyecto (17.7.1) y la versión de jest compatible con esta misma.

### Sobre el bot implementado.

Un “bot”, término que proviene de acortar la palabra “robot”, es un programa que realiza tareas repetitivas, predefinidas y automatizadas. Los bots informáticos y los bots de Internet son herramientas digitales.

¿Qué funciones cumplen estos programas? La respuesta depende de la clase de bot.

Para este proyecto se implementó un bot conversacional. Eso quiere decir que está diseñado para brindar respuestas programadas a frases específicas. En este caso números y dos palabras clave: java y node.

Telegram cuenta con un **[Bot Father](https://telegram.me/BotFather)**, es decir, un bot que controla a todos los bots que se creen en dicha plataforma.

Con Bot Father se crea y configura inicalmente el bot deseado y es posible enlazarlo con alguna API a través de su paquete npm (telegram api bot).

En el archivo **lib/bot.js** se encuentra la configuración del mismo haciendo uso del token proporcionado por Both Father de Telegram para enlazar el proyecto actual con el servicio del bot.

Los servicios disponibles hasta el momento para el bot son:

ApplyValidationInNumber() que recibe un número cualquiera para determinar si se devuelve una cadena (string) que contenga la palabra FIZZ | BUZZ | FIZZBUZZ o, recibe una cadena en específico que contega algún valor de java | node y devuelve una lista de los explorers enlistados en dicha misión.

Se anexan algunos ejemplos validados del bot.

### **Dependencias.**

Las dependencias instaladas en el proyecto se enlistan a continuación:

* ***express**:* es un framework escrito en JavaScript y alojado dentro del entorno de ejecución NodeJS que permite crear aplicaciones web.
* ***linter*:** es una herramienta enfocada en el proceso de "linting" para Javascript, examinando el mismo dado a unas normas y criterios que pueden ser personalizables.
* ***jest***: es un marco de prueba para Javascript que permite el desarrollo de pruebas dentro de las aplicaciones.
