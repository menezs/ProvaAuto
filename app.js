import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/js", express.static("./public/js"));

app.get("/", function (req, res) {
	res.render("home");
});

app.get("/modal", function (req, res) {
	res.render("modal");
});

app.listen(PORT, () => {
	console.log(`Servidor escutando em http://localhost:${PORT}`);
});
