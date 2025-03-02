const browserSync = require('browser-sync').create();
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/vistas/contacto.html'));
  });
app.get("/datos",(req,res)=>{
    res.send({
        nome:"Juan",
        apelido:"Pepi"
    })
})
app.get("/outrosdatos",(req,res)=>{
    res.send({
        nome:"Juanito",
        apelido:"Pepito"
    })
})
// Iniciar el servidor
const server = app.listen(port, () => {
  //console.log(`Servidor en http://localhost:${port}`);
  console.log(`Servidor ligado a Node en http://localhost:${port}`);
  console.log(`Servidor ligado a Browsersync en http://localhost:3001`);
});




// Configurar BrowserSync
browserSync.init({
    proxy: `http://localhost:${port}`,    // Usar o servidor Express
    files: ['./public/**/*.*'],           // Monitorear cambios nos arquivos estáticos
    //open: false,                          // Evítase abrir unha nova pestaña
    open: true                            // Está a true xa que as veces pode dar problemas a actualización de javascript no cliente
});
