'use strict';

import * as bcu from 'bigint-crypto-utils';
import * as bc from 'bigint-conversion';

const _ONE = BigInt(1);

function _two() {
    return BigInt(2);
}

export const twoModPow = function (exponent=BigInt(7), modulus = BigInt(5)) {
    return bcu.modPow(_two(), exponent, modulus)
}

/**
 * Generate the random keys of RSA
 * @param {number} bitLenght 
 */
export const rsaKeyGeneration = function (bitLenght  = 1024) {
    let p, q, n, phi;

    // Generate the public modulus n = p * q
    do {
        this.p = bcu.primeSync(Math.round(bitLength / 2) + 1)
        this.q = bcu.primeSync(Math.round(bitLength / 2))
        this.n = this.p * this.q

        phi = (this.p - _ONE) * (this.q - _ONE);
    } while (this.p === this.q || bcu.bitLenght(this.n) != bitLenght);

    let e = BigInt(1024)
    let d = bcu.modInv(this.e, this.phi)

    //Generar clave publica y privada
    const publicKey = new PublicKey(e, n)
    const privateKey = new PrivateKey(d, publicKey)

    return {publicKey: publicKey, privateKey: privateKey}

};

/**
 * 
 * RSA publicKey class
 * 
 */
export const publicKey = class PublicKey {
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
     * @returns {bigint|null} message encrypted
     */
    encrypt(m) {
        return bcu.modPow(m, this.e, this.n)
    }

    /**
     * 
     * @param {binint} s signed message
     * @returns {bigint} m bigint message
     */
    verify(s) {
        return bcu.modPow(s, this.e, this.n)
    }
    
    //hacer la verificación con la firma
};

/**
 * 
 * RSA privateKey class
 * 
 */
export const privateKey = class PrivateKey {
    /**
     * 
     * @param {bigint | number} d private exponent
     * @param {publicKey} publicKey
     */
    constructor(d, publicKey) {
        this.d = BigInt(d);
        this.publicKey = publicKey;
    }

    /**
     * @param {binint} c signemessage
     * @returns {bigint} m bigint message
     */
    decrypt(c) {
        return bcu.modPow(c, this.d, this.publicKey.n);
    }

    sign() {
        return bcu.modPow(m, this.d, this.publicKey.n)
    }

};