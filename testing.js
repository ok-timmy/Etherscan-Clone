// import Web3 from "web3"
import axios from "axios";
import Web3 from "web3";
// const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/58febdffbcc44a588425dbb5bea56369"
);

console.log("https://mainnet.infura.io/v3/58febdffbcc44a588425dbb5bea56369");
// console.log(web3);

const result = async (urlData) => {
  await axios.get(urlData).then(async (balance) => {
    // const bal = await JSON.parse(balance.data.result);
    console.log(balance.data);
  });
};

// Account Internal Transactions
// result(
//  "https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x20E44FcCFefC2215e8FFa6cD9cBDdD6EAaFdB999&startblock=0&endblock=15505638&page=1&offset=10000&sort=asc&apikey=VV8TC9NDV3KNDF85QXNW1S58AR6WQHQ5ZW"
// );

// Normal account Transaction
// result(
//  "https://api.etherscan.io/api?module=account&action=txlist&address=0x20E44FcCFefC2215e8FFa6cD9cBDdD6EAaFdB999&startblock=0&endblock=99999999&page=1&offset=1000&sort=asc&apikey=VV8TC9NDV3KNDF85QXNW1S58AR6WQHQ5ZW"
// );



result(
  "https://api.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=VV8TC9NDV3KNDF85QXNW1S58AR6WQHQ5ZW"
);
