require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
//const cors = require('cors')

const app = express();
const accessToken = process.env.ACCESSKEY;
const port = process.env.PORT;

//app.use(cors())
app.use(express.static('frontend/dist/frontend'))

app.listen(port, () => console.log("Listening on port 3000 .... "));

app.get("/api", (req, res) => {
  fetch("https://api.github.com/graphql", {
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      query: ` {
            user(login: "ahmedkhalil91518") {
              pinnedItems(first: 6, types: [REPOSITORY]) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      url
                      homepageUrl
                      repositoryTopics(first: 10) {
                        nodes {
                          topic {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          `,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log("data returned:\n", data);
      res.send(data);
    });
});
