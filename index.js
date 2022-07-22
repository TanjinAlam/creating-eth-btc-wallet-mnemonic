const ethers = require('ethers')
const randomMnemonic = ethers.Wallet.createRandom().mnemonic;
console.log('randomMnemonic',randomMnemonic)
const wallet = ethers.Wallet.fromMnemonic(randomMnemonic.phrase);
console.log('wallet',wallet._signingKey())
console.log('wallet',wallet.address)

var Mnemonic = require("bitcore-mnemonic");
var bitcore = require("bitcore-lib");

var code = new Mnemonic(Mnemonic.Words.ENGLISH);
var mnemonic = code.toString();
var data = codeToDetails(code);
console.log("mnemonic", mnemonic);
console.log("mnemonic", data);

function codeToDetails(code) {
  var xpriv = code.toHDPrivateKey(bitcore.Networks.livenet);
  var derived = xpriv.derive("m/0'");
  var privateKey = derived.privateKey;
  var pk = new bitcore.PrivateKey(
    privateKey.toString(),
    bitcore.Networks.livenet
  );

  var privateKeyStr = pk.toString();
  var publicKey = new bitcore.PublicKey(pk);
  var publicKeyStr = publicKey.toString();
  var address = new bitcore.Address(publicKey, bitcore.Networks.testnet);
  return {
    privateKeyStr: privateKeyStr,
    publicKeyStr: publicKeyStr,
    address: address,
  };
}
