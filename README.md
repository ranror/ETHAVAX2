# Pizza Contract

## Description
The Pizza contract allows users to buy pizza by sending ether along with a message. Each purchase creates a memo containing the buyer's name, message, timestamp, and address.

## Features
- Buying pizza by sending ether and leaving a message.
- Retrieving all memos containing purchase information.

## Usage

### Contract Deployment
Deploy the Pizza contract.

### Buying Pizza
Call the `buypizza` function, providing the buyer's name and message as parameters. Ensure that the transaction includes a non-zero amount of ether.

### Retrieving Memos
Call the `getMemos` function to retrieve an array of all memos containing purchase information.

## Contract Version
- Solidity version: ^0.8.25

## License
This contract is not specified with a license. Make sure to specify the appropriate license if you intend to use or modify this contract.

