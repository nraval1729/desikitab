const express = require("express");
const app = express();

require('dotenv').config()

const engines = require('consolidate');

app.engine('html', engines.hogan);
app.set('views', __dirname + '/public/templates');
app.set('view engine', 'html');

// post request parsing
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let emailValidator = require("email-validator");
let mysql = require("mysql");

let mysqlConn = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  database : process.env.RDS_DB_NAME,
  port     : process.env.RDS_PORT,
  ssl	   : "Amazon RDS"
});

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
	console.log("inside main");
	res.render("index.html");
});

app.post("/email", (req, res) => {
	const isValidEmail = emailValidator.validate(req.body.email);
	if(!isValidEmail) res.send(false);
	else {
		handleValidEmail(req.body.email)
		.then(res.send(true))
		.catch((err) => res.send(err));		
	}


})

// should return a promise
 let handleValidEmail = (email) => {
 	return new Promise((resolve, reject) => {
		let escapedEmail = mysqlConn.escape(email);
		mysqlConn.query("INSERT INTO emails(email) VALUES(?)", [escapedEmail], (error, results, fields) => {
			if(error) {
				console.log("Error in inserting, rejecting with error: " +error);
				reject(error);
			}
			resolve(results);
		});		
 	});

}


app.listen(8080, () => console.log("Server started on 8080!"));
