const now = Date.now();
import express from "express";
import dotenv from "dotenv";

const app = express();
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
		`Server started on port ${process.env.PORT}`,
		`${(Date.now() - now) / 1000}s`
	);
});
