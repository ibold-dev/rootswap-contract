import { ethers } from "hardhat";

async function lock() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.parseEther("0.0001");

  const lock = await ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// lock().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

async function factory() {

  const factory = await ethers.deployContract("UniswapV3Factory");

  await factory.waitForDeployment();

  console.log(
    `UniswapV3Factory deployed to ${factory.target}`
  );
}

factory().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
