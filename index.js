'use strict';

import http from 'http';
import fs from 'fs';
import path from 'path';


const server = http.createServer((req, res) =>{
    if(req.url === '/html'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.ReadStream(path.resolve('./index.html')).pipe(res); 
        console.log('Hello Armenia!!!');

    }else if(req.url === '/style.css'){ 
        res.writeHead(200, {'Content-type': 'text/css'});
        fs.ReadStream(path.resolve('./style.css')).pipe(res); 
        
    }else if(req.url === '/welcome'){
       res.writeHead(200, {'Content-type': 'text/plain'});
       res.end('Welcome to my webside');
    }else if(req.url === '/json'){
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify({
            name:'Jane'
        }));
    }else{
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end('Data not found');
    }
});

server.listen(3001);