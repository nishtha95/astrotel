import { toNano } from "@ton/core";
import { ContractSystem } from "@tact-lang/emulator";
import { AstrotelMainContract } from "./output/astrotel_AstrotelMainContract";

describe("contract", () => {
  it("should deploy correctly", async () => {
    const system = await ContractSystem.create();

    // Treasure is a contract that has 1m of TONs and is a handy entry point for your smart contracts
    let treasure = await system.treasure('name of treasure');

    // Contract itself
    let contract = system.open(await AstrotelMainContract.fromInit(BigInt(1)));

    await contract.send(treasure, { value: toNano(1) }, { $$type: "Deploy", queryId: 0n });
    await system.run();

    // This object would track all transactions in this contract
    let tracker = system.track(contract.address);

    // This object would track all logs
    let logger = system.log(contract.address);

    await contract.send(treasure, { value: toNano(1) }, { $$type: "AddAstrologer", expertise: "Vedic Astrology", fees: BigInt(100), telegram_id: "123" });
    await system.run();

    await contract.getGetAllAstrologers().then((result) => console.log(result)).catch((e) => console.log('error', e));
  });
});
