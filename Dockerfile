# démarrer sur le server nginx
FROM nginx:alpine

# supprimer les fichier par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# copy mon projet dans le dossier cible
COPY . /usr/share/nginx/html

# nginx écoute sur le port 80
EXPOSE 80