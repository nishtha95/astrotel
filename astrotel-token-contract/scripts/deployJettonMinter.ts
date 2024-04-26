import { Address, toNano } from '@ton/core';
import { JettonMinter, JettonMinterContent, jettonContentToCell, jettonMinterConfigToCell } from '../wrappers/JettonMinter';
import { compile, NetworkProvider, UIProvider} from '@ton/blueprint';
import { promptAddress, promptBool, promptUrl } from '../wrappers/ui-utils';

// const formatUrl = "https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md#jetton-metadata-example-offchain";
// const exampleContent = {
//                           "name": "Astro",
//                           "description": "Astrotel app token",
//                           "symbol": "ASTRO",
//                           "decimals": 0,
//                           "image": "https://www.svgrepo.com/download/483336/coin-vector.svg"
//                        };
const contentUrl = "https://gist.githubusercontent.com/nishtha95/df2ccd69b3f95dcbcb5d6c59220c085a/raw/3d0ec4dabf55bc53942ae39ebf45d2f5580af4df/astrotel_metadata.json";
const admin = Address.parse('0QAdGsZLguHSZ0ROS7-53wYyT6_sLyh2tXfghgGVFsGKDT1d');
export async function run(provider: NetworkProvider) {
    const ui       = provider.ui();
    ui.write('Hello there');
    // const sender   = provider.sender();
    // const adminPrompt = `Please specify admin address`;
    // ui.write(`Jetton deployer\nCurrent deployer onli supports off-chain format:${formatUrl}`);

    // let admin      = await promptAddress(adminPrompt, ui, sender.address);
    // ui.write(`Admin address:${admin}\n`);
    // let contentUrl = await promptUrl(urlPrompt, ui);
    // ui.write(`Jetton content url:${contentUrl}`);

    // let dataCorrect = false;
    // do {
    //     ui.write("Please verify data:\n")
    //     ui.write(`Admin:${admin}\n\n`);
    //     ui.write('Metadata url:' + contentUrl);
    //     dataCorrect = await promptBool('Is everything ok?(y/n)', ['y','n'], ui);
    //     if(!dataCorrect) {
    //         const upd = await ui.choose('What do you want to update?', ['Admin', 'Url'], (c) => c);

    //         if(upd == 'Admin') {
    //             admin = await promptAddress(adminPrompt, ui, sender.address);
    //         }
    //         else {
    //             contentUrl = await promptUrl(urlPrompt, ui);
    //         }
    //     }

    // } while(!dataCorrect);

    const content = jettonContentToCell({type:1,uri:contentUrl});

    const wallet_code = await compile('JettonWallet');

    const minter  = JettonMinter.createFromConfig({admin,
                                                  content,
                                                  wallet_code,
                                                  }, 
                                                  await compile('JettonMinter'));

    await provider.deploy(minter, toNano('0.05'));
}
