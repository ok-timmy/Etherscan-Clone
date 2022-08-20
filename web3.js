const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/58febdffbcc44a588425dbb5bea56369")
const address = "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8";
//  web3.eth.getPastLogs({from: 44424602, to: 44424605}, (err, logs)=> {
//     console.log(logs);
//  })

const  checkBlock = async (address) => {
    let block = await web3.eth.getBlock('latest');
    let number = block.number;
    // console.log(number);
    let transactions = block.transactions;
    // console.log(transactions);
    //console.log('Search Block: ' + transactions);

    if (block != null && block.transactions != null) {
        const x = block.transactions.slice(0, 10);
        // console.log(x);
        for (let txHash of x) {
            let tx = await web3.eth.getTransaction(txHash);
            // console.log(tx);
            if ( tx.to.toLowerCase()) {
                console.log("from: " + tx.from.toLowerCase() + " to: " + tx.to.toLowerCase() + " value: " + tx.value);
            }
        }
    }
  }

  checkBlock(address);

//  (address, (err, bal)=> {
//     // const balance = web3.utils.fromWei(bal);
//     console.log(bal);
// });

// console.log(Web3);
// console.log(newAcc);
