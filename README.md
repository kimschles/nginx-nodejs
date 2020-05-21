# nginx and Node.js

## nodejs-server Deployment
* SSH to your Ubuntu server
* `apt-get update`
* `apt-get install docker.io`
* `docker pull kimschles/nodejs-server:latest`
* `docker run -p 8080:8080 kimschles/nodejs-server:latest` 
* See the json data by opening your browser and going to http://<IP_ADDRESS_OF_YOUR_SERVER>:8080/

## example-website Deployment 
* `apt-get update`
* `apt-get install docker.io`
* `docker pull kimschles/example-website:latest`
* `docker run -p 3000:3000 kimschles/example-website:latest` 


## Installing nginx 
* `apt install nginx-core`
* `vim /etc/nginx/sites-available/default`
* Delete the default config `:%d`
* Paste in server block 
* `service nginx reload`