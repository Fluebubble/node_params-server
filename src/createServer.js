/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
'use strict';
const http = require('http');

function createServer() {
  /* Write your code here */
  // Return instance of http.Server class
  const server = http.createServer((req, res) => {
    const normalizedUrl = new URL(req.url, `http://${req.headers.host}`);

    const parts = normalizedUrl.pathname
      .split('/')
      .filter((part) => part !== '');

    const query = Object.fromEntries(normalizedUrl.searchParams.entries());

    // console.log(normalizedUrl);
    // console.log(req.headers.host);
    // console.log(req.url);
    const data = {
      parts,
      query,
    };
    console.log(data);
  });

  return server;
}

module.exports = {
  createServer,
};
