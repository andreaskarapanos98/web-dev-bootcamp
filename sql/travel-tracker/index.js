import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Home Page
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//Add a new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try{

    const result = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1",
      [input]
    );

    if(result.rows.length === 0) {
      const countries = await checkVisisted();
      return res.render("index.ejs", {countries: countries, total: countries.length, error : "Country not found. Try again!"});
    }
    const countryCode = result.rows[0].country_code;

    const existing = await db.query(
    "SELECT * FROM visited_countries WHERE country_code = $1",
    [countryCode]
    );

    if (existing.rows.length > 0) {
      const countries = await checkVisisted();
      return res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country already exists",
      });
    }
    
   await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
        countryCode,
      ]);
      res.redirect("/");
    

  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}