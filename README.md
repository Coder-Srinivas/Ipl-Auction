# Ipl-Auction

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://ipl-mega-auction.herokuapp.com/)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/67f92738bcce4a2c83e2b0885e3bf649)](https://www.codacy.com/gh/Coder-Srinivas/Ipl-Auction/dashboard?utm_source=github.com&utm_medium=referral&utm_content=Coder-Srinivas/Ipl-Auction&utm_campaign=Badge_Grade)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

![Ipl-Auction](https://socialify.git.ci/Coder-Srinivas/Ipl-Auction/image?description=1&font=Source%20Code%20Pro&forks=1&language=1&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Dark)

## Hit ⭐ if you like this project

<h2> Overview </h2>
 <ul>
  <li>
    <a href ='#tech-stack'> Tech Stack 👨‍💻</a>
  </li>
  <li>
   <a href ='#inspiration'> My Inspiration 💡</a>
  </li>
  <li>
   <a href ='#features'> What it does ✨</a>
  </li>
  <li>
     <a href ='#build'> How I built it 🐺</a>
  </li>
  <li> 
   <a href='#screenshots'>Screenshots 🖼️</a>
   </li>
   <li> 
   <a href='#play'>How to play 🎭</a>
   </li>
    <li> 
   <a href='#structure'>Project Structure 💪</a>
   </li>
 </ul>
 
<h2 id='tech-stack'> Tech Stack 👨‍💻</h2>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

<h2 id='inspiration'> My Inspiration 💡</h2>

![YoureMyInspirationBrynnElliottGIF](https://user-images.githubusercontent.com/59244289/136423443-7dd54f9f-e9b7-45a4-a700-037558abd1a1.gif)

It began back during my childhood days, the urge to play the IPL Auction depicting real players. I used to team up with my friends and play the auction manually with a pen and paper, with a organizer to keep track. Over the last 1 year, I wondered, can I do anything to make my experience better? So I came up with the idea of building a IPL auction app, based on the MERN stack.

<h2 id='features'> What it does ✨</h2>

![AndThatsWhatItDoesDigibyteGIF](https://user-images.githubusercontent.com/59244289/136423729-777b2bb9-3d7c-4ec3-a9e3-742167451853.gif)

You can team up with your friends and dive into the fun world of auctioning IPL players. The application is capable of auctioning players belonging to various IPL Teams. The bid timer is reset with each bid and the time slot to buy a player is 10 seconds so be quick. It's a fun application to experience the the real IPL Auction with friends. Simply create an account, gather your friends and jump staright into the auction.

<h2 id='build'> How I built it 🐺</h2>

![HowItsMadeCuriousGIF](https://user-images.githubusercontent.com/59244289/136423987-f44902a6-a93b-423d-af6d-1d2c525bdfa4.gif)

- React is used on the client side.
- Node.js is used on the server side.
- The news is fetched from the RSS feed of Times of India.
- Puppeteer is used to scrape data from the IPLT20 Website.
- Socket.io is used to establish a full-duplex connection with the server and the client.
- HTTP-only cookies are used to store the information of the user on the client side.
- bcrypt is used to hash the passwords of the user.
- An auction object is created upon the creation of a new auction which stores the information of current auction.
- User class stores the information of the user and the players purchased by him/her.
- node-schedule is used to schedule the scraping process.
- Mongodb database is used to store the incomming data.

<h2 id='screenshots'>Screenshots 🖼️</h2>

<div align="center">
  <img width="45%" src="https://github.com/Coder-Srinivas/Ipl-Auction/blob/master/client/public/Images/Screenshot-1.png">
  <img width="45%" src="https://github.com/Coder-Srinivas/Ipl-Auction/blob/master/client/public/Images/Screenshot-2.png">
  <img width="45%" src="https://github.com/Coder-Srinivas/Ipl-Auction/blob/master/client/public/Images/Screenshot-3.png">
  <img width="45%" src="https://github.com/Coder-Srinivas/Ipl-Auction/blob/master/client/public/Images/Screenshot-4.png">
  <img width="45%" src="https://github.com/Coder-Srinivas/Ipl-Auction/blob/master/client/public/Images/Screenshot-5.png">
  <img width="45%" src="https://github.com/Coder-Srinivas/Ipl-Auction/blob/master/client/public/Images/Screenshot-6.png">
  <img width="45%" src="https://github.com/Coder-Srinivas/Ipl-Auction/blob/master/client/public/Images/Screenshot-7.png">
</div>

<h2 id='play'>How to play 🎭</h2>

![TypicalDayPaningningTheRealPaningningGIF](https://user-images.githubusercontent.com/59244289/136424082-80c3bbc0-5575-472b-a4e7-97942c4b10b5.gif)

- Login/Signup using your email address and password
- Create a new auction
- Share the generated code with your friends
- Bid on your favourite players
- Most important part is to enjoy

<h2 id='structure'>Project Structure 💪</h2>

    .
    │   .gitignore
    │   app.js
    │   package-lock.json
    │   package.json
    │   README.md
    │
    ├───.github
    │   └───workflows
    │           codeql-analysis.yml
    │
    ├───.husky
    │       pre-commit
    │
    ├───.vscode
    │       settings.json
    │
    ├───client
    │   │   .gitignore
    │   │   package-lock.json
    │   │   package.json
    │   │
    │   ├───public
    │   │   │   index.html
    │   │   │
    │   │   └───Images
    │   │           arrow.svg
    │   │           error.svg
    │   │           logo.png
    │   │           profile.jpeg
    │   │           Screenshot-1.png
    │   │           Screenshot-2.png
    │   │           Screenshot-3.png
    │   │           Screenshot-4.png
    │   │           Screenshot-5.png
    │   │           Screenshot-6.png
    │   │           Screenshot-7.png
    │   │
    │   └───src
    │       │   App.js
    │       │   index.js
    │       │
    │       ├───components
    │       │       AccordianComponent.js
    │       │       Bars.js
    │       │       CreateAuction.js
    │       │       Error.js
    │       │       Form.js
    │       │       Game.js
    │       │       Input.js
    │       │       JoinAuction.js
    │       │       Loading.component.js
    │       │       Lobby.js
    │       │       Navbar.js
    │       │       News.js
    │       │       NewsCard.js
    │       │       NewsContent.js
    │       │       NewsDate.js
    │       │       NewsDescription.js
    │       │       NewsImage.js
    │       │       NewsTitle.js
    │       │       PlayerCard.js
    │       │       PlayerStats.js
    │       │       Title.js
    │       │       UserAccordian.js
    │       │
    │       ├───hooks
    │       │       useFindUser.js
    │       │       UserContext.js
    │       │
    │       ├───pages
    │       │       About.js
    │       │       Auction.js
    │       │       Home.js
    │       │       Loading.js
    │       │       Login.js
    │       │       PreviousAuctions.js
    │       │       SignUp.js
    │       │
    │       ├───routes
    │       │       PrivateRoute.js
    │       │       PublicRoute.js
    │       │
    │       ├───sass
    │       │   │   main.scss
    │       │   │
    │       │   ├───base
    │       │   │       animations.scss
    │       │   │       reset.scss
    │       │   │
    │       │   ├───components
    │       │   │       bars.scss
    │       │   │       button.scss
    │       │   │       create-auction.scss
    │       │   │       error.scss
    │       │   │       form.scss
    │       │   │       games.scss
    │       │   │       loading.scss
    │       │   │       lobby.scss
    │       │   │       navbar.scss
    │       │   │       news.scss
    │       │   │       playerCard.scss
    │       │   │       title.scss
    │       │   │       user-accordian.scss
    │       │   │
    │       │   ├───pages
    │       │   │       about.scss
    │       │   │       auction.scss
    │       │   │       home.scss
    │       │   │       loading.scss
    │       │   │       previous-auction.scss
    │       │   │
    │       │   └───utilities
    │       │           classes.scss
    │       │           mixins.scss
    │       │           variables.scss
    │       │
    │       ├───services
    │       │       auction.service.js
    │       │       auth.service.js
    │       │       news.service.js
    │       │       players.service.js
    │       │       sockets.service.js
    │       │
    │       └───utilities
    │               axiosInstance.js
    │               handleChanges.js
    │               validation.js
    │
    ├───controller
    │       auction.js
    │       bidding.js
    │       game.js
    │       user.js
    │
    ├───data
    │       squads.json
    │
    ├───database
    │   │   connection.js
    │   │
    │   └───models
    │           user.model.js
    │
    ├───middleware
    │       auth.js
    │
    ├───routes
    │       auction.route.js
    │       news.route.js
    │       socket.route.js
    │       user.route.js
    │
    └───utilities
            players.js...

## Steps to get the project running locally on your machine

#### Setting Up Environment Variables

1. Create a .env file in the backend directory
2. Initialize DEV_MONGO_URL to mongodb://localhost:27017/
3. Initialize DEV_REACT_URL to http://localhost:3000
4. Initialize DEV_SERVER_URL to http://localhost:8000
5. Initialize SECRET to a JWT secret key

#### Installing the dependencies

Run the following command in the root
of the project to install the packages
on the server side:

```
npm i
```

Run the following command in the root
of the project to install the packages
on the client side:

```
cd client
npm i
```

#### Running the project

Run the following command in the root
to get the client side and the server
side running concurrently:

```
npm run dev
```

## Note

Keep the monogodb database running locally before running the application.
