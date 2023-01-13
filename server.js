const express = require('express');
const path = require("path");
const app = new express();

const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'dist')));
// app.use("*", (_, res) => {
// 	res.sendFile(path.join(__dirname, 'dist', 'index.hbs'));
// });

app.use(express.static('src/assets'));

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}...`);
});

