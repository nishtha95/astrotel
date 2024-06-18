import { toNano } from '@ton/core';
import { AstrotelMainContract } from '../wrappers/AstrotelMainContract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const astrotelMainContract = provider.open(await AstrotelMainContract.fromInit(0n));

    await astrotelMainContract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(astrotelMainContract.address);

    // run methods on `astrotelMainContract`
}
