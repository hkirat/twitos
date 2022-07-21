// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateComment } from "./types/twitos/tx";
import { MsgLikeTweet } from "./types/twitos/tx";
import { MsgCreateTweet } from "./types/twitos/tx";
import { MsgCreateUser } from "./types/twitos/tx";


const types = [
  ["/hkirat.twitos.twitos.MsgCreateComment", MsgCreateComment],
  ["/hkirat.twitos.twitos.MsgLikeTweet", MsgLikeTweet],
  ["/hkirat.twitos.twitos.MsgCreateTweet", MsgCreateTweet],
  ["/hkirat.twitos.twitos.MsgCreateUser", MsgCreateUser],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateComment: (data: MsgCreateComment): EncodeObject => ({ typeUrl: "/hkirat.twitos.twitos.MsgCreateComment", value: MsgCreateComment.fromPartial( data ) }),
    msgLikeTweet: (data: MsgLikeTweet): EncodeObject => ({ typeUrl: "/hkirat.twitos.twitos.MsgLikeTweet", value: MsgLikeTweet.fromPartial( data ) }),
    msgCreateTweet: (data: MsgCreateTweet): EncodeObject => ({ typeUrl: "/hkirat.twitos.twitos.MsgCreateTweet", value: MsgCreateTweet.fromPartial( data ) }),
    msgCreateUser: (data: MsgCreateUser): EncodeObject => ({ typeUrl: "/hkirat.twitos.twitos.MsgCreateUser", value: MsgCreateUser.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
