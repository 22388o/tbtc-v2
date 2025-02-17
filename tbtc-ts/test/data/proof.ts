import {
  Proof,
  RawTransaction,
  Transaction,
  TransactionMerkleBranch,
} from "../../src/bitcoin"

/**
 * Represents a set of data used for given proof scenario.
 */
export interface ProofTestData {
  requiredConfirmations: number
  bitcoinChainData: {
    transaction: Transaction
    rawTransaction: RawTransaction
    accumulatedTxConfirmations: number
    latestBlockHeight: number
    headersChain: string
    transactionMerkleBranch: TransactionMerkleBranch
  }
  expectedProof: Proof & Transaction
}

/**
 * Test data that is based on a Bitcoin testnet transaction with a single input
 * https://live.blockcypher.com/btc-testnet/tx/44c568bc0eac07a2a9c2b46829be5b5d46e7d00e17bfb613f506a75ccf86a473/
 */
export const singleInputProofTestData: ProofTestData = {
  requiredConfirmations: 6,
  bitcoinChainData: {
    transaction: {
      transactionHash:
        "44c568bc0eac07a2a9c2b46829be5b5d46e7d00e17bfb613f506a75ccf86a473",
      inputs: [
        {
          transactionHash:
            "8ee67b585eeb682bf6907ea311282540ee53edf605e0f09757226a4dc3e72a67",
          outputIndex: 0,
          scriptSig: {
            asm: "",
            hex: "",
          },
        },
      ],
      outputs: [
        {
          outputIndex: 0,
          value: 8400,
          scriptPubKey: {
            asm: "OP_0 8db50eb52063ea9d98b3eac91489a90f738986f6",
            hex: "00148db50eb52063ea9d98b3eac91489a90f738986f6",
            type: "WITNESSPUBKEYHASH",
            reqSigs: 1,
            addresses: ["tb1q3k6sadfqv04fmx9naty3fzdfpaecnphkfm3cf3"],
          },
        },
      ],
    },
    rawTransaction: {
      transactionHex:
        "01000000000101672ae7c34d6a225797f0e005f6ed53ee40252811a37e90f62b" +
        "68eb5e587be68e0000000000ffffffff01d0200000000000001600148db50eb5" +
        "2063ea9d98b3eac91489a90f738986f603483045022100b12afadf68ad978160" +
        "0f065e0b09e22058ca2293aa86ac38add3ca7cfb01b3b7022009ecce0c1c3ebd" +
        "26569c6b0d60e15b4675860737487d1b7c782439acf4709bdf012103989d253b" +
        "17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d95c14934b" +
        "98637ca318a4d6e7ca6ffd1690b8e77df6377508f9f0c90d000395237576a914" +
        "8db50eb52063ea9d98b3eac91489a90f738986f68763ac6776a914e257eccafb" +
        "c07c381642ce6e7e55120fb077fbed8804e0250162b175ac6800000000",
    },
    accumulatedTxConfirmations: 50,
    latestBlockHeight: 2164335,
    headersChain:
      "04e00020732d33ea35d62f9488cff5d64c0d702afd5d88092230ddfcc45f00000" +
      "0000000196283ba24a3f5bad91ef95338aa6d214c934f2c1392e39a0447377fe5" +
      "b0a04be7c01c62ffff001df0be0a27040000206c318b23e5c42e86ef3edd080e5" +
      "0c9c233b9f0b6d186bd57e41300000000000021fb8cda200bff4fec1338d85a1e" +
      "005bb4d729d908a7c5c232ecd0713231d0445ec11c62ed3e031a7b43466e04e00" +
      "020f416898d79d4a46fa6c54f190ad3d502bad8aa3afdec0714aa000000000000" +
      "000603a5cc15e5906cb4eac9f747869fdc9be856e76a110b4f87da90db20f9fbe" +
      "28fc11c62ed3e031a15dfc3db04000020642125b3910fdaead521b57955e28893" +
      "d89f8ce7fd3ba1dd6d01000000000000f9e17a266a2267ee02d5ab82a75a76805" +
      "db821a13abd2e80e0950d883311e5355dc21c62ed3e031adefc02c4040000205b" +
      "6de55e069be71b21a62cd140dc7031225f7258dc758f19ea01000000000000139" +
      "966d27d9ed0c0c1ed9162c2fea2ccf0ba212706f6bc421d0a2b6211de040d1ac4" +
      "1c62ed3e031a4726538f04e000208475e15e0314635d32abf04c761fee528d6a3" +
      "f2db3b3d13798000000000000002a3fa06fecd9dd4bf2e25e22a95d4f65435d5c" +
      "5b42bcf498b4e756f9f4ea67cea1c51c62ed3e031a9d7bf3ac000000203f16d45" +
      "0c51853a4cd9569d225028aa08ab6139eee31f4f67a010000000000004cda79bc" +
      "48b970de2fb29c3f38626eb9d70d8bae7b92aad09f2a0ad2d2f334d35bca1c62f" +
      "fff001d048fc217",
    transactionMerkleBranch: {
      blockHeight: 2164152,
      merkle: [
        "7bffaff2c61291861276da41cf6c3842fad555af97dd1ff98ce41c61a0072b12",
        "7a5876ddee8e553ff0650c739b2ec66e192d8afe5fc0ce763bf810457aea330c",
        "2d17b67d5519bc39fbef8650afd3fe11fdfb3f471434a5b551cfa9a41441901f",
        "1376d102b677591ce2fa62553e2a57ab5919022b03036521facfce93a0338026",
        "43ad3aadad675e398c59eb846a8e037cf7de8ba3b38f3388175f25d84b777c80",
        "6969c227128793b3c9e99c05f20fb9b91fdb73458fd53151b5fe29d30c10cf9a",
        "0a76bc4d8c3d532357be4d188ba89e9ae364a7d3c365e690e3cb07359b86129c",
      ],
      position: 11,
    },
  },
  expectedProof: {
    transactionHash:
      "44c568bc0eac07a2a9c2b46829be5b5d46e7d00e17bfb613f506a75ccf86a473",
    inputs: [
      {
        transactionHash:
          "8ee67b585eeb682bf6907ea311282540ee53edf605e0f09757226a4dc3e72a67",
        outputIndex: 0,
        scriptSig: {
          asm: "",
          hex: "",
        },
      },
    ],
    outputs: [
      {
        outputIndex: 0,
        value: 8400,
        scriptPubKey: {
          asm: "OP_0 8db50eb52063ea9d98b3eac91489a90f738986f6",
          hex: "00148db50eb52063ea9d98b3eac91489a90f738986f6",
          type: "WITNESSPUBKEYHASH",
          reqSigs: 1,
          addresses: ["tb1q3k6sadfqv04fmx9naty3fzdfpaecnphkfm3cf3"],
        },
      },
    ],
    merkleProof:
      "122b07a0611ce48cf91fdd97af55d5fa42386ccf41da7612869112c6f2afff7b0c" +
      "33ea7a4510f83b76cec05ffe8a2d196ec62e9b730c65f03f558eeedd76587a1f90" +
      "4114a4a9cf51b5a53414473ffbfd11fed3af5086effb39bc19557db6172d268033" +
      "a093cecffa216503032b021959ab572a3e5562fae21c5977b602d17613807c774b" +
      "d8255f1788338fb3a38bdef77c038e6a84eb598c395e67adad3aad439acf100cd3" +
      "29feb55131d58f4573db1fb9b90ff2059ce9c9b393871227c269699c12869b3507" +
      "cbe390e665c3d3a764e39a9ea88b184dbe5723533d8c4dbc760a",
    txIndexInBlock: 11,
    bitcoinHeaders:
      "04e00020732d33ea35d62f9488cff5d64c0d702afd5d88092230ddfcc45f000000" +
      "000000196283ba24a3f5bad91ef95338aa6d214c934f2c1392e39a0447377fe5b0" +
      "a04be7c01c62ffff001df0be0a27040000206c318b23e5c42e86ef3edd080e50c9" +
      "c233b9f0b6d186bd57e41300000000000021fb8cda200bff4fec1338d85a1e005b" +
      "b4d729d908a7c5c232ecd0713231d0445ec11c62ed3e031a7b43466e04e00020f4" +
      "16898d79d4a46fa6c54f190ad3d502bad8aa3afdec0714aa000000000000000603" +
      "a5cc15e5906cb4eac9f747869fdc9be856e76a110b4f87da90db20f9fbe28fc11c" +
      "62ed3e031a15dfc3db04000020642125b3910fdaead521b57955e28893d89f8ce7" +
      "fd3ba1dd6d01000000000000f9e17a266a2267ee02d5ab82a75a76805db821a13a" +
      "bd2e80e0950d883311e5355dc21c62ed3e031adefc02c4040000205b6de55e069b" +
      "e71b21a62cd140dc7031225f7258dc758f19ea01000000000000139966d27d9ed0" +
      "c0c1ed9162c2fea2ccf0ba212706f6bc421d0a2b6211de040d1ac41c62ed3e031a" +
      "4726538f04e000208475e15e0314635d32abf04c761fee528d6a3f2db3b3d13798" +
      "000000000000002a3fa06fecd9dd4bf2e25e22a95d4f65435d5c5b42bcf498b4e7" +
      "56f9f4ea67cea1c51c62ed3e031a9d7bf3ac000000203f16d450c51853a4cd9569" +
      "d225028aa08ab6139eee31f4f67a010000000000004cda79bc48b970de2fb29c3f" +
      "38626eb9d70d8bae7b92aad09f2a0ad2d2f334d35bca1c62ffff001d048fc217",
  },
}

/**
 * Test data that is based on a Bitcoin testnet transaction with multiple inputs
 * https://live.blockcypher.com/btc-testnet/tx/5083822ed0b8d0bc661362b778e666cb572ff6d5152193992dd69d3207995753/
 */
export const multipleInputsProofTestData: ProofTestData = {
  requiredConfirmations: 6,

  bitcoinChainData: {
    transaction: {
      transactionHash:
        "5083822ed0b8d0bc661362b778e666cb572ff6d5152193992dd69d3207995753",
      inputs: [
        {
          transactionHash:
            "ea4d9e45f8c1b8a187c007f36ba1e9b201e8511182c7083c4edcaf9325b2998f",
          outputIndex: 0,
          scriptSig: { asm: "", hex: "" },
        },
        {
          transactionHash:
            "c844ff4c1781c884bb5e80392398b81b984d7106367ae16675f132bd1a7f33fd",
          outputIndex: 0,
          scriptSig: { asm: "", hex: "" },
        },
        {
          transactionHash:
            "44c568bc0eac07a2a9c2b46829be5b5d46e7d00e17bfb613f506a75ccf86a473",
          outputIndex: 0,
          scriptSig: { asm: "", hex: "" },
        },
        {
          transactionHash:
            "f548c00e464764e112826450a00cf005ca771a6108a629b559b6c60a519e4378",
          outputIndex: 0,
          scriptSig: { asm: "", hex: "" },
        },
      ],
      outputs: [
        {
          outputIndex: 0,
          value: 39800,
          scriptPubKey: {
            asm: "OP_0 8db50eb52063ea9d98b3eac91489a90f738986f6",
            hex: "00148db50eb52063ea9d98b3eac91489a90f738986f6",
            type: "WITNESSPUBKEYHASH",
            reqSigs: 1,
            addresses: ["tb1q3k6sadfqv04fmx9naty3fzdfpaecnphkfm3cf3"],
          },
        },
      ],
    },
    accumulatedTxConfirmations: 50,
    rawTransaction: {
      transactionHex:
        "010000000001048f99b22593afdc4e3c08c7821151e801b2e9a16bf307c087a1" +
        "b8c1f8459e4dea00000000c9483045022100bb54f2717647b2f2c5370b5f12b5" +
        "5e27f97a6e2009dcd21fca08527df949e1fd022058bc3cd1dd739b89b9e4cda4" +
        "3b13bc59cfb15663b80cbfa3edb4539107bba35d012103989d253b17a6a0f418" +
        "38b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d94c5c14934b98637ca3" +
        "18a4d6e7ca6ffd1690b8e77df6377508f9f0c90d000395237576a9148db50eb5" +
        "2063ea9d98b3eac91489a90f738986f68763ac6776a914e257eccafbc07c3816" +
        "42ce6e7e55120fb077fbed8804e0250162b175ac68fffffffffd337f1abd32f1" +
        "7566e17a3606714d981bb8982339805ebb84c881174cff44c80000000000ffff" +
        "ffff73a486cf5ca706f513b6bf170ed0e7465d5bbe2968b4c2a9a207ac0ebc68" +
        "c5440000000000ffffffff78439e510ac6b659b529a608611a77ca05f00ca050" +
        "648212e16447460ec048f50000000000ffffffff01789b000000000000160014" +
        "8db50eb52063ea9d98b3eac91489a90f738986f6000347304402205199b28a3b" +
        "4a81579fe4ea99925380b298e28ca38a3b14e50f12daec87945449022065c503" +
        "4f96ed785aa10b3817c501ecc59f1abf329fad07229170c3dd5f53bc91012103" +
        "989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d9" +
        "5c14934b98637ca318a4d6e7ca6ffd1690b8e77df6377508f9f0c90d00039523" +
        "7576a9148db50eb52063ea9d98b3eac91489a90f738986f68763ac6776a914e2" +
        "57eccafbc07c381642ce6e7e55120fb077fbed8804e0250162b175ac68024730" +
        "4402201b2a3b03a1088c6bbc406e96a6017e52ce86c0897541c9bb59d94179da" +
        "a84f8702204b1e665bd43bbe968e1d89b15c5f0b5551011fa4caf2fbb7eb22d8" +
        "9a38fad04d012103989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564" +
        "da4cc29dcf8581d903473044022007ce54f21a2f5233bd046c4600bcb1c874aa" +
        "f9053b1d7ee7d47eb134b695fbed022002e8684548b7a3cdaecb8c6393244c39" +
        "6c15e1ebaedb53e2fcc6c5cea7310490012103989d253b17a6a0f41838b84ff0" +
        "d20e8898f9d7b1a98f2564da4cc29dcf8581d95c14934b98637ca318a4d6e7ca" +
        "6ffd1690b8e77df6377508f9f0c90d000395237576a9148db50eb52063ea9d98" +
        "b3eac91489a90f738986f68763ac6776a914e257eccafbc07c381642ce6e7e55" +
        "120fb077fbed8804e0250162b175ac6800000000",
    },
    latestBlockHeight: 2164335,
    headersChain:
      "04000020642125b3910fdaead521b57955e28893d89f8ce7fd3ba1dd6d0100000" +
      "0000000f9e17a266a2267ee02d5ab82a75a76805db821a13abd2e80e0950d8833" +
      "11e5355dc21c62ed3e031adefc02c4040000205b6de55e069be71b21a62cd140d" +
      "c7031225f7258dc758f19ea01000000000000139966d27d9ed0c0c1ed9162c2fe" +
      "a2ccf0ba212706f6bc421d0a2b6211de040d1ac41c62ed3e031a4726538f04e00" +
      "0208475e15e0314635d32abf04c761fee528d6a3f2db3b3d13798000000000000" +
      "002a3fa06fecd9dd4bf2e25e22a95d4f65435d5c5b42bcf498b4e756f9f4ea67c" +
      "ea1c51c62ed3e031a9d7bf3ac000000203f16d450c51853a4cd9569d225028aa0" +
      "8ab6139eee31f4f67a010000000000004cda79bc48b970de2fb29c3f38626eb9d" +
      "70d8bae7b92aad09f2a0ad2d2f334d35bca1c62ffff001d048fc2170000002068" +
      "7e487acbf5eb375c631a15127fbf7d80ca084461e7f26f92c509b6000000006fa" +
      "d33bd7c8d651bd6dc86c286f0a99340b668f019b9e97a59fd392c36c4f46910cf" +
      "1c62ffff001d407facaa0400002040f4c65610f26f06c4365305b956934501713" +
      "e01c2fc08b919e0bc1b00000000e401a6a884ba015e83c6fe2cd363e877ef0398" +
      "2e81eaff4e2c95af1e23a670f407d41c62ffff001d58c64d180400002038854bd" +
      "62f802e1de14653eceeb7a80290f5e99b8e9db517e36f000000000000a494b803" +
      "4039e7855b75563ab83c9410dd67e89bb58e6cd93b85290a885dd749f4d61c62e" +
      "d3e031ad9a83746",
    transactionMerkleBranch: {
      blockHeight: 2164155,
      merkle: [
        "322cfdf3ca53cf597b6f08e93489b9a1cfa1f5958c3657474b0d8f5efb5ca92e",
        "82aedffef6c9670375effee25740fecce143d21f8abf98307235b7ebd31ad4d1",
        "837fa041b9a8f5b42353fdf8981e3b7a78c61858852e43058bfe6cacf9eab5a3",
        "a51612d3f3f857e95803a4d86aa6dbbe2e756dc2ed6cc0e04630e8baf597e377",
        "a00501650e0c4f8a1e07a5d6d5bc5e75e4c75de61a65f0410cce354bbae78686",
      ],
      position: 6,
    },
  },
  expectedProof: {
    transactionHash:
      "5083822ed0b8d0bc661362b778e666cb572ff6d5152193992dd69d3207995753",
    inputs: [
      {
        transactionHash:
          "ea4d9e45f8c1b8a187c007f36ba1e9b201e8511182c7083c4edcaf9325b2998f",
        outputIndex: 0,
        scriptSig: { asm: "", hex: "" },
      },
      {
        transactionHash:
          "c844ff4c1781c884bb5e80392398b81b984d7106367ae16675f132bd1a7f33fd",
        outputIndex: 0,
        scriptSig: { asm: "", hex: "" },
      },
      {
        transactionHash:
          "44c568bc0eac07a2a9c2b46829be5b5d46e7d00e17bfb613f506a75ccf86a473",
        outputIndex: 0,
        scriptSig: { asm: "", hex: "" },
      },
      {
        transactionHash:
          "f548c00e464764e112826450a00cf005ca771a6108a629b559b6c60a519e4378",
        outputIndex: 0,
        scriptSig: { asm: "", hex: "" },
      },
    ],
    outputs: [
      {
        outputIndex: 0,
        value: 39800,
        scriptPubKey: {
          asm: "OP_0 8db50eb52063ea9d98b3eac91489a90f738986f6",
          hex: "00148db50eb52063ea9d98b3eac91489a90f738986f6",
          type: "WITNESSPUBKEYHASH",
          reqSigs: 1,
          addresses: ["tb1q3k6sadfqv04fmx9naty3fzdfpaecnphkfm3cf3"],
        },
      },
    ],
    merkleProof:
      "2ea95cfb5e8f0d4b4757368c95f5a1cfa1b98934e9086f7b59cf53caf3fd2c32d1d" +
      "41ad3ebb735723098bf8a1fd243e1ccfe4057e2feef750367c9f6fedfae82a3b5ea" +
      "f9ac6cfe8b05432e855818c6787a3b1e98f8fd5323b4f5a8b941a07f8377e397f5b" +
      "ae83046e0c06cedc26d752ebedba66ad8a40358e957f8f3d31216a58686e7ba4b35" +
      "ce0c41f0651ae65dc7e4755ebcd5d6a5071e8a4f0c0e650105a0",
    txIndexInBlock: 6,
    bitcoinHeaders:
      "04000020642125b3910fdaead521b57955e28893d89f8ce7fd3ba1dd6d010000000" +
      "00000f9e17a266a2267ee02d5ab82a75a76805db821a13abd2e80e0950d883311e5" +
      "355dc21c62ed3e031adefc02c4040000205b6de55e069be71b21a62cd140dc70312" +
      "25f7258dc758f19ea01000000000000139966d27d9ed0c0c1ed9162c2fea2ccf0ba" +
      "212706f6bc421d0a2b6211de040d1ac41c62ed3e031a4726538f04e000208475e15" +
      "e0314635d32abf04c761fee528d6a3f2db3b3d13798000000000000002a3fa06fec" +
      "d9dd4bf2e25e22a95d4f65435d5c5b42bcf498b4e756f9f4ea67cea1c51c62ed3e0" +
      "31a9d7bf3ac000000203f16d450c51853a4cd9569d225028aa08ab6139eee31f4f6" +
      "7a010000000000004cda79bc48b970de2fb29c3f38626eb9d70d8bae7b92aad09f2" +
      "a0ad2d2f334d35bca1c62ffff001d048fc21700000020687e487acbf5eb375c631a" +
      "15127fbf7d80ca084461e7f26f92c509b6000000006fad33bd7c8d651bd6dc86c28" +
      "6f0a99340b668f019b9e97a59fd392c36c4f46910cf1c62ffff001d407facaa0400" +
      "002040f4c65610f26f06c4365305b956934501713e01c2fc08b919e0bc1b0000000" +
      "0e401a6a884ba015e83c6fe2cd363e877ef03982e81eaff4e2c95af1e23a670f407" +
      "d41c62ffff001d58c64d180400002038854bd62f802e1de14653eceeb7a80290f5e" +
      "99b8e9db517e36f000000000000a494b8034039e7855b75563ab83c9410dd67e89b" +
      "b58e6cd93b85290a885dd749f4d61c62ed3e031ad9a83746",
  },
}
