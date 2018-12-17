FROM nginx:stable
COPY ./dist/ /var/www/dist
COPY index.html /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx -g 'daemon off;'"]