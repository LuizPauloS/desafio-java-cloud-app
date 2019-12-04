### Multi Stage Build ###
### Estágio 1 - Obter o source e gerar o build ###
FROM node:12.7-alpine AS ng-builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN  npm install && npm install -g @angular/cli
COPY . /app
RUN $(npm bin)/ng build

### Estágio 2 - Subir o source para o servidor NGINX
FROM nginx
COPY default.conf /etc/nginx/conf.d/
COPY --from=ng-builder /app/dist/desafio-java-cloud-app /var/www/
RUN chown -R nginx:nginx /var/www/ && chmod -R 775 /var/www/
