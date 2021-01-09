#Este es mi primer imagen de Docker
#Imagen base
FROM ubuntu

#ejecutar comando
RUN apt-get update

#instala python en la imagen
RUN apt-get install python3 python3-dev -y
#permite hacer una conexion de base de datos con cont postgres
RUN apt-get install postgresql-client -y
#RUN mkdir /app

#Define el directorio que se va a exponer
#WORKDIR /app
WORKDIR /usr/local/

#Variable de entorno
ENV MSG='Saludos a todos desde Docker'

#ahora hacemos directiva para copiar archivos
ADD index.html /usr/local/
ADD styles.css /usr/local/


#ahora vamos a usar python
#Levantamos un servidor web en el puerto 5000
#CMD python3 -m http.server 5000 --directory /usr/local/

CMD python3 -m http.server 5500

#exponer el puerto 5500
EXPOSE 5500