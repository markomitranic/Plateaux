FROM debian:latest as client_base

RUN apt-get update
RUN apt-get install make g++ -y
RUN apt-get install curl software-properties-common -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install nodejs -y
RUN npm install -g gulp

WORKDIR /application/

FROM client_base as client_dev
COPY entrypoint-dev.sh /application/entrypoint.sh
RUN ["chmod", "+x", "/application/entrypoint.sh"]

FROM client_base as client_prod
COPY entrypoint.sh /application/entrypoint.sh
RUN ["chmod", "+x", "/application/entrypoint.sh"]