// import { Url } from "url";

export const Web3 = require("web3");
// export const web3 = new Web3("https://mainnet.infura.io/v3/58febdffbcc44a588425dbb5bea56369")

const result = async(urlData: string) => {
    await fetch(urlData).then((balance)=>{
console.log(balance);;
    })
}

result("https://api.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=VV8TC9NDV3KNDF85QXNW1S58AR6WQHQ5ZW");