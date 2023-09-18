FROM node:18 as build

WORKDIR /app

COPY . .

RUN npm i 

RUN npm run build

FROM nginx:alpine as prod

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

