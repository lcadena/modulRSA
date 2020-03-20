'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bcu = require('bigint-crypto-utils');
var bc = require('bigint-conversion');

const _ONE = BigInt(1);

function _two() {
    return BigInt(2);
}

const twoModPow = function (exponent=BigInt(7), modulus = BigInt(5)) {
    return bcu.modPow(_two(), exponent, modulus)
};

/**
 * Generate the random keys of RSA
 * @param {number} bitLenght 
 */
const rsaKeyGeneration = function (bitLenght  = 3072) {
    let n, phi;

    // Generate the public modulus n = p * q
    do {
        this.p = bcu.primeSync(Math.round(bitLength / 2) + 1);
        this.q = bcu.primeSync(Math.round(bitLength / 2));
        this.n = this.p * this.q;

        phi = (this.p - _ONE) * (this.q - _ONE);
    } while (this.p === this.q || bcu.bitLenght(this.n) != bitLenght);

    let e = BigInt(65537);
    let d = bcu.modInv(this.e, this.phi);

    //Generar clave publica y privada
    const publicKey = new PublicKey(e, n);
    const privateKey = new privateKey(d, n);

};

/**
 * 
 * @param {number} m
 * @returns {bigint} 
 */
const encrypt = function (m) {
    m = bc.textToBigint(m);
    if (this.valVerify(m)) {
        console.log('Message to encrypt > n');
        return null
    } else return bcu.modPow(m, this.e, this.n)

    //hacer la verificación con la firma
};

exports.encrypt = encrypt;
exports.rsaKeyGeneration = rsaKeyGeneration;
exports.twoModPow = twoModPow;
