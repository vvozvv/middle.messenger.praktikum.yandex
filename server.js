const express = require('express');
const path = require("path");
const app = new express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get("*", (req, res) => {
	res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}...`);
});

