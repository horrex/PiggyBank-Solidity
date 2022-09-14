# Piggy Bank (Solidity)

Piggy Bank is a set of the following interacting contracts:
* Master contract that is the core of the system
* Factories that are able to produce Piggy Banks of their specific type and notify Master about each new creation
* Piggy Banks of various types created by their Factories

The idea is to make it possible to introduce new Piggy Bank types without need to affect source code of contracts that were already deployed. In order to achieve that, it's enough to develop and deploy a new Factory contract that is able to create Piggy Banks of a new type, and register the new Factory in the Master.

## Hardhat

Some Hardhat tasks:

```shell
npx hardhat help
npx hardhat clean
npx hardhat compile
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
