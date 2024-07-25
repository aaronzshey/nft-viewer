# nft-viewer

A really basic UI to go with my repository eth-sandbox.
Because of the way Hardhat and React work, for a website to display on-chain details, you pretty much need to write to a file and read it with React.  I'm not interested in spending more time with the file system, so I'm concluding this project here.



### How does it work?
The website displays a single NFT, minted in the backend on a local Hardhat node.  I was considering making a search function, but I really don't like those and decided not to.  Several transactions are mimicked in the backend, the transaction data is stored via IPFS, and then displayed to you.

### What's in store

A search function similar to a block explorer (though more limited in scope) would be interesting.  Additionally, adding verification using the unused "numOfOwners" variable in the contract by searching block logs would also be interesting.
