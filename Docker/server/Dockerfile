FROM debian:latest

RUN apt-get update
RUN apt-get install curl software-properties-common -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install nodejs -y

WORKDIR /application/
COPY entrypoint.sh /application/
RUN ["chmod", "+x", "/application/entrypoint.sh"]