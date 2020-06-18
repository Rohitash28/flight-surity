module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      },
      network_id: '*',
      gas: 9999998, websockets :true
    },
     development_cli: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*",
        websockets: true
  },
},
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};
