require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      accounts: ['68e3b157a37cd99bf903e078a2ae23b3b1098c01b5117709bcc0dcbf8483beae'],
    },
  },
};