# Group 6: Backend Fluvius

## Students

- Joren Vermeersch
- Angela Degryse
- Kerem Yilmaz
- Matheo Royez
- Robin Vermeir

## Setup

Before you can start this API, create a `.env` and `.env.test` file in the root of this folder with this content. Update the username, password and other fields with the credentials of your local database.

```
NODE_ENV="development"
DATABASE_USERNAME="root"
DATABASE_PASSWORD="root"
DATABASE_HOST="localhost"
DATABASE_NAME="sdp2"
DATABASE_PORT=3306
```

For production use, a JWT secret key must also be provided.

```
JWT_SECRET=""
```

**Note**: The database names for development- and testenvironment are hardcoded in the config. If you want to change any of these names, please consult the config.

**Note**: The API currently only supports MySQL databases.

## Login information

| Username        | Password        | Role            |
| --------------- | --------------- | --------------- |
| stakeholder     | stakeholder     | Stakeholder     |
| directie        | directie        | Directie        |
| management      | management      | Management      |
| mvo-coordinator | mvo-coordinator | MVO-coördinator |

**Note**: In the front-end part of this project, you can also login with the stakeholder account by clicking the "Log in with eID" button on the login screen.

### Login route

Use the following route to log in.

```
POST api/users/login
```

## Starting the API

Run the API using the command `yarn start`.

## Available routes

Below are all currently available routes for this API. For more information about authorization and authentication, consult the source code.

### User

```
GET api/users/:id
GET|PUT|DELETE api/users/template
POST api/users/login

```

### Role

```
GET api/roles/
GET|PUT|DELETE api/roles/:name/template
GET api/roles/:name/template/resources
PUT api/roles/:name/template/customizable
```



### Category

```
GET api/categories/
GET api/categories/:id/csrs
```

### SDG

```
GET api/sdgs/category/:id
```

### CSR goals

```
GET api/csrs/:id
```

### Datasource

```
GET api/datasources/:id
```

## Common errors

- Modules not found errors, execute the following command and run it again:

```
yarn install
```

- Migrations failed, try dropping the existing `sdp2` database and run again.

- Other issues: Consult Google.
