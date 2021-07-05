# Ipl-Auction

  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e3ba9e6a3bb84fc7a3c6905c8e1af48c)](https://app.codacy.com/gh/Coder-Srinivas/Ipl-Auction?utm_source=github.com&utm_medium=referral&utm_content=Coder-Srinivas/Ipl-Auction&utm_campaign=Badge_Grade)
  
A Website designed to mimic the IPL Auction

## Steps to get the project running locally on your machine

### Server Side Setup

#### Setting Up Environment Variables

1. Create a .env file in the backend directory
2. Initialize DEV_MONGO_URL to mongodb://localhost:27017/
3. Initialize SECRET to a JWT secret key

#### Running the project in the server side

Run the following command in the root
of the project to get the client side
up and running:

```
npm run dev-server
```

### Client Side Setup

#### Setting Up Environment Variables

1. Create a .env file in the client directory
2. Initialize BACKEND_URL to <http://localhost:8000/>

#### Running the project in the client side

Run the following command in the root
of the project to get the client side
up and running:

```
npm run dev-client
```
