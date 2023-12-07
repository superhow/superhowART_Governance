# superhowART - NFT Governance

## Introduction

`superhowART` is a blockchain-based project focused on creating and managing Non-Fungible Tokens (NFTs) representing artwork. This project uses Ethereum blockchain technology to facilitate the tokenization of art, ensuring secure, transparent, and decentralized governance of digital art assets.

## Features

- **Artwork Tokenization:** Convert physical and digital artworks into NFTs.
- **Smart Contract Enabled:** Utilizes Ethereum smart contracts for NFT minting and management.
- **Multi-Network Deployment:** Supports deployment on local, Mumbai, and Polygon networks.
- **ERC-721 Standard Compliance:** Ensures interoperability with the popular NFT standard for wider marketplace compatibility.

## Getting Started

### Prerequisites

- Node.js
- Yarn
- Hardhat
- An Ethereum wallet (e.g., MetaMask)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/superhow/superhowART_Governance.git

   ```

   Navigate to the project directory:
   sh
   Copy code
   cd superhowART_Governance
   Install dependencies:
   sh
   Copy code
   yarn install

## Usage

Deploy and mint NFTs on various networks:

### Local Deployment:

```
yarn deploy:local
```

Mumbai Testnet Deployment:

```
yarn deploy:mumbai
```

Polygon Mainnet Deployment:

```
yarn deploy:polygon
```

## Contract Deployment and Minting Process
- The smart contracts are deployed to the specified network.
- NFTs are minted post-deployment, showcasing the successful creation of digital art tokens.

## Release notes:

| Network  | Action                    | Status                         | Details                                                      |
|----------|---------------------------|--------------------------------|--------------------------------------------------------------|
| Mumbai   | Deployment                | Successful                     | Deployed to: 0xf49fe26f9e33217f2de8393900da6162b5900e88        |
|          | Minting                   | Successful                     | NFT minted to: 0xCaf97E2892e3D1490697E5fcc77Cdc9908089f1c   |
| Polygon  | Deployment                | Successful                     | Deployed to: 0x1baf5105f8c1534625c1d8f21573adce81261590        |
|          | Minting                   | Successful                     | NFT minted to: 0xCaf97E2892e3D1490697E5fcc77Cdc9908089f1c   |



## Contributing

Contributions are welcome. Please read the contribution guidelines for more information.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
- Email: [info@superhow.com](mailto:info@superhow.com)
- Project Repository: [superhowART Governance](https://github.com/superhow/superhowART_Governance.git)
