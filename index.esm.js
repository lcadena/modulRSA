import { modPow, bitLength, primeSync, modInv } from 'bigint-crypto-utils';
import 'bigint-conversion';

const _ONE = BigInt(1);
const e = BigInt(65537);

function _two() {
    return BigInt(2);
}

const twoModPow = function (exponent=BigInt(7), modulus = BigInt(5)) {
    return modPow(_two(), exponent, modulus)
};

/**
 * @typedef {Object} keys
 * @property {PublicKey} publicKey - a RSA public key
 * @property {PrivateKey} privateKey - the associated RSA private key
 */

/**
 * Generate the random keys of RSA
 * @param {number} bitLenght
 */
const rsaKeyGeneration = function (bitLenght  = 3072) {
    let p, q, n, phi;

    // Generate the public modulus n = p * q
    do {
        p = primeSync(Math.round(bitLenght / 2) + 1);
        q = primeSync(Math.round(bitLenght / 2));
        n = p * q;
        
    } while (p === q || bitLength(n) !== bitLenght);
    
    phi = (p - _ONE) * (q - _ONE);
    let e = BigInt(65537);
    let d = modInv(e, phi);

    //Generar clave publica y privada
    const publicKey = new PublicKey(e, n);
    const privateKey = new PrivateKey(d, publicKey);

    return {publicKey: publicKey, privateKey: privateKey}

};

/**
 * 
 * RSA publicKey class
 * 
 */
const PublicKey = class PublicKey {
    /**
     * 
     * @param {bigint | number} e public exponent
     * @param {bigint | number} n public modulus
     */
    constructor(e, n) {
        this.e = BigInt(e);
        this.n = BigInt(n);
    }
    
    /**
     * 
     * @param {bigint} m messge to encrypt
     * @returns {bigint} message encrypted
     */
    encrypt(m) {
        return modPow(m, this.e, this.n)
    }

    /**
     * 
     * @param {bigint} s signed message
     * @returns {bigint} m bigint message
     */
    verify(s) {
        return modPow(s, this.e, this.n)
    }
    
};

/**
 * 
 * RSA privateKey class
 * 
 */
const PrivateKey = class PrivateKey {
    /**
     * 
     * @param {bigint | number} d private exponent
     * @param {PublicKey} publicKey
     */
    constructor(d, publicKey) {
        this.d = BigInt(d);
        this.publicKey = publicKey;
    }

    /**
     * @param {bigint} c sign message
     * @returns {bigint} m bigint message
     */
    decrypt(c) {
        return modPow(c, this.d, this.publicKey.n);
    }
    
    /**
     * 
     * @param {bigint} m 
     * @returns {bigint} s
     */
    sign(m) {
        return modPow(m, this.d, this.publicKey.n)
    }

};

export { PrivateKey, PublicKey, rsaKeyGeneration, twoModPow };
