const fs = require('fs');

try {
  require('./user_code');
} catch (err) {
  console.log("Error:", err.message);
}
