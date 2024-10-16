FROM node:alpine

# Установка необходимых пакетов
RUN apk update && apk add postgresql-client

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]