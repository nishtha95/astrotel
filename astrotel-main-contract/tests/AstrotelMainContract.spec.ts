import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { AstrotelMainContract } from '../wrappers/AstrotelMainContract';
import '@ton/test-utils';

describe('AstrotelMainContract', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let astrotelMainContract: SandboxContract<AstrotelMainContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        astrotelMainContract = blockchain.openContract(await AstrotelMainContract.fromInit(1n));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await astrotelMainContract.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: astrotelMainContract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and astrotelMainContract are ready to use
    });

it('should add astrologer', async () => {
        const treasure = await blockchain.treasury('treasure');
        const astrologersBefore = await astrotelMainContract.getGetAllAstrologers();
        console.log('astrologers before adding', astrologersBefore.values());
        const addResult = await astrotelMainContract.send(treasure.getSender(), { value: toNano(1) }, { $$type: "AddAstrologer", expertise: "Vedic Astrology", experience: "4 years", fees: BigInt(100), telegram_id: "123456" });


        expect(addResult.transactions).toHaveTransaction({
            from: treasure.address,
            to: astrotelMainContract.address,
            success: true,
        });

        const astrologersAfter = await astrotelMainContract.getGetAllAstrologers();

        console.log('astrologers after adding', astrologersAfter.values());

        expect(astrologersAfter.values().length).toBe(astrologersBefore.values().length+1);
    })
})
