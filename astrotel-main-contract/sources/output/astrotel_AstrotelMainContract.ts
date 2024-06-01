import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type UpdateDetails = {
    $$type: 'UpdateDetails';
    expertise: string;
    fees: bigint;
    telegram_id: string;
}

export function storeUpdateDetails(src: UpdateDetails) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4233759854, 32);
        b_0.storeStringRefTail(src.expertise);
        b_0.storeUint(src.fees, 32);
        b_0.storeStringRefTail(src.telegram_id);
    };
}

export function loadUpdateDetails(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4233759854) { throw Error('Invalid prefix'); }
    let _expertise = sc_0.loadStringRefTail();
    let _fees = sc_0.loadUintBig(32);
    let _telegram_id = sc_0.loadStringRefTail();
    return { $$type: 'UpdateDetails' as const, expertise: _expertise, fees: _fees, telegram_id: _telegram_id };
}

function loadTupleUpdateDetails(source: TupleReader) {
    let _expertise = source.readString();
    let _fees = source.readBigNumber();
    let _telegram_id = source.readString();
    return { $$type: 'UpdateDetails' as const, expertise: _expertise, fees: _fees, telegram_id: _telegram_id };
}

function storeTupleUpdateDetails(source: UpdateDetails) {
    let builder = new TupleBuilder();
    builder.writeString(source.expertise);
    builder.writeNumber(source.fees);
    builder.writeString(source.telegram_id);
    return builder.build();
}

function dictValueParserUpdateDetails(): DictionaryValue<UpdateDetails> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUpdateDetails(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateDetails(src.loadRef().beginParse());
        }
    }
}

export type Astrologer = {
    $$type: 'Astrologer';
    owner: Address;
    expertise: string;
    fees: bigint;
    telegram_id: string;
}

export function storeAstrologer(src: Astrologer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeStringRefTail(src.expertise);
        b_0.storeUint(src.fees, 32);
        b_0.storeStringRefTail(src.telegram_id);
    };
}

export function loadAstrologer(slice: Slice) {
    let sc_0 = slice;
    let _owner = sc_0.loadAddress();
    let _expertise = sc_0.loadStringRefTail();
    let _fees = sc_0.loadUintBig(32);
    let _telegram_id = sc_0.loadStringRefTail();
    return { $$type: 'Astrologer' as const, owner: _owner, expertise: _expertise, fees: _fees, telegram_id: _telegram_id };
}

function loadTupleAstrologer(source: TupleReader) {
    let _owner = source.readAddress();
    let _expertise = source.readString();
    let _fees = source.readBigNumber();
    let _telegram_id = source.readString();
    return { $$type: 'Astrologer' as const, owner: _owner, expertise: _expertise, fees: _fees, telegram_id: _telegram_id };
}

function storeTupleAstrologer(source: Astrologer) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeString(source.expertise);
    builder.writeNumber(source.fees);
    builder.writeString(source.telegram_id);
    return builder.build();
}

function dictValueParserAstrologer(): DictionaryValue<Astrologer> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeAstrologer(src)).endCell());
        },
        parse: (src) => {
            return loadAstrologer(src.loadRef().beginParse());
        }
    }
}

export type AddAstrologer = {
    $$type: 'AddAstrologer';
    expertise: string;
    fees: bigint;
    telgram_id: string;
}

export function storeAddAstrologer(src: AddAstrologer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(442795836, 32);
        b_0.storeStringRefTail(src.expertise);
        b_0.storeUint(src.fees, 32);
        b_0.storeStringRefTail(src.telgram_id);
    };
}

export function loadAddAstrologer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 442795836) { throw Error('Invalid prefix'); }
    let _expertise = sc_0.loadStringRefTail();
    let _fees = sc_0.loadUintBig(32);
    let _telgram_id = sc_0.loadStringRefTail();
    return { $$type: 'AddAstrologer' as const, expertise: _expertise, fees: _fees, telgram_id: _telgram_id };
}

function loadTupleAddAstrologer(source: TupleReader) {
    let _expertise = source.readString();
    let _fees = source.readBigNumber();
    let _telgram_id = source.readString();
    return { $$type: 'AddAstrologer' as const, expertise: _expertise, fees: _fees, telgram_id: _telgram_id };
}

function storeTupleAddAstrologer(source: AddAstrologer) {
    let builder = new TupleBuilder();
    builder.writeString(source.expertise);
    builder.writeNumber(source.fees);
    builder.writeString(source.telgram_id);
    return builder.build();
}

function dictValueParserAddAstrologer(): DictionaryValue<AddAstrologer> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeAddAstrologer(src)).endCell());
        },
        parse: (src) => {
            return loadAddAstrologer(src.loadRef().beginParse());
        }
    }
}

export type RequestChat = {
    $$type: 'RequestChat';
    astrologer_address: Address;
    client_telegram_id: string;
}

export function storeRequestChat(src: RequestChat) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3095819024, 32);
        b_0.storeAddress(src.astrologer_address);
        b_0.storeStringRefTail(src.client_telegram_id);
    };
}

export function loadRequestChat(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3095819024) { throw Error('Invalid prefix'); }
    let _astrologer_address = sc_0.loadAddress();
    let _client_telegram_id = sc_0.loadStringRefTail();
    return { $$type: 'RequestChat' as const, astrologer_address: _astrologer_address, client_telegram_id: _client_telegram_id };
}

function loadTupleRequestChat(source: TupleReader) {
    let _astrologer_address = source.readAddress();
    let _client_telegram_id = source.readString();
    return { $$type: 'RequestChat' as const, astrologer_address: _astrologer_address, client_telegram_id: _client_telegram_id };
}

function storeTupleRequestChat(source: RequestChat) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.astrologer_address);
    builder.writeString(source.client_telegram_id);
    return builder.build();
}

function dictValueParserRequestChat(): DictionaryValue<RequestChat> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRequestChat(src)).endCell());
        },
        parse: (src) => {
            return loadRequestChat(src.loadRef().beginParse());
        }
    }
}

 type AstrotelMainContract_init_args = {
    $$type: 'AstrotelMainContract_init_args';
    id: bigint;
}

function initAstrotelMainContract_init_args(src: AstrotelMainContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.id, 257);
    };
}

async function AstrotelMainContract_init(id: bigint) {
    const __code = Cell.fromBase64('te6ccgECFQEABFUAART/APSkE/S88sgLAQIBYgIDAujQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFNs88uCCyPhDAcx/AcoAVUBQRcsHWCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFvQA9ADLH8ntVBAEAgFYDA0C3AGSMH/gcCHXScIflTAg1wsf3iCCEBpkhzy6jp4w0x8BghAaZIc8uvLggdQB0AHTH9QB0EMwbBPbPH/gghCUapi2uo6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwBQYC9IIAjpaBAQv4QihZgQEBQTP0Cm+hlAHXADCSW23icCFukltwkbri8vT4Q/hC2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiCEAX14QBQZXIFBwgBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CgCUAdD0BDBtAYFF/AGAEPQPb6Hy4IcBgUX8IgKAEPQXyAHI9ADJAcxwAcoAWCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskCpMhVIIIQGmSHPFAEyx/IUAPPFslYzMsfyFjPFskBzMkQNV4xVGRgfwYFBEEz2zwCpIEBC/hCIhA3gQEBIW6VW1n0WTCYyAHPAEEz9EHiAoEBAQIKCQCocFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgkEDQBIG6VMFn0WjCUQTP0FOJYAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAsAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCASAODwIBSBMUAhG1MBtnm2eNijAQEQCVt3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwThOy6ctWadluZ0HSzbKM3RSQAZztRNDUAfhj0gABjizTB/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB9AT0BNMfVUBsFeD4KNcLCoMJuvLgiYEBAdcAAQHR2zwSAAIhAAxtbfhCWXAAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWVA0andTa1VnU21GNms2Mjd5clp2S3VxRTdnQ0hRY0hoS1VwWXlSQzJpaDKCA=');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initAstrotelMainContract_init_args({ $$type: 'AstrotelMainContract_init_args', id })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const AstrotelMainContract_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    23565: { message: `Only owner can account details` },
    36502: { message: `Address already registered` },
}

const AstrotelMainContract_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"UpdateDetails","header":4233759854,"fields":[{"name":"expertise","type":{"kind":"simple","type":"string","optional":false}},{"name":"fees","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"telegram_id","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"Astrologer","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"expertise","type":{"kind":"simple","type":"string","optional":false}},{"name":"fees","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"telegram_id","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"AddAstrologer","header":442795836,"fields":[{"name":"expertise","type":{"kind":"simple","type":"string","optional":false}},{"name":"fees","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"telgram_id","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"RequestChat","header":3095819024,"fields":[{"name":"astrologer_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"client_telegram_id","type":{"kind":"simple","type":"string","optional":false}}]},
]

const AstrotelMainContract_getters: ABIGetter[] = [
    {"name":"getAllAstrologers","arguments":[],"returnType":{"kind":"dict","key":"int","value":"address"}},
]

const AstrotelMainContract_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"AddAstrologer"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class AstrotelMainContract implements Contract {
    
    static async init(id: bigint) {
        return await AstrotelMainContract_init(id);
    }
    
    static async fromInit(id: bigint) {
        const init = await AstrotelMainContract_init(id);
        const address = contractAddress(0, init);
        return new AstrotelMainContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new AstrotelMainContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  AstrotelMainContract_types,
        getters: AstrotelMainContract_getters,
        receivers: AstrotelMainContract_receivers,
        errors: AstrotelMainContract_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: AddAstrologer | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AddAstrologer') {
            body = beginCell().store(storeAddAstrologer(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetAllAstrologers(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getAllAstrologers', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
        return result;
    }
    
}