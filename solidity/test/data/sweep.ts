import { BytesLike } from "@ethersproject/bytes"
import { BigNumberish } from "ethers"

// TODO: Documentation
export interface SweepTestData {
  deposits: {
    fundingTx: {
      hash: BytesLike
      version: BytesLike
      inputVector: BytesLike
      outputVector: BytesLike
      locktime: BytesLike
    }
    reveal: {
      fundingOutputIndex: BigNumberish
      depositor: string
      blindingFactor: BytesLike
      walletPubKeyHash: BytesLike
      refundPubKeyHash: BytesLike
      refundLocktime: BytesLike
      vault: string
    }
  }[]

  sweepTx: {
    hash: BytesLike
    version: BytesLike
    inputVector: BytesLike
    outputVector: BytesLike
    locktime: BytesLike
  }

  sweepProof: {
    merkleProof: BytesLike
    txIndexInBlock: BigNumberish
    bitcoinHeaders: BytesLike
  }

  chainDifficulty: number
}

// `SingleP2SHDeposit` test data represents a sweep with following properties:
// - 1 P2SH deposit input
// - 1 P2WPKH sweep output
// - No prior sweeps made by this wallet
// - 6+ on-chain confirmations of the sweep transaction
export const SingleP2SHDeposit: SweepTestData = {
  deposits: [
    {
      // https://live.blockcypher.com/btc-testnet/tx/c580e0e352570d90e303d912a506055ceeb0ee06f97dce6988c69941374f5479
      fundingTx: {
        hash: "0x79544f374199c68869ce7df906eeb0ee5c0506a512d903e3900d5752e3e080c5",
        version: "0x01000000",
        inputVector:
          "0x011d9b71144a3ddbb56dd099ee94e6dd8646d7d1eb37fe1195367e6fa844a3" +
          "88e7010000006a47304402206f8553c07bcdc0c3b906311888103d623ca9096c" +
          "a0b28b7d04650a029a01fcf9022064cda02e39e65ace712029845cfcf58d1b59" +
          "617d753c3fd3556f3551b609bbb00121039d61d62dcd048d3f8550d22eb90b4a" +
          "f908db60231d117aeede04e7bc11907bfaffffffff",
        outputVector:
          "0x02204e00000000000017a9143ec459d0f3c29286ae5df5fcc421e278602427" +
          "7e87a6c2140000000000160014e257eccafbc07c381642ce6e7e55120fb077fb" +
          "ed",
        locktime: "0x00000000",
      },
      reveal: {
        fundingOutputIndex: 0,
        depositor: "0x934b98637ca318a4d6e7ca6ffd1690b8e77df637",
        blindingFactor: "0xf9f0c90d00039523",
        // HASH160 of 03989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d9
        walletPubKeyHash: "0x8db50eb52063ea9d98b3eac91489a90f738986f6",
        // HASH160 of 039d61d62dcd048d3f8550d22eb90b4af908db60231d117aeede04e7bc11907bfa
        refundPubKeyHash: "0xe257eccafbc07c381642ce6e7e55120fb077fbed",
        refundLocktime: "0xe0250162",
        vault: "0x0000000000000000000000000000000000000000",
      },
    },
  ],

  // https://live.blockcypher.com/btc-testnet/tx/f5b9ad4e8cd5317925319ebc64dc923092bef3b56429c6b1bc2261bbdc73f351
  sweepTx: {
    hash: "0x51f373dcbb6122bcb1c62964b5f3be923092dc64bc9e31257931d58c4eadb9f5",
    version: "0x01000000",
    inputVector:
      "0x0179544f374199c68869ce7df906eeb0ee5c0506a512d903e3900d5752e3e080c5" +
      "00000000c847304402205eff3ae003a5903eb33f32737e3442b6516685a1addb1933" +
      "9c2d02d400cf67ce0220707435fc2a0577373c63c99d242c30bea5959ec180169978" +
      "d43ece50618fe0ff012103989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f25" +
      "64da4cc29dcf8581d94c5c14934b98637ca318a4d6e7ca6ffd1690b8e77df6377508" +
      "f9f0c90d000395237576a9148db50eb52063ea9d98b3eac91489a90f738986f68763" +
      "ac6776a914e257eccafbc07c381642ce6e7e55120fb077fbed8804e0250162b175ac" +
      "68ffffffff",
    outputVector:
      "0x0144480000000000001600148db50eb52063ea9d98b3eac91489a90f738986f6",
    locktime: "0x00000000",
  },

  sweepProof: {
    merkleProof:
      "0x75377d34f47e2eb0cfb04459bce58492a84996dc31bf3cba5f08bfea36168d3969" +
      "93fa41ecc498353f332478ae3f964241fa1956f52f09cd6994eb7fbda3341b433477" +
      "45dbcc7ce3902199c31a0fb3c03a21f1f6845480cbbee15e8fbf400cb741b48b8505" +
      "ca54f7c08cd9c2e5c37b03a3eca02af540fc5b9ad90a00c4a1d2cf54fcbcc851c8d4" +
      "7552b8e09f6656a7fb74c488b9869b3247d56cdfe1ecbd4517b6b06c734b78f6c725" +
      "26da3cc4b5219faa48ba7abe403729b958b16cc07c706eb87d6febdbf3b82f1d64b1" +
      "54be0a60cdbbab0de51e0e4743214828f9ee2c0c29",
    txIndexInBlock: 36,
    bitcoinHeaders:
      "0x04000020a5a3501e6ba1f3e2a1ee5d29327a549524ed33f272dfef300045660000" +
      "000000e27d241ca36de831ab17e6729056c14a383e7a3f43d56254f846b496497751" +
      "12939edd612ac0001abbaa602e000000206d9e839a3c97827b5faf845f51a66edc34" +
      "ed32dbb81109f12a00000000000000fee43f9fffe8f2038392fdc69ba05e8825bac4" +
      "cda8c84c3f738d8ba2399a549a54a3dd61ffff001d3c151016000000201f6384713b" +
      "588bb730c51320aa0ab841e1dede512fdc2ed874e324df000000004254fcc35ca3e6" +
      "60d6a325b04755bd4c45b47530aece6ec254a6d84363c9836115a8dd61ffff001dc4" +
      "977aca00004020d6e7417486214ba46562c9bf4cdb973f9924dddee419b80afff181" +
      "d50000000031e301a5250a75e599d3a7e70996d677216cf23f261d513d9ac87296a0" +
      "3046dacdacdd61ffff001de15046e200000020ee071caba9bc64b8d459bfa0080722" +
      "1001f2c632c851d2868fa90600000000004e10814280c8bb5c548d09d4bae08164f7" +
      "3e32fcd35ed31020579b592668280383b1dd61ffff001dc15e6b8104000020382355" +
      "d0078bd0aaf7eb872dfa0f1bb555f8be0c0c219886d1426dfe0000000066555236d3" +
      "bbfb19bf093fe55252f7fb49a75ae99e6415b61ff6c0f8b89d0842b3b1dd612ac000" +
      "1ada9c55300000002031552151fbef8e96a33f979e6253d29edf65ac31b04802319e" +
      "00000000000000e003319fca9082d25815fcca442fe68a5249818abc79302e1b3dfe" +
      "854bf18028c0b2dd612ac0001ac429a1dd",
  },

  chainDifficulty: 22350181,
}

// `MultipleDepositsNoPreviousSweep` test data represents a sweep with following properties:
// - 3 P2WSH and 2 P2SH deposit inputs
// - 1 P2WPKH sweep output
// - No prior sweeps made by this wallet
// - 6+ on-chain confirmations of the sweep transaction
export const MultipleDepositsNoPreviousSweep: SweepTestData = {
  deposits: [
    {
      // https://live.blockcypher.com/btc-testnet/tx/d6a04c76aab203fe9cd8a2498bb4a8c50eb767fd95719c7790ac675ed5dec526
      fundingTx: {
        hash: "0x26c5ded55e67ac90779c7195fd67b70ec5a8b48b49a2d89cfe03b2aa764ca0d6",
        version: "0x01000000",
        inputVector:
          "0x0101278d2c20437868e49c34bc67ace5646d20c674354e061a1683c8b55cf4" +
          "19c20100000000ffffffff",
        outputVector:
          "0x0230750000000000002200200b636cbcfcde39f846bc1715a9216d53a7b882" +
          "9d8590c54d1a1389dac31e4e125e5c3b00000000001600147ac2d9378a1c47e5" +
          "89dfb8095ca95ed2140d2726",
        locktime: "0x00000000",
      },
      reveal: {
        fundingOutputIndex: 0,
        depositor: "0x934B98637cA318a4D6E7CA6ffd1690b8e77df637",
        blindingFactor: "0x4a6f267c3bfaba7c",
        // HASH160 of 03989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d9.
        walletPubKeyHash: "0x8db50eb52063ea9d98b3eac91489a90f738986f6",
        // HASH160 of 0300d6f28a2f6bf9836f57fcda5d284c9a8f849316119779f0d6090830d97763a9.
        refundPubKeyHash: "0x28e081f285138ccbe389c1eb8985716230129f89",
        refundLocktime: "0x1cdb1462",
        vault: "0x0000000000000000000000000000000000000000",
      },
    },
    {
      // https://live.blockcypher.com/btc-testnet/tx/659ea860a4879acba52c1518fb44f71ed8bb0db78074da29eaf0afac6e2d79d1
      fundingTx: {
        hash: "0xd1792d6eacaff0ea29da7480b70dbbd81ef744fb18152ca5cb9a87a460a89e65",
        version: "0x01000000",
        inputVector:
          "0x010ab93f22d004afe73c75e24a9b790854be61f8a262ff7c41022b8cce9c82" +
          "d8730100000000ffffffff",
        outputVector:
          "0x02102700000000000017a914e56ff1445b513721fb0e3981817d1b17d83f95" +
          "b087acb43a00000000001600147ac2d9378a1c47e589dfb8095ca95ed2140d27" +
          "26",
        locktime: "0x00000000",
      },
      reveal: {
        fundingOutputIndex: 0,
        depositor: "0x6749bc3837b23da76ccAF0051aa64202f5dDEed3",
        blindingFactor: "0x2c8b4d267ff1d505",
        // HASH160 of 03989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d9.
        walletPubKeyHash: "0x8db50eb52063ea9d98b3eac91489a90f738986f6",
        // HASH160 of 03c8d218194ff88421589b8cc14de046146519a45fa24be8299696650b86d9a726.
        refundPubKeyHash: "0xde54ea850935dbd54ed886bf8a1f8810021a25c2",
        refundLocktime: "0x4c051562",
        vault: "0x0000000000000000000000000000000000000000",
      },
    },
    {
      // https://live.blockcypher.com/btc-testnet/tx/bab571c612c36d764d22f058097d8ece2e3ca255e886d4cb91131ee39823fc48
      fundingTx: {
        hash: "0x48fc2398e31e1391cbd486e855a23c2ece8e7d0958f0224d766dc312c671b5ba",
        version: "0x01000000",
        inputVector:
          "0x01d1792d6eacaff0ea29da7480b70dbbd81ef744fb18152ca5cb9a87a460a8" +
          "9e650100000000ffffffff",
        outputVector:
          "0x025034030000000000220020dfe723baab8a6a87f03eb67a9705bd1b15eb63" +
          "f9b9fd9cc62d8acf7c684432db6c7a3700000000001600147ac2d9378a1c47e5" +
          "89dfb8095ca95ed2140d2726",
        locktime: "0x00000000",
      },
      reveal: {
        fundingOutputIndex: 0,
        depositor: "0x640EdB9b80ED9FEAc6D20cc80156D71e3eEDc11b",
        blindingFactor: "0x8448912a89f4bf26",
        // HASH160 of 03989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d9.
        walletPubKeyHash: "0x8db50eb52063ea9d98b3eac91489a90f738986f6",
        // HASH160 of 03ca0ba18104c93b59ae76edb23456efceb4bdc9d53eebc9dd026726c107e2cc2a.
        refundPubKeyHash: "0x90123976988b921aac1218db4254572cc60c233a",
        refundLocktime: "0x6c021662",
        vault: "0x0000000000000000000000000000000000000000",
      },
    },
    {
      // https://live.blockcypher.com/btc-testnet/tx/c66e9ef85c94240c76c0372173e2371d746426f30df003b13e8653bf91042ee7
      fundingTx: {
        hash: "0xe72e0491bf53863eb103f00df32664741d37e2732137c0760c24945cf89e6ec6",
        version: "0x01000000",
        inputVector:
          "0x0148fc2398e31e1391cbd486e855a23c2ece8e7d0958f0224d766dc312c671" +
          "b5ba0100000000ffffffff",
        outputVector:
          "0x0250a505000000000017a914b8548576878505342b8cbb0e13ba2c1f4a6999" +
          "db879acf3100000000001600147ac2d9378a1c47e589dfb8095ca95ed2140d27" +
          "26",
        locktime: "0x00000000",
      },
      reveal: {
        fundingOutputIndex: 0,
        depositor: "0xC92FC70710558103BD90B6BC9041137c43F86ed7",
        blindingFactor: "0x90fb21f8f58d235a",
        // HASH160 of 03989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d9.
        walletPubKeyHash: "0x8db50eb52063ea9d98b3eac91489a90f738986f6",
        // HASH160 of 0295e4010377cc051dfb9439cdedc78eba4e592254a829f28ebaeabb997a2b7843.
        refundPubKeyHash: "0xf1f72a500299a14380fe5cfccff6dda3408fb782",
        refundLocktime: "0x1c9d1662",
        vault: "0x0000000000000000000000000000000000000000",
      },
    },
    {
      // https://live.blockcypher.com/btc-testnet/tx/e2131bdd5017d078ec2c17d463c9bc17abf79a9c8a37746f032b2d48ac2ff189
      fundingTx: {
        hash: "0x89f12fac482d2b036f74378a9c9af7ab17bcc963d4172cec78d01750dd1b13e2",
        version: "0x01000000",
        inputVector:
          "0x01e72e0491bf53863eb103f00df32664741d37e2732137c0760c24945cf89e" +
          "6ec60100000000ffffffff",
        outputVector:
          "0x02c0b6060000000000220020f8b7d8d06bf387d9be502cf04a9821325b7216" +
          "b5301b9c8f65e6d29649a2108cea122b00000000001600147ac2d9378a1c47e5" +
          "89dfb8095ca95ed2140d2726",
        locktime: "0x00000000",
      },
      reveal: {
        fundingOutputIndex: 0,
        depositor: "0xEe080E869F094e251E135294539a05b267041122",
        blindingFactor: "0xdd66710eefa37a42",
        // HASH160 of 03989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d9.
        walletPubKeyHash: "0x8db50eb52063ea9d98b3eac91489a90f738986f6",
        // HASH160 of 021c0f768e18affe50136f487fa69d993facfd9f87040dfa764b32d8090d61a438.
        refundPubKeyHash: "0xf4eedc8f40d4b8e30771f792b065ebec0abaddef",
        refundLocktime: "0x389f1662",
        vault: "0x0000000000000000000000000000000000000000",
      },
    },
  ],

  // https://live.blockcypher.com/btc-testnet/tx/2a5d5f472e376dc28964e1b597b1ca5ee5ac042101b5199a3ca8dae2deec3538
  sweepTx: {
    hash: "0x3835ecdee2daa83c9a19b5012104ace55ecab197b5e16489c26d372e475f5d2a",
    version: "0x01000000",
    inputVector:
      "0x0589f12fac482d2b036f74378a9c9af7ab17bcc963d4172cec78d01750dd1b13e2" +
      "0000000000ffffffffe72e0491bf53863eb103f00df32664741d37e2732137c0760c" +
      "24945cf89e6ec600000000c847304402202edd080c332080da520c32afbea2c6e84a" +
      "b0847e7c7b90287294d8c61860f1bf02200c9a2d8bfb534527813e04441f9b2804a9" +
      "224b1a46ee718399abc88628089770012103989d253b17a6a0f41838b84ff0d20e88" +
      "98f9d7b1a98f2564da4cc29dcf8581d94c5c14c92fc70710558103bd90b6bc904113" +
      "7c43f86ed7750890fb21f8f58d235a7576a9148db50eb52063ea9d98b3eac91489a9" +
      "0f738986f68763ac6776a914f1f72a500299a14380fe5cfccff6dda3408fb7828804" +
      "1c9d1662b175ac68ffffffff48fc2398e31e1391cbd486e855a23c2ece8e7d0958f0" +
      "224d766dc312c671b5ba0000000000ffffffff26c5ded55e67ac90779c7195fd67b7" +
      "0ec5a8b48b49a2d89cfe03b2aa764ca0d60000000000ffffffffd1792d6eacaff0ea" +
      "29da7480b70dbbd81ef744fb18152ca5cb9a87a460a89e6500000000c84730440220" +
      "0c5e04ebf5e0f30021d3c52c3c784ef46724183f2783ecd61203fb15f35095540220" +
      "7a988536b2451dad091720466ea1a22f3a3f9d5d415e82be733d764b57d0c6740121" +
      "03989d253b17a6a0f41838b84ff0d20e8898f9d7b1a98f2564da4cc29dcf8581d94c" +
      "5c146749bc3837b23da76ccaf0051aa64202f5ddeed375082c8b4d267ff1d5057576" +
      "a9148db50eb52063ea9d98b3eac91489a90f738986f68763ac6776a914de54ea8509" +
      "35dbd54ed886bf8a1f8810021a25c288044c051562b175ac68ffffffff",
    outputVector:
      "0x01d0241000000000001600148db50eb52063ea9d98b3eac91489a90f738986f6",
    locktime: "0x00000000",
  },

  sweepProof: {
    merkleProof:
      "0xe15a60efbeec3dee2cdf38ebd0ffb5f48c230e61f8329a23840d72354d40560ea1" +
      "5dd9fc2856c93626253515d9dee159597a597603142772fb20b38f967a633b11e107" +
      "0eb88c1663303354ff954c6d9f9a67ebac28e4c150a98746d7f27cc07f43cdf29b4e" +
      "2418d2575717beb8f94e129c24aa1a893f706ce89072ef157f2ade",
    txIndexInBlock: 8,
    bitcoinHeaders:
      "0x0000a02037ab97313f296c44650553afaa03eb05757cc8514a1166e42500000000" +
      "0000003355bc5d3708f6a33c8b0a48c794f33855c01016dff40a17781da039d514a1" +
      "b0225ff161cbcd001a65784973000060202de7b5fc1d5283cfdf09f62210a035aaae" +
      "d9d16608d0013f5600000000000000804b0397eae0fba215e67eca1b764f3e052721" +
      "6dda006068a6aaef0353693d528060f161cbcd001a53beb73c00006020f97e400aaf" +
      "c9cb45f4cbff788bc630b1a36f7001a69b68043c00000000000000b6d619e28c36f7" +
      "b13dd2bd3ece559bad352ef8cd65f7ec89d330160d2c190a620e63f161cbcd001a11" +
      "58f632d498200029e4cea651d4eab2f5814d8b37f018069711bcb6e85b8617730000" +
      "0000000000587343c34efb8e4fa0be399a264e37981cf8b0db7dcb079bdc31fe74bb" +
      "8da8d6e363f161cbcd001a035e7125000080207ca61193b74eb860880a1479aaa0de" +
      "c37dd1939729bb5a1e5e000000000000001f69415e61d4917b7d64460250ed743709" +
      "51df01f04da7b7e5f71534c87ba4902064f161cbcd001a75c6ed6b0000a020c7ab47" +
      "2385653a7d341f10719ffa55f1a6f21e0853ac3c2b9400000000000000e50e9ae207" +
      "4024df90936006dd608c06534876db27a10f5851eadb5f579323daa265f161cbcd00" +
      "1a2676b59f0020002016b3f18bda6d1b0b8d27224c11428a6dd52bcb40cdf915fd42" +
      "00000000000000ed8dac80a63d3a5a041231f1adafdbc282fe78ded144c815a66ced" +
      "9a842089ddd965f161cbcd001af9f5886c",
  },

  chainDifficulty: 20870012,
}
