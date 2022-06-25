# RunForCause

_Module : MOB1_

This project is a simple mobile application to learn how to create a mobile application with
[React Native](https://reactnative.dev/) and [Expo](https://expo.io/).

## Installation

```shell
git clone https://github.com/yannickcpnv/RunForCause.git
cd RunForCause
npm install
```

## Usage

### Prepare the project

Copy the file `config.example.ts` to `config.ts` and fill in values.

    cp config.example.ts config.ts

#### Additional preparations for using local back-end

If the back-end is not available on the internet, you can use a local back-end.

##### Get the back-end

This is a simple Laravel api project. So clone and install it.

```shell
git clone https://github.com/yannickcpnv/mockapi
cd mockapi
composer install
npm install
````

##### Create the database

Create a database

```shell
mysql -u root -p
CREATE DATABASE `mockapi`;
exit;
```

Copy the .env file and change the necessary values. Principally the database name, username and user password.

```shell
cp .env.example .env
```

Run the database migrations

```shell
php artisan migrate
```

##### Run the back-end

To use the mobile application with your locale server you need to get the IP address of your machine and use it.

```shell
# Get the IP address of your machine
ipconfig

# Run the server with the IP address
php artisan serve --host=<IP address>
```

##### Get you image name

You also need to have an image for the user. For this step, you first need to create an account to this server at
`http://<IP address>:8000/register`.

###### From the database directly

After the account created, go to the table `users` and get the column `picture`. The value is the name of the image
with his extension.

###### Using http client

Or you can use a http client, login to the server and get the user information that will
contain the image name. But for this you need to get first the token at the route `/api/rfc/mytoken`.

```http request
POST /api/rfc/mytoken
Content-Type: application/json

{
    "username": "<email>",
    "password": "<password>"
}
```

And then you can get the image name at the route `/api/rfc/me`. Don't forget to add the bearer token in the header.

```http request
GET /api/rfc/me
Authorization: Bearer <token>
```

The response :

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@gmail.com",
  "phone": "0770785627",
  "picture": "g8.png"
}
```

##### Store an image

Store an image in the server with the picture name at `storage/app/public/pics/<picture name>`.

Link the storage :

```shell
php artisan storage:link
```

You are now good to use you mobile app with the server. Don't forget to specify your server IP address in the config.ts
file.

### Commands

Start a local dev server for the app :

```shell
npm start
```

Opens your app in Expo Go on a connected Android device :

```shell
npm run android
```

Opens your app in Expo Go in a currently running iOS simulator on your computer :

```shell
npm run ios
```

Opens your app in a web browser :

```shell
npm run web
```

Create native iOS and Android project files :

_Learn more: https://docs.expo.dev/workflow/customizing/._

```shell
npm run eject
```

## Sources

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
