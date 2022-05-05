// 0 mainnet, 1 testnet
let network_type = 1;

let constants;
constants = {
  net: network_type,
  ankr_rpc_eth: "https://rpc.ankr.com/eth",
  ankr_rpc_rinkeby: "https://rinkeby.arbitrum.io/rpc",
  ankr_rpc_bsc: "https://rinkeby.arbitrum.io/bsc",
  ankr_rpc_bsctest: "https://data-seed-prebsc-1-s3.binance.org:8545/",
};

export default constants;
