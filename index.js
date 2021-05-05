// index.js is entry point for the server,

// importing NPM modules ,dependencies and helper functions
const express = require("express");

const { convertingToDecimal } = require("./conversion");

// initialize the server
const app = express();

//replacement fot bodyparser() to parse jSON BOdies
app.use(express.json());
app.use(express.urlencoded());

// home page route useful for initial server testing
app.get("/", (req, res) => {
  res.send("Hello you have just hit the homepage");
});

// since there is only one endpoint to be used
//  routes definition in the index.js makes more sense
// assuming the input comes from the url

app.post("/:conversion", (req, res) => {
  let extractedString = req.params.conversion;

  let finalDecimalValue = convertingToDecimal(extractedString);

  let response = {
    decimalValueNumber: finalDecimalValue,
  };

  res.send(response);
});

// Define a port to run a server on or a deploy env port
const PORT = process.env.PORT || 5000;

// tell the server what port to listen on
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
