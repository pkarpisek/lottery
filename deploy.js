const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'amateur blood enough gloom defense cushion worry riot split enact scrap meat',
    'https://rinkeby.infura.io/v3/f28b138198ff4c66aefa560195623b61'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Atempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });


    console.log('Contract deployed to', result.options.address);

};
deploy();

