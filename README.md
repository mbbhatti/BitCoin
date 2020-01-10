## About
BitCoin Price Graph Application.

## Requirments
- PHP >= 7.2
- Laravel >= 6.2

## Installation 
Laravel utilizes composer to manage its dependencies. So, before using Laravel, make sure you have composer installed on your machine. To download all required packages run these commands or you can download [Composer](https://getcomposer.org/doc/00-intro.md).
- composer install

## Setup
You need to create a .env file from. env.example, if .env not exists.
-  cp .env.example .env

- Add following line in the .env file
API_URL=https://api.coindesk.com/v1/bpi/historical/close.json

Then, run this command to create key in .env file if not exists.
- php artisan key:generate

## Test
Use this command for single file
- vendor/bin/phpunit --filter [FileName]

Use this command for all files tests
- vendor/bin/phpunit

## Run
- php artisan serve