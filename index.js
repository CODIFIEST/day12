//we require ethers to work with eth wallets, addresses etc.
const ethers = require ("ethers");
//create a new provider
const provider =new ethers.providers.Web3Provider(window.ethereum)

// add an event listenter 
document.getElementById("walletbutton").addEventListener("click", function(){
    window.ethereum.request({
        method: "eth_requestAccounts"
    }).then(address => {
        document.getElementById("address").innerHTML = `Your full address is ` + address
        address = address.toString();
        let first = address.substr(0,5);
        let last = address.substr(address.length - 4)
        let trunc = first + "..." + last
        document.getElementById("walletbutton").innerHTML = trunc
            })

    // document.getElementById("address").innerHTML = "thiis where your address will appear"
    // console.log("you clickity clicked")
    // alert("why doesn't this print?")
})
document.getElementById("balance-button").addEventListener("click", function(){
    provider.send("eth_requestAccounts", [])
    .then ((addresses) =>{
        // console.log(addresses);
        const mainaddress = addresses[0];
        // console.log (mainaddress);


        provider.getBalance(mainaddress).then((balance) => {
            alert(`your balance is ` + balance.toString())
            // document.getElementById("balance-button").innerHTML = balance.toString();
            // console.log (balance.toString());

        })


    })
})

// lets make the next buttons cleaner here
document.getElementById("current-block-button").addEventListener("click", function(){
    provider.getBlockNumber()
    .then((blocknumber) => {
        document.getElementById("current-block").innerHTML = 'Eth current block number is ' + blocknumber;
    })
})

//get current gas price
document.getElementById("gas-price-button").addEventListener("click", function(){
  provider.getGasPrice()
  .then((gasprice)=>{
    document.getElementById("gas-price").innerHTML = 'Current gas price is ' + gasprice;
  })

  //there has to be an easier way than the below
    // provider.getBlockWithTransactions()
    // .then((blockWithTransactions)=>{
    //     console.log(blockWithTransactions)
    //     console.log(blockWithTransactions.transactions[0].gasPrice._hex.toString())
    //     gasprice = parseInt(blockWithTransactions.transactions[0].gasPrice._hex)
    //     document.getElementById("gas-price").innerHTML = 'Current gas price is ' + gasprice;
    // })
})
   
        
    // });

//use alert to make a popup when the page is clicked
//alert("This message pops up automagically")
// document.addEventListener("click", function(){
//     alert("You are clicking nothing")
//     console.log("User clicked nothing")
// })