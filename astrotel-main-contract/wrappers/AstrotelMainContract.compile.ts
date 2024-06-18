import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/astrotel_main_contract.tact',
    options: {
        debug: true,
    },
};
