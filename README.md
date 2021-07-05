# Ipl-Auction

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/67f92738bcce4a2c83e2b0885e3bf649)](https://www.codacy.com/gh/Coder-Srinivas/Ipl-Auction/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Coder-Srinivas/Ipl-Auction&amp;utm_campaign=Badge_Grade)
  
A Website designed to mimic the IPL Auction

## Steps to get the project running locally on your machine

### Server-Side Setup

#### Setting Up Environment Variables on the server-side

1. Create a .env file in the backend directory
2. Initialize DEV_MONGO_URL to mongodb://localhost:27017/
3. Initialize SECRET to a JWT secret key

#### Running the project on the server-side

Run the following command in the root
of the project to get the client-side
up and running:

```
npm run dev-server
```

### Client-Side Setup

#### Setting Up Environment Variables on the client-side

1. Create a .env file in the client directory
2. Initialize BACKEND_URL to <http://localhost:8000/>

#### Running the project on the client-side

Run the following command in the root
of the project to get the client-side
up and running:

```
npm run dev-client
```
