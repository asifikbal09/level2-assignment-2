### Overview
Shopping project is a simple and scalable backend project built using cutting-edge technologies to deliver a seamless and secure experience. The project leverages the power of Node.js and Express.js for building the server-side logic, TypeScript for enhanced code maintainability, Mongoose for MongoDB integration, and several other essential tools and libraries to ensure a modern and efficient development workflow.

## Live link:
 - [Shopping Project](https://shopping-project-navy.vercel.app/) live link is https://shopping-project-navy.vercel.app/

## Technologies Used
- **Node.js:** A powerful JavaScript runtime for building scalable and efficient server-side applications.
- **Express.js:** A minimalist web application framework for Node.js that provides robust features for web and mobile applications.
- **TypeScript:** A superset of JavaScript that adds static typing, making the code more readable, maintainable, and less error-prone.
- **Mongoose:** An elegant MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straightforward schema-based solution to model your application data.
- **Dotenv:** A zero-dependency module that loads environment variables from a .env file into process.env, making it easy to manage configuration settings.
- **Cors:** A middleware for Express.js that enables Cross-Origin Resource Sharing, ensuring secure communication between the frontend and backend.
- **ESLint:** A pluggable linting utility for JavaScript and TypeScript that identifies and fixes common coding issues, ensuring code consistency and quality.
- **Prettier:** An opinionated code formatter that enforces a consistent coding style, enhancing code readability and collaboration.
- **Bcrypt:** A library for hashing passwords, adding an extra layer of security to user authentication.
- **ts-node-dev:** A development utility that enables fast and efficient TypeScript development by automatically restarting the server on file changes.

- **Zod:** A TypeScript-first schema declaration and validation library that promotes better type safety and runtime validation.
## Getting Started
To set up the project locally, follow these steps:

1. **Clone the repository:** 
```bash
  git clone https://github.com/asifikbal09/level2-assignment-2.git
  cd level2-assignment-2
```
2. **Install dependencies:** 
```bash
  npm install
```
Now all dependencies are install on your local project.

3. **Set up environment variables:** Create a .env file based on the provided .env.example. Now declare 4 variable `NODE_ENV`, `PROT`, `MONGODB_URL` and `BCRYPT_SALT_ROUND`.

4. **Value assign in env variables:** NODE_ENV = development ; when you work locally, PORT value basically everyone use 5000, MONGODB_URL value must be copy from MongoDB atlas and assign it. And the `BCRYPT_SALT_ROUND` value is a number. You can choose any number between 10 to 20. 

5. **Start the development server:** `npm run start:dev` 

## API Endpoints.
### User Endpoints
**Create a new user api Endpoint:**
- POST /api/users
**Retrieve a list of all users Endpoint:**
- GET /api/users
**Retrieve single user by ID Endpoint:**
- GET /api/users/:userId
**Update a user information by ID Endpoint:**
- PUT /api/users/:userId
**Delete a user Endpoint:**
- DELETE /api/users/:userId
### Order Management-
**Add a new order Endpoint:**
- PUT /api/users/:userId/orders
**Retrieve all orders for a specific user Endpoint:**
- GET /api/users/:userId/orders
**Retrieve all orders for a specific user Endpoint:**
- GET /api/users/:userId/orders/total-price

## API Testing Tool
I use [POSTMAN](https://www.postman.com/) for test my API endpoints. It is so useful for testing api.

"The more you know, the more you realize you don't know." - Aristotle

