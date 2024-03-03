
# Node Web Server <img align=right src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-1-226034.png?w=55" alt=""/>

- `node-web-server` is a lightweight Node.js web server designed to serve HTML, CSS, and image files based on file extensions.

- It includes features for automatic routing to `index.html` for root requests and graceful handling of 404 errors.

- The website served by Node is just bare HTML with no actual content, Because this repo is all about testing Node's in-built modules'a features like `http`, `fs` & `path`.

## Features

- **File Type Support**: Supports serving HTML, CSS, and PNG files.
- **Automatic Routing**: Automatically routes requests to `index.html` when the root URL is accessed.
- **Error Handling**: Gracefully handles 404 errors by serving a custom error page.

## Installation

1. **Clone the Repository**: Grab a copy of the code by cloning the repository:

   ```bash
   git clone git@github.com:0xabdulkhalid/node-web-server.git
   ```

2. **Navigate to the Project Directory**: Move into the project directory:

   ```bash
   cd node-web-server
   ```

3. **Start the Server**: Kickstart the server using Node.js:

   ```bash
   node index.js
   ```

   Once the server is running, you can access it in your browser by navigating to [http://localhost:8080](http://localhost:8080).

## Example Usage

- Suppose you have an `index.html` file in your project directory.
- When you start the server and navigate to [http://localhost:8080](http://localhost:8080) in your browser, the server will automatically serve the `index.html` file.
- Similarly, if you have a `styles.css` file or an image file such as `logo.png`, the server will serve them accordingly.
