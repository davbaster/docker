FROM nginx:1.19

RUN apt-get update && apt-get install --no-install-recommends -y \   
 vim-tiny \  
 && apt-get clean && rm -rf /var/lib/apt/lists/*

#instalando ssh para acceder al contenedor. No esta compilando el ssh
RUN apt-get -y install openssh-server

#corriendo ssh server. 
CMD ["/usr/sbin/sshd", "-D"]

WORKDIR /data

#copia los datos de las paginas web al contenedor.
COPY ./data /data 

#copia los archivos de configuracion 
COPY ./nginx /etc/nginx

#RUN mkdir -p /data/www/itias.net
#RUN mkdir -p /data/www/villamarcapacita.me
#RUN mkdir -p /data/images

EXPOSE 22