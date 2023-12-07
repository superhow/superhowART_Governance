import { ethers } from "hardhat";

async function main() {
    // Getting the contract factory
    const SuperhowArtCertificate = await ethers.getContractFactory("superhowArtCertificate");

    // Deploy the contract
    const superhowArtCertificate = await SuperhowArtCertificate.deploy();
    await superhowArtCertificate.deployed();

    console.log("superhowArtCertificate deployed to:", superhowArtCertificate.address);

    
    const adminAddress: string = "0x";
    const minterAddress: string = "0x";

    // Initialize the contract
    await superhowArtCertificate.initialize(adminAddress, minterAddress);
    console.log("superhowArtCertificate initialized");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});