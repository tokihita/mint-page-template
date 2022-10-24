/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  IERC721OnChainDataMock,
  IERC721OnChainDataMockInterface,
} from '../../EditionMetadataRenderer.t.sol/IERC721OnChainDataMock'

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'totalMinted',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxSupply',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'saleDetails',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'publicSaleActive',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'presaleActive',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'publicSalePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'publicSaleStart',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'publicSaleEnd',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'presaleStart',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'presaleEnd',
            type: 'uint64',
          },
          {
            internalType: 'bytes32',
            name: 'presaleMerkleRoot',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'maxSalePurchasePerAddress',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalMinted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSupply',
            type: 'uint256',
          },
        ],
        internalType: 'struct IERC721Drop.SaleDetails',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516103ff3803806103ff83398101604081905261002f916100af565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810184905261014001829052805461ffff191681556001819055600281905560038190556004556005919091556006556100d3565b600080604083850312156100c257600080fd5b505080516020909101519092909150565b61031d806100e26000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b5780633474a4a614610083575b600080fd5b604080518082018252600981527f4d4f434b204e414d4500000000000000000000000000000000000000000000006020820152905161007a91906101a9565b60405180910390f35b61019c6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915250604080516101608101825260005460ff808216151583526101009182900416151560208301526001549282019290925260025467ffffffffffffffff8082166060840152680100000000000000008204811660808401527001000000000000000000000000000000008204811660a084015278010000000000000000000000000000000000000000000000009091041660c082015260035460e08201526004549181019190915260055461012082015260065461014082015290565b60405161007a919061021c565b600060208083528351808285015260005b818110156101d6578581018301518582016040015282016101ba565b818111156101e8576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b8151151581526101608101602083015161023a602084018215159052565b50604083015160408301526060830151610260606084018267ffffffffffffffff169052565b50608083015161027c608084018267ffffffffffffffff169052565b5060a083015161029860a084018267ffffffffffffffff169052565b5060c08301516102b460c084018267ffffffffffffffff169052565b5060e08381015190830152610100808401519083015261012080840151908301526101409283015192909101919091529056fea264697066735822122057db3d9411c1f4f7cd6a2951d87edd7cc08555b3d2e1c59d1d341a85767ef1e564736f6c634300080a0033'

type IERC721OnChainDataMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: IERC721OnChainDataMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class IERC721OnChainDataMock__factory extends ContractFactory {
  constructor(...args: IERC721OnChainDataMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    totalMinted: BigNumberish,
    maxSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IERC721OnChainDataMock> {
    return super.deploy(
      totalMinted,
      maxSupply,
      overrides || {}
    ) as Promise<IERC721OnChainDataMock>
  }
  override getDeployTransaction(
    totalMinted: BigNumberish,
    maxSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(totalMinted, maxSupply, overrides || {})
  }
  override attach(address: string): IERC721OnChainDataMock {
    return super.attach(address) as IERC721OnChainDataMock
  }
  override connect(signer: Signer): IERC721OnChainDataMock__factory {
    return super.connect(signer) as IERC721OnChainDataMock__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): IERC721OnChainDataMockInterface {
    return new utils.Interface(_abi) as IERC721OnChainDataMockInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721OnChainDataMock {
    return new Contract(address, _abi, signerOrProvider) as IERC721OnChainDataMock
  }
}