### Chaincode for land ownership transfer
The effective chaincode is located in ./lib/assetTransfer.js
There are 2 versions for the assertTransfer.js file:
1. assetTransferGeoJSON.js: with the GeoJSON file integrated as a payload
2. assetTransferHash.js : with the GeoJSON's hash stored in the blockchain

### In order to test the chaincode:
"assetTransfer.js" is the only exported file, so if you want to test "assetTransferHash.js"
copy the content of "assetTransferHash.js" in "assetTransfer.js"
Do the same process to deploy "assetTransferGeoJSON.js"
