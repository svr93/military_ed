// applications/main/config/routes.js

module.exports = [
{
  url: "/info(|/)(.*)",
  rewrite: "/api/info.json[2]"
},
{
  url: "/kill(|/)",
  rewrite: "/api/kill.json"
}
];
