FROM nginx:latest as nginx_base

RUN apt-get update
RUN apt-get install nano

RUN rm /etc/nginx/conf.d/*
COPY ssl /etc/nginx/ssl
COPY conf/gzip.conf /etc/nginx/conf.d/
COPY conf/nginx.conf /etc/nginx/conf.d/
COPY conf/tls.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html

FROM nginx_base AS nginx_prod
COPY conf/plateaux.conf /etc/nginx/conf.d/

FROM nginx_base AS nginx_dev
COPY conf-dev/plateaux.conf /etc/nginx/conf.d/
