# BidBay-Platform

Welcome to BidBay, the web platform where you can create and bid on listings! With BidBay, you can sell your items and earn credits, or browse through listings and use your credits to purchase items from other users. Non-registered users can also search through the listings and see what's available.

[![Node.js](https://img.shields.io/badge/Node.js-v14.17.5-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-blue.svg)](https://expressjs.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.2.3-purple.svg)](https://getbootstrap.com/)
[![Sass](https://img.shields.io/badge/Sass-v1.58.1-pink.svg)](https://sass-lang.com/)
[![Babel](https://img.shields.io/badge/Babel-v6.23.0-yellow.svg)](https://babeljs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-v8.34.0-blue.svg)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-v0.0.0--5-orange.svg)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/Jest-v29.4.3-purple.svg)](https://jestjs.io/)
[![Travis CI](https://travis-ci.com/Ousman37/BidBay-Platform.svg?branch=main)](https://travis-ci.com/Ousman37/BidBay-Platform)
[![Codecov](https://codecov.io/gh/Ousman37/BidBay-Platform/branch/main/graph/badge.svg?token=3F3YQ1K66Z)](https://codecov.io/gh/Ousman37/BidBay-Platform)

## Description

This web platform allows users to create and bid on listings. When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

Technologies Used

BidBay is built using the following technologies:

    Node.js v14.17.5
    Express.js v4.17.1
    Bootstrap v5.2.3
    Sass v1.58.1
    Babel v6.23.0
    ESLint v8.34.0
    Prettier v0.0.0-5
    Jest v29.4.3

Features

Here are some of the features you can expect when using BidBay:

    Register with your stud.noroff.no email address and start selling or buying items.
    Login and logout as a registered user.
    Update your avatar and view your total credit as a registered user.
    Create a listing with a title, deadline date, media gallery, and description.
    Add a bid to another user's listing and view bids made on a listing.
    Search through listings as an unregistered user.

Requirements

To get started with BidBay, clone this repository and install the dependencies:

npm install

You'll also need to create a `.env` file in the root directory with the following environment variables:

SESSION_SECRET=<your_session_secret>
API_URL=<api_url>

Replace <your_session_secret> with a random string of characters that will be used as the session secret. Replace <api_url> with the URL of the Auction API that you will be using.

## Resources

Here are some resources you can use to learn more about the API used by BidBay:

    API Swagger
    Noroff API documentation

## Getting Started

Once you've installed the dependencies and set up the environment variables, you can start the development server with:

npm run dev

This will start the server and watch for changes to files. Open your browser and navigate to "live-server" to view the project.

## Testing

BidBay is set up with Jest and Supertest for testing. To run the tests, use the following command:

npm test

## Contributing

We welcome contributions to BidBay! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## Credits

This project was created by Ethmane Didi as part of a group project for the Full Stack Web Development course at Noroff School of Technology and Digital Media.

## About Me

I am Ethmane, a front-end developer student currently in my final year of studies. This project was created as part of a group project for the Full Stack Web Development course at Noroff School of Technology and Digital Media.

I'm passionate about creating beautiful and functional websites that provide a great user experience. Currently, I'm looking for a job opportunity or small project where I can further develop my skills and gain practical experience in the field.

In addition to my technical skills, I have excellent communication and problem-solving abilities, and I enjoy working collaboratively in a team environment. If you're interested in working with me or have any questions, please feel free to reach out at Ousman.didibela@gmail.com. I'd be happy to hear from you!

## License

This project is licensed under the MIT License.
