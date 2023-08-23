const now = Date.now();
const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use("/", (req, res) => {
	return res.status(200).send({
		status: "Sucesss",
		message: "Index",
		data: null,
	});
});

app.use(function (err, req, res, next) {
	console.error(
		{
			log_message: err.stack,
		},
		"INTERNAL_SERVER_ERROR"
	);
	return res.status(500).send({
		status: "error",
		message: "Internal server error",
		data: null,
	});
});

app.listen(process.env.PORT, function () {
	console.log(
		{
			log_message: `Server started on port ${process.env.PORT}`,
			duration: `${(Date.now() - now) / 1000}s`,
		},
		"SERVER_START"
	);
});
