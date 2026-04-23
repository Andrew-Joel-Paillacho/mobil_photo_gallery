
# PHOTO-GALLERY (APP ANDROID)

Se Realizo las actualizaciones del icono de la app y del splash scream

## Tecnologias aplicadas

Este proyecto fue realizado con Ionic, por lo que se usara Capacitor para la actualizacion de este proyecto y agregar un icono y splash scream.
Comenzare explicando la instalacion, en este caso primero comenzaremos instalando Capacitor-assets:

```bash
  npm install @capacitor/assets --save-dev
```

Procederemos con la creacion de la carpeta "resources" y luego procedemos a agregar las imagenes en este caso nuestras imagenes principales son las de icon.png y splash.png, en la carpeta se ve de la siguiente forma:

![App Screenshot](https://github.com/Andrew-Joel-Paillacho/mobil_photo_gallery/blob/main/imagenes/Captura%20de%20pantalla%202026-04-23%20032327.png)

Una vez ya realizado este paso, tener en cuenta que las imagenes deben ser cuadradas, y que lo mas importante de estas es el centro de las mismas.

Bueno ya terminado el paso anterior, se procedio con la generacion de los iconos. por lo que se ejecuta el siguiente comando: 

```bash
  npx capacitor-assets generate
```

En este caso para los pasos para el icono terminaron, pero para el splash scream se debe de proceder a hacer unos cambios, primero en capacitor.config.ts se necesita hacer agregar en CapacitorConfig lo siguiente:

```bash
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // 3 segundos
      launchAutoHide: true,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      showSpinner: false
    }
  }
```

Tambien se procede a hacer un cambio en lo que es el archivo styles.xml, esto:
```bash
    <style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
        <item name="android:background">@drawable/splash</item>
    </style>
```
Por esto:
```bash
    <style name="AppTheme.NoActionBarLaunch" parent="AppTheme.NoActionBar">
        <item name="android:background">@drawable/splash</item>
    </style>
```

Una vez concluido esto procedemos poner los siguientes comandos:

```bash
    npx cap sync
    npx cap open android
```

## Capturas del Funcionamiento de la APP

## Inicializar el programa
Bueno la app en este caso se exporto a una rama nueva llamada splash, el ejecutable o el apk de esta app se instalo y se probo con un emulador de android ya que por politicas desde android 12 no se mustran las splash scream de apps no oficiales.

### Icono de la app
Este icono fue generado con inteligencia artificial, y ajustado a las dimenciones:

![App Screenshot](https://github.com/Andrew-Joel-Paillacho/mobil_photo_gallery/blob/main/imagenes/Captura%20de%20pantalla%202026-04-23%20025246.png)

### Splash scream de la app
Asi mismo como el icono, esta tambien fue generada con ia, en este caso se puede ver que se muestra correctamente:

![App Screenshot](https://github.com/Andrew-Joel-Paillacho/mobil_photo_gallery/blob/main/imagenes/Captura%20de%20pantalla%202026-04-23%20025328.png)

Por ultimo se puede ver que abre correctamente la app:

![App Screenshot](https://github.com/Andrew-Joel-Paillacho/mobil_photo_gallery/blob/main/imagenes/Captura%20de%20pantalla%202026-04-23%20025610.png)
