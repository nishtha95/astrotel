import * as fs from "fs";
import * as path from "path";
import { Address, contractAddress } from "@ton/core";
import { AstrotelMainContract } from "./output/astrotel_AstrotelMainContract";
import { prepareTactDeployment } from "@tact-lang/deployer";

(async () => {
    // Parameters
    let testnet = true;
    let packageName = "astrotel_AstrotelMainContract.pkg";
    let owner = Address.parse("0QAdGsZLguHSZ0ROS7-53wYyT6_sLyh2tXfghgGVFsGKDT1d");
    let init = await AstrotelMainContract.init(BigInt(1)); // Pass an argument to the init function as a bigint

    // Load required data
    let address = contractAddress(0, init);
    let data = init.data.toBoc();
    let pkg = fs.readFileSync(path.resolve(__dirname, "output", packageName));

    // Prepareing
    console.log("Uploading package...");
    let prepare = await prepareTactDeployment({ pkg, data, testnet });

    // Deploying
    console.log("============================================================================================");
    console.log("Contract Address");
    console.log("============================================================================================");
    console.log();
    console.log(address.toString({ testOnly: testnet }));
    console.log();
    console.log("============================================================================================");
    console.log("Please, follow deployment link");
    console.log("============================================================================================");
    console.log();
    console.log(prepare);
    console.log();
    console.log("============================================================================================");
})();
