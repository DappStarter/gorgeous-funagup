require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain solid hover arctic tail this'; 
let testAccounts = [
"0x459ebb84a29fa4a94a63d19860202881d414e54e99cbaf2f2408ee76dfed9361",
"0xd0f5d68207a6a5cc7c78c36e1e8d0eb126cba9116e18cb0f5c14f6673c61ce95",
"0x0032b6d971e118c82a39bb31db42cb1e2ba8450804ab9035ad3d5313811e7f93",
"0x52d1674ed8bf2251805177d33eec57b070b792af730406caee236d31aaf5852f",
"0x0b4a5f9760c340f0ff75a3e13c0ca78c4cdc3fcc90ebe7e535f2916d9e524b8f",
"0x74ff67c49f6e36e4370a5ffedd013cb0d1a60ab9d139268e689717fe2abd505b",
"0xd0cb6b47517944a141462e61f9e8e6bbfb3a83a2af5949adcc0bd99d4dffbbdd",
"0x8a680aba0abb727b26ab917bf40b5ca3182c0042f1d5a4105cd7ecab17580b18",
"0xdeaa81da46e7cdbd0d85294ad4bbbf40cb55e5bc45d398075f3f85e5f32aaaaf",
"0x2cc87782b8fa6737ca812e5ac9eb1924c78cabac9395832280e57ccec2fac2b3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
