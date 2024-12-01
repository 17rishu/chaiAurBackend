require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/insta', (req, res)=>{
    res.send('Instagram')
})

app.get('/login', (req, res)=>{
    res.send('<h2> Abhi login page ni bna, kahi aur ja ke login kr le :(')
})

const githubInfo = {
  login: "17rishu",
  id: 73096439,
  node_id: "MDQ6VXNlcjczMDk2NDM5",
  avatar_url: "https://avatars.githubusercontent.com/u/73096439?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/17rishu",
  html_url: "https://github.com/17rishu",
  followers_url: "https://api.github.com/users/17rishu/followers",
  following_url: "https://api.github.com/users/17rishu/following{/other_user}",
  gists_url: "https://api.github.com/users/17rishu/gists{/gist_id}",
  starred_url: "https://api.github.com/users/17rishu/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/17rishu/subscriptions",
  organizations_url: "https://api.github.com/users/17rishu/orgs",
  repos_url: "https://api.github.com/users/17rishu/repos",
  events_url: "https://api.github.com/users/17rishu/events{/privacy}",
  received_events_url: "https://api.github.com/users/17rishu/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Rishabh Singh",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Software Engineer\r\n",
  twitter_username: null,
  public_repos: 22,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2020-10-19T06:18:22Z",
  updated_at: "2024-12-01T20:20:11Z",
};

app.get('/github', (req, res)=>{
    res.json(githubInfo)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}`)
})