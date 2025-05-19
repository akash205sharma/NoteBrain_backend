try {
  require('./user_code');
} catch (err) {
  console.error("Error:", err.message);
  process.exit(1); // ❗ explicitly exit on error
}


