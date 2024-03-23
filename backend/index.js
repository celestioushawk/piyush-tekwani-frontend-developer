import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import bodyparser from 'body-parser'
import dotenv from 'dotenv'

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
dotenv.config();
/**
 * Function for performing basic authentication of all calls to the API. 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 * @returns 
 */
const basicAuth = (req, res, next) => {
	const authheader = req.headers.authorization;
	/* eslint-disable */
	const credentials = new Buffer.from(authheader.split(' ')[1],'base64').toString().split(':');
	const usernameRecieved = credentials[0];
	const passwordRecieved = credentials[1];
	if("piyush" === usernameRecieved && "piyush" === passwordRecieved)
	{
		next();
	}
	else {
		return res.send("User not authorized");
	}
}

app.use(basicAuth);
// Base URL for making calls to the SpaceX API.
const baseURL = "https://api.spacexdata.com/v4/rockets";
// GET route for getting information on all rockets.
app.get("/rockets", async (req, res) => {
	try {
		const response = await fetch(baseURL);
		const json = await response.json();
		res.send(json);
	} catch (err) {
		console.log(err);
	}
});
// GET route for getting information on a single rocket using :id parameter.  
app.get("/rockets/:id", async (req, res) => {
	const url = baseURL + "/" + req.params.id;
	try {
		const response = await fetch(url);
		const json = await response.json();
		res.send(json);
	} catch (err) {
		console.log(err);
	}
});
// POST route for fetching rocket information based on query.
app.post("/rockets/query", async (req, res) => {
	const url = "https://api.spacexdata.com/v4/rockets/query";
	try {
		const postResponse = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req.body)
		})
		const json = await postResponse.json();
		res.send(json);
	} catch (err) {
		console.log(err);
	}
})

app.listen(3000, () => console.log("server is running at post 3000"));
