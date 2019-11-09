const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        //res.write('Hola fucking word');

        let salida = {
            nombre: 'cristian',
            edad: 43,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('Escuchando puerto');