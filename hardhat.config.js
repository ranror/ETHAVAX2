require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
module.exports = {
  solidity: "0.8.25",
  networks: {
    fuji:{
      url:process.env.RPC_URL,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
