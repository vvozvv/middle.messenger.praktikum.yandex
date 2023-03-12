FROM node:16.17.0
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD node ./server.js
