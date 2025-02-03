require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
  "login": "garvit65",
  "id": 122821313,
  "node_id": "U_kgDOB1IawQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/122821313?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/garvit65",
  "html_url": "https://github.com/garvit65",
  "followers_url": "https://api.github.com/users/garvit65/followers",
  "following_url": "https://api.github.com/users/garvit65/following{/other_user}",
  "gists_url": "https://api.github.com/users/garvit65/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/garvit65/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/garvit65/subscriptions",
  "organizations_url": "https://api.github.com/users/garvit65/orgs",
  "repos_url": "https://api.github.com/users/garvit65/repos",
  "events_url": "https://api.github.com/users/garvit65/events{/privacy}",
  "received_events_url": "https://api.github.com/users/garvit65/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Garvit",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-01-16T17:53:00Z",
  "updated_at": "2025-01-29T11:08:38Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('garvitgrover')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})