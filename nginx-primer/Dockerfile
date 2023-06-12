FROM nginx:latest

COPY nginx-primer/conf.d/* /etc/nginx/conf.d/

COPY nginx-primer/tls/* /etc/nginx/tls/

RUN mkdir /www

RUN mkdir /www/html

COPY nginx-primer/html/ /www/html/
