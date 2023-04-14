/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ZoraNFTCreatorV10817,
  ZoraNFTCreatorV10817Interface,
} from "../../ZoraNFTCreatorV1.sol/ZoraNFTCreatorV10817";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
      {
        internalType: "contract EditionMetadataRenderer",
        name: "_editionMetadataRenderer",
        type: "address",
      },
      {
        internalType: "contract DropMetadataRenderer",
        name: "_dropMetadataRenderer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "editionContractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "editionSize",
        type: "uint256",
      },
    ],
    name: "CreatedDrop",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "contractVersion",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "editionSize",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "royaltyBPS",
        type: "uint16",
      },
      {
        internalType: "address payable",
        name: "fundsRecipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint104",
            name: "publicSalePrice",
            type: "uint104",
          },
          {
            internalType: "uint32",
            name: "maxSalePurchasePerAddress",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "publicSaleStart",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "publicSaleEnd",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "presaleStart",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "presaleEnd",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct IERC721Drop.SalesConfiguration",
        name: "saleConfig",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "metadataURIBase",
        type: "string",
      },
      {
        internalType: "string",
        name: "metadataContractURI",
        type: "string",
      },
    ],
    name: "createDrop",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "editionSize",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "royaltyBPS",
        type: "uint16",
      },
      {
        internalType: "address payable",
        name: "fundsRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint104",
            name: "publicSalePrice",
            type: "uint104",
          },
          {
            internalType: "uint32",
            name: "maxSalePurchasePerAddress",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "publicSaleStart",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "publicSaleEnd",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "presaleStart",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "presaleEnd",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct IERC721Drop.SalesConfiguration",
        name: "saleConfig",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "animationURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
    ],
    name: "createEdition",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dropMetadataRenderer",
    outputs: [
      {
        internalType: "contract DropMetadataRenderer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "editionMetadataRenderer",
    outputs: [
      {
        internalType: "contract EditionMetadataRenderer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "editionSize",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "royaltyBPS",
        type: "uint16",
      },
      {
        internalType: "address payable",
        name: "fundsRecipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint104",
            name: "publicSalePrice",
            type: "uint104",
          },
          {
            internalType: "uint32",
            name: "maxSalePurchasePerAddress",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "publicSaleStart",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "publicSaleEnd",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "presaleStart",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "presaleEnd",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct IERC721Drop.SalesConfiguration",
        name: "saleConfig",
        type: "tuple",
      },
      {
        internalType: "contract IMetadataRenderer",
        name: "metadataRenderer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "metadataInitializer",
        type: "bytes",
      },
    ],
    name: "setupDropsContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x610120604052306080523480156200001657600080fd5b50604051620025683803806200256883398101604081905262000039916200017e565b600460a05260408051808201909152601381527243616e6e6f742062652030206164647265737360681b60208201526001600160a01b0384166200009b5760405162461bcd60e51b8152600401620000929190620001d2565b60405180910390fd5b5060408051808201909152601381527243616e6e6f742062652030206164647265737360681b60208201526001600160a01b038316620000f05760405162461bcd60e51b8152600401620000929190620001d2565b5060408051808201909152601381527243616e6e6f742062652030206164647265737360681b60208201526001600160a01b038216620001455760405162461bcd60e51b8152600401620000929190620001d2565b506001600160a01b0392831660c05290821660e052166101005262000222565b6001600160a01b03811681146200017b57600080fd5b50565b6000806000606084860312156200019457600080fd5b8351620001a18162000165565b6020850151909350620001b48162000165565b6040850151909250620001c78162000165565b809150509250925092565b600060208083528351808285015260005b818110156200020157858101830151858201604001528201620001e3565b506000604082860101526040601f19601f8301168501019250505092915050565b60805160a05160c05160e051610100516122d062000298600039600081816101960152610996015260008181610240015261066201526000818161020a0152610344015260006102ef01526000818161048a01528181610526015281816106a20152818161073a015261083c01526122d06000f3fe608060405260043610620000ef5760003560e01c8063686ce43511620000895780638129fc1c11620000605780638129fc1c146200029f5780638da5cb5b14620002b7578063a0a8e46014620002d7578063f2fde38b146200031a57600080fd5b8063686ce435146200022c578063715018a6146200026257806371525d8c146200027a57600080fd5b80634abde72911620000ca5780634abde72914620001825780634f1ef28614620001b857806352d1902d14620001cf5780635c60da1b14620001f657600080fd5b80630d743c7614620000f45780633659cfe614620001365780633857fb13146200015d575b600080fd5b3480156200010157600080fd5b5062000119620001133660046200148d565b6200033f565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156200014357600080fd5b506200015b6200015536600462001592565b62000480565b005b3480156200016a57600080fd5b50620001196200017c366004620015b2565b6200062a565b3480156200018f57600080fd5b50620001197f000000000000000000000000000000000000000000000000000000000000000081565b6200015b620001c9366004620016f5565b62000698565b348015620001dc57600080fd5b50620001e76200082f565b6040519081526020016200012d565b3480156200020357600080fd5b50620001197f000000000000000000000000000000000000000000000000000000000000000081565b3480156200023957600080fd5b50620001197f000000000000000000000000000000000000000000000000000000000000000081565b3480156200026f57600080fd5b506200015b620008f6565b3480156200028757600080fd5b5062000119620002993660046200174b565b62000960565b348015620002ac57600080fd5b506200015b620009cb565b348015620002c457600080fd5b506033546001600160a01b031662000119565b348015620002e457600080fd5b5060405163ffffffff7f00000000000000000000000000000000000000000000000000000000000000001681526020016200012d565b3480156200032757600080fd5b506200015b6200033936600462001592565b62000ae6565b6000807f0000000000000000000000000000000000000000000000000000000000000000604051620003719062001278565b6001600160a01b039091168152604060208201819052600090820152606001604051809103906000f080158015620003ad573d6000803e3d6000fd5b5090506000819050806001600160a01b031663faff3c708d8d8d8b8e8e8d8d8d6040518a63ffffffff1660e01b8152600401620003f39998979695949392919062001882565b600060405180830381600087803b1580156200040e57600080fd5b505af115801562000423573d6000803e3d6000fd5b505060405167ffffffffffffffff8c1681526001600160a01b03841692503391507fad59ebba8bfb06ba01a615a611467ca3bef86a275bd5e9704d3b295112550ba59060200160405180910390a39b9a5050505050505050505050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003620005245760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316620005807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614620005fe5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016200051b565b620006098162000bcb565b60408051600080825260208201909252620006279183919062000c27565b50565b600080848385604051602001620006449392919062001976565b6040516020818303038152906040529050620006888c8c898d8d8d8c7f0000000000000000000000000000000000000000000000000000000000000000896200033f565b9c9b505050505050505050505050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003620007385760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016200051b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316620007947f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614620008125760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016200051b565b6200081d8262000bcb565b6200082b8282600162000c27565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620008d15760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016200051b565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6033546001600160a01b03163314620009525760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200051b565b6200095e600062000dd8565b565b600080838360405160200162000978929190620019bf565b6040516020818303038152906040529050620009bc8b8b8b8b8b8b8b7f0000000000000000000000000000000000000000000000000000000000000000896200033f565b9b9a5050505050505050505050565b600054610100900460ff16620009e85760005460ff1615620009ec565b303b155b62000a605760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016200051b565b600054610100900460ff1615801562000aa057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b62000aaa62000e42565b62000ab462000ecb565b80156200062757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b6033546001600160a01b0316331462000b425760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200051b565b6001600160a01b03811662000bc05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016200051b565b620006278162000dd8565b6033546001600160a01b03163314620006275760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200051b565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161562000c625762000c5d8362000f4a565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801562000cbf575060408051601f3d908101601f1916820190925262000cbc91810190620019e8565b60015b62000d335760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016200051b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811462000dca5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016200051b565b5062000c5d83838362001022565b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1662000ec15760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016200051b565b6200095e62001053565b600054610100900460ff166200095e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016200051b565b6001600160a01b0381163b62000fc95760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016200051b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6200102d83620010dd565b6000825111806200103b5750805b1562000c5d576200104d83836200111f565b50505050565b600054610100900460ff16620010d25760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016200051b565b6200095e3362000dd8565b620010e88162000f4a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b620011a05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016200051b565b600080846001600160a01b031684604051620011bd919062001a02565b600060405180830381855af49150503d8060008114620011fa576040519150601f19603f3d011682016040523d82523d6000602084013e620011ff565b606091505b50915091506200122a8282604051806060016040528060278152602001620022746027913962001233565b95945050505050565b606083156200124457508162001271565b825115620012555782518084602001fd5b8160405162461bcd60e51b81526004016200051b919062001a20565b9392505050565b61083e8062001a3683390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715620012db57620012db62001286565b60405290565b600082601f830112620012f357600080fd5b813567ffffffffffffffff8082111562001311576200131162001286565b604051601f8301601f19908116603f011681019082821181831017156200133c576200133c62001286565b816040528381528660208588010111156200135657600080fd5b836020870160208301376000602085830101528094505050505092915050565b6001600160a01b03811681146200062757600080fd5b8035620013998162001376565b919050565b803567ffffffffffffffff811681146200139957600080fd5b803561ffff811681146200139957600080fd5b803563ffffffff811681146200139957600080fd5b600060e08284031215620013f257600080fd5b620013fc620012b5565b905081356cffffffffffffffffffffffffff811681146200141c57600080fd5b81526200142c60208301620013ca565b60208201526200143f604083016200139e565b604082015262001452606083016200139e565b606082015262001465608083016200139e565b60808201526200147860a083016200139e565b60a082015260c082013560c082015292915050565b60008060008060008060008060006101e08a8c031215620014ad57600080fd5b893567ffffffffffffffff80821115620014c657600080fd5b620014d48d838e01620012e1565b9a5060208c0135915080821115620014eb57600080fd5b620014f98d838e01620012e1565b99506200150960408d016200138c565b98506200151960608d016200139e565b97506200152960808d01620013b7565b96506200153960a08d016200138c565b95506200154a8d60c08e01620013df565b94506200155b6101a08d016200138c565b93506101c08c01359150808211156200157357600080fd5b50620015828c828d01620012e1565b9150509295985092959850929598565b600060208284031215620015a557600080fd5b8135620012718162001376565b6000806000806000806000806000806102008b8d031215620015d357600080fd5b8a3567ffffffffffffffff80821115620015ec57600080fd5b620015fa8e838f01620012e1565b9b5060208d01359150808211156200161157600080fd5b6200161f8e838f01620012e1565b9a506200162f60408e016200139e565b99506200163f60608e01620013b7565b98506200164f60808e016200138c565b97506200165f60a08e016200138c565b9650620016708e60c08f01620013df565b95506101a08d01359150808211156200168857600080fd5b620016968e838f01620012e1565b94506101c08d0135915080821115620016ae57600080fd5b620016bc8e838f01620012e1565b93506101e08d0135915080821115620016d457600080fd5b50620016e38d828e01620012e1565b9150509295989b9194979a5092959850565b600080604083850312156200170957600080fd5b8235620017168162001376565b9150602083013567ffffffffffffffff8111156200173357600080fd5b6200174185828601620012e1565b9150509250929050565b60008060008060008060008060006101e08a8c0312156200176b57600080fd5b893567ffffffffffffffff808211156200178457600080fd5b620017928d838e01620012e1565b9a5060208c0135915080821115620017a957600080fd5b620017b78d838e01620012e1565b9950620017c760408d016200138c565b9850620017d760608d016200139e565b9750620017e760808d01620013b7565b9650620017f760a08d016200138c565b9550620018088d60c08e01620013df565b94506101a08c01359150808211156200182057600080fd5b6200155b8d838e01620012e1565b60005b838110156200184b57818101518382015260200162001831565b50506000910152565b600081518084526200186e8160208601602086016200182e565b601f01601f19169290920160200192915050565b60006101e0808352620018988184018d62001854565b90508281036020840152620018ae818c62001854565b90506001600160a01b03808b166040850152808a1660608501525067ffffffffffffffff808916608085015261ffff881660a08501526cffffffffffffffffffffffffff87511660c085015263ffffffff60208801511660e08501528060408801511661010085015280606088015116610120850152806080880151166101408501528060a0880151166101608501525060c0860151610180840152620019616101a08401866001600160a01b03169052565b8281036101c084015262000688818562001854565b6060815260006200198b606083018662001854565b82810360208401526200199f818662001854565b90508281036040840152620019b5818562001854565b9695505050505050565b604081526000620019d4604083018562001854565b82810360208401526200122a818562001854565b600060208284031215620019fb57600080fd5b5051919050565b6000825162001a168184602087016200182e565b9190910192915050565b6020815260006200127160208301846200185456fe608060405260405161083e38038061083e83398101604081905261002291610349565b818161004f60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610417565b6000805160206107f78339815191521461006b5761006b610438565b61007782826000610080565b5050505061049d565b610089836100b6565b6000825111806100965750805b156100b1576100af83836100f660201b6100291760201c565b505b505050565b6100bf81610124565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061011b8383604051806060016040528060278152602001610817602791396101e4565b90505b92915050565b610137816102c460201b6100551760201c565b61019e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101c36000805160206107f783398151915260001b6102d360201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b61024c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610195565b600080856001600160a01b031685604051610267919061044e565b600060405180830381855af49150503d80600081146102a2576040519150601f19603f3d011682016040523d82523d6000602084013e6102a7565b606091505b5090925090506102b88282866102d6565b925050505b9392505050565b6001600160a01b03163b151590565b90565b606083156102e55750816102bd565b8251156102f55782518084602001fd5b8160405162461bcd60e51b8152600401610195919061046a565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610340578181015183820152602001610328565b50506000910152565b6000806040838503121561035c57600080fd5b82516001600160a01b038116811461037357600080fd5b60208401519092506001600160401b038082111561039057600080fd5b818501915085601f8301126103a457600080fd5b8151818111156103b6576103b661030f565b604051601f8201601f19908116603f011681019083821181831017156103de576103de61030f565b816040528281528860208487010111156103f757600080fd5b610408836020830160208801610325565b80955050505050509250929050565b8181038181111561011e57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052600160045260246000fd5b60008251610460818460208701610325565b9190910192915050565b6020815260008251806020840152610489816040850160208701610325565b601f01601f19169190910160400192915050565b61034b806104ac6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102ef602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b606073ffffffffffffffffffffffffffffffffffffffff84163b610188576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516101b09190610281565b600060405180830381855af49150503d80600081146101eb576040519150601f19603f3d011682016040523d82523d6000602084013e6101f0565b606091505b509150915061020082828661020a565b9695505050505050565b6060831561021957508161004e565b8251156102295782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017f919061029d565b60005b83811015610278578181015183820152602001610260565b50506000910152565b6000825161029381846020870161025d565b9190910192915050565b60208152600082518060208401526102bc81604085016020870161025d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212200a1f515908eca720d0626de55050e57ca7f3f77dc588a1e49ecd89e037bc548264736f6c63430008110033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b7203b111e559a4b7b0d799ff71ece9dae37c3a7447e746792a96fccb4572c9964736f6c63430008110033";

type ZoraNFTCreatorV10817ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZoraNFTCreatorV10817ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZoraNFTCreatorV10817__factory extends ContractFactory {
  constructor(...args: ZoraNFTCreatorV10817ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _implementation: string,
    _editionMetadataRenderer: string,
    _dropMetadataRenderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZoraNFTCreatorV10817> {
    return super.deploy(
      _implementation,
      _editionMetadataRenderer,
      _dropMetadataRenderer,
      overrides || {}
    ) as Promise<ZoraNFTCreatorV10817>;
  }
  override getDeployTransaction(
    _implementation: string,
    _editionMetadataRenderer: string,
    _dropMetadataRenderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _implementation,
      _editionMetadataRenderer,
      _dropMetadataRenderer,
      overrides || {}
    );
  }
  override attach(address: string): ZoraNFTCreatorV10817 {
    return super.attach(address) as ZoraNFTCreatorV10817;
  }
  override connect(signer: Signer): ZoraNFTCreatorV10817__factory {
    return super.connect(signer) as ZoraNFTCreatorV10817__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZoraNFTCreatorV10817Interface {
    return new utils.Interface(_abi) as ZoraNFTCreatorV10817Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZoraNFTCreatorV10817 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZoraNFTCreatorV10817;
  }
}