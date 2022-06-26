FROM node:12.10.0 as react-build

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci -qy

COPY . .

RUN npm run build

CMD ["npm", "build"]

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=react-build /usr/app/build .

COPY default /etc/nginx/sites-available/default

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]