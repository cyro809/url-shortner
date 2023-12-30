FROM node:16.16.0
WORKDIR /app

RUN npm install nodemon -g

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000

CMD ["npm", "start"]