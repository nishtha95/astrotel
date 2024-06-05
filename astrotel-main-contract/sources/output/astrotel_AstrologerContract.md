# TACT Compilation Report
Contract: AstrologerContract
BOC Size: 618 bytes

# Types
Total Types: 10

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## UpdateDetails
TLB: `update_details#fc5a0c6e expertise:^string fees:uint32 telegram_id:^string = UpdateDetails`
Signature: `UpdateDetails{expertise:^string,fees:uint32,telegram_id:^string}`

## Astrologer
TLB: `_ owner:address expertise:^string fees:uint32 telegram_id:^string = Astrologer`
Signature: `Astrologer{owner:address,expertise:^string,fees:uint32,telegram_id:^string}`

## AddAstrologer
TLB: `add_astrologer#a625e4e9 expertise:^string fees:uint32 telegram_id:^string = AddAstrologer`
Signature: `AddAstrologer{expertise:^string,fees:uint32,telegram_id:^string}`

## RequestChat
TLB: `request_chat#b8867310 astrologer_address:address client_telegram_id:^string = RequestChat`
Signature: `RequestChat{astrologer_address:address,client_telegram_id:^string}`

# Get Methods
Total Get Methods: 1

## getAccountDetails

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
23565: Only owner can account details
36502: Address already registered