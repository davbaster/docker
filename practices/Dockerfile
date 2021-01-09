FROM php:7.3-apache

#comandos instalan extensiones de php
RUN docker-php-ext-install -j$(nproc) pdo
RUN docker-php-ext-install -j$(nproc) pdo_mysql