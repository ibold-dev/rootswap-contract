import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const config: HardhatUserConfig = {
  solidity: "0.7.6",
  defaultNetwork: "hardhat",
  networks:{
    hardhat : {
      //url: `${process.env.RPCURL}`,
      //accounts: [process.env.PRIVKEY],
      chainId: 31337, //31337, // local chainId
      forking:{
        url: `${process.env.RPCURL}`
      }
    },
    localhost : {
        url: `${process.env.LOCALURL}`,
        accounts: [process.env.PRIVKEY],
        chainId: 1337, //31337, // local chainId
      }
  }
};

export default config;
