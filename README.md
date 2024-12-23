## Express.js Unhandled Promise Rejection

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.

The `bug.js` file contains an example of an Express.js route handler that uses an asynchronous operation without proper error handling. When the asynchronous operation fails, the error is logged to the console, but the Express.js application does not handle it gracefully, potentially leading to unexpected behavior or crashes.

The `bugSolution.js` file provides a corrected version with proper error handling using a try...catch block to ensure that errors are handled gracefully and prevent unexpected app behavior.