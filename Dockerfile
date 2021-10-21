FROM node:14.17.0-alpine as angular
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME [ "/var/cache/ngnix" ]
COPY --from=angular app/dist/bycoders-app /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf