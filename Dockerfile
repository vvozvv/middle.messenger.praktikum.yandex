FROM ubuntu:18.04
RUN apt update && apt install -y nodejs && apt install -y npm
CMD node -v
WORKDIR /var/www
COPY ./server.js server.js
EXPOSE 3000
CMD echo $PWD && ls -la && cat server.js

