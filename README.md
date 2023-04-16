# My Node.js Project

[![Node.js Version](https://img.shields.io/node/v/express)](https://nodejs.org/en/)

This is a Node.js project demonstrating different techniques in handling asynchronous tasks, such as making HTTP requests, hashing passwords, and reading files. It uses the `https`, `crypto`, and `fs` modules to perform these tasks and `express` for serving a simple web application.

## Table of Contents

- [My Node.js Project](#my-nodejs-project)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)

## Installation

Before you start, make sure you have [Node.js](https://nodejs.org/en/download/) installed on your system.

Clone the repository:

```bash
git clone https://github.com/YourUsername/YourRepository.git
cd YourRepository
```

Install the dependencies:

```bash
npm install
```

## Usage

- `async.js`: Demonstrates making multiple HTTP requests to google.com and measures the time taken.
- `index.js`: Serves a simple web application with two routes: a slow route that hashes a password and a fast route that returns a response immediately.
- `multitask.js`: Performs HTTP requests, password hashing, and file reading concurrently, measuring the time taken for each task.
- `threads.js`: Shows how the thread pool size affects the execution time of multiple password hashing operations.

To run any of the above scripts, use the following command:

```bash
node <script_name>.js
```

For example, to run `async.js`:

```bash
node async.js
```

## Scripts

In this project, there are four main scripts:

1. `async.js`: Measures the time taken to complete multiple HTTP requests to google.com.
2. `index.js`: Serves a simple web application with an endpoint that performs password hashing and another endpoint that returns a fast response.
3. `multitask.js`: Demonstrates the concurrent execution of different tasks (HTTP requests, file reading, and password hashing).
4. `threads.js`: Shows the effect of the thread pool size on multiple password hashing operations.
