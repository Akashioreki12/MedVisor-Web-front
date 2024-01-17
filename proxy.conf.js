const PROXY_CONFIG = [
  {
    context: ["/v2/api-docs"],
    target: "http://localhost:8080",
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
