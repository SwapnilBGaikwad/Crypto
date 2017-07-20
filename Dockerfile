FROM nginx
EXPOSE 80

# Copy already created project build in docker
COPY build /usr/share/nginx/html

MAINTAINER "swapnilbgaikwad99@gmail.com"