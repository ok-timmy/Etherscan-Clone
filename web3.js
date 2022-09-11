const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/58febdffbcc44a588425dbb5bea56369")
const address = "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8";
//  web3.eth.getPastLogs({from: 44424602, to: 44424603}, (err, logs)=> {
//     console.log(logs, "Past Logs");
//  })

// const  checkBlock = async (address) => {
//     // const mes = await web3.eth.accounts.hashMessage("Hello World");
//     // console.log(mes);

//     let block = await web3.eth.getBlock('latest');
//     let number = block.number;
//     console.log(number, "Number");
//     let transactions = block.transactions;
//     console.log(transactions, "Transactions");
//     console.log('Search Block: ' + transactions);

//     if (block != null && block.transactions != null) {
//         const x = block.transactions.slice(0, 2);
//         console.log(x);
//         for (let txHash of x) {
//             let tx = await web3.eth.getTransaction(txHash);
//             console.log(tx);
//             if ( tx.to.toLowerCase()) {
//                 console.log("from: " + tx.from.toLowerCase() + " to: " + tx.to.toLowerCase() + " value: " + tx.value);
//             }
//         }
//     }
//   }

//   checkBlock(address);

//  (address, (err, bal)=> {
//     // const balance = web3.utils.fromWei(bal);
//     console.log(bal);
// });

// console.log(Web3);
// console.log(newAcc);


var myAddr = '0xbb9bc244d798123fde783fcc1c72d3bb8c189413';


var currentBlock = web3.eth.blockNumber;
var n = web3.eth.getTransactionCount(myAddr, currentBlock);
var bal = web3.eth.getBalance(myAddr, currentBlock);
for (var i=currentBlock; i >= 0 && (n > 0 || bal > 0); --i) {
    try {
        var block = web3.eth.getBlock(i, true);
        if (block && block.transactions) {
            block.transactions.forEach(function(e) {
                if (myAddr == e.from) {
                    if (e.from != e.to)
                        bal = bal.plus(e.value);
                    console.log(i, e.from, e.to, e.value.toString(10));
                    --n;
                }
                if (myAddr == e.to) {
                    if (e.from != e.to)
                        bal = bal.minus(e.value);
                    console.log(i, e.from, e.to, e.value.toString(10));
                }
            });
        }
    } catch (e) { console.error("Error in block " + i, e); }
}