const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing here! Express.js won't handle this error gracefully.
    console.error("Error:", error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const success = Math.random() < 0.5; // 50% chance of failure
    setTimeout(() => {
      if (success) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}