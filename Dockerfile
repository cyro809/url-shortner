FROM node:16.16.0
WORKDIR /app

RUN npm install nodemon -g

COPY package.json package.json
RUN npm install -g
COPY . .
EXPOSE 3000

CMD ["npm", "start"]