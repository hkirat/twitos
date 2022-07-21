/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../twitos/params";
import { DbHead } from "../twitos/db_head";
import { User } from "../twitos/user";
import { WalletToUserId } from "../twitos/wallet_to_user_id";
import { Tweet } from "../twitos/tweet";

export const protobufPackage = "hkirat.twitos.twitos";

/** GenesisState defines the twitos module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  dbHead: DbHead | undefined;
  userList: User[];
  walletToUserIdList: WalletToUserId[];
  tweetList: Tweet[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  tweetCount: number;
}

const baseGenesisState: object = { tweetCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.dbHead !== undefined) {
      DbHead.encode(message.dbHead, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.walletToUserIdList) {
      WalletToUserId.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.tweetList) {
      Tweet.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.tweetCount !== 0) {
      writer.uint32(48).uint64(message.tweetCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.userList = [];
    message.walletToUserIdList = [];
    message.tweetList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.dbHead = DbHead.decode(reader, reader.uint32());
          break;
        case 3:
          message.userList.push(User.decode(reader, reader.uint32()));
          break;
        case 4:
          message.walletToUserIdList.push(
            WalletToUserId.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.tweetList.push(Tweet.decode(reader, reader.uint32()));
          break;
        case 6:
          message.tweetCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.userList = [];
    message.walletToUserIdList = [];
    message.tweetList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.dbHead !== undefined && object.dbHead !== null) {
      message.dbHead = DbHead.fromJSON(object.dbHead);
    } else {
      message.dbHead = undefined;
    }
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromJSON(e));
      }
    }
    if (
      object.walletToUserIdList !== undefined &&
      object.walletToUserIdList !== null
    ) {
      for (const e of object.walletToUserIdList) {
        message.walletToUserIdList.push(WalletToUserId.fromJSON(e));
      }
    }
    if (object.tweetList !== undefined && object.tweetList !== null) {
      for (const e of object.tweetList) {
        message.tweetList.push(Tweet.fromJSON(e));
      }
    }
    if (object.tweetCount !== undefined && object.tweetCount !== null) {
      message.tweetCount = Number(object.tweetCount);
    } else {
      message.tweetCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.dbHead !== undefined &&
      (obj.dbHead = message.dbHead ? DbHead.toJSON(message.dbHead) : undefined);
    if (message.userList) {
      obj.userList = message.userList.map((e) =>
        e ? User.toJSON(e) : undefined
      );
    } else {
      obj.userList = [];
    }
    if (message.walletToUserIdList) {
      obj.walletToUserIdList = message.walletToUserIdList.map((e) =>
        e ? WalletToUserId.toJSON(e) : undefined
      );
    } else {
      obj.walletToUserIdList = [];
    }
    if (message.tweetList) {
      obj.tweetList = message.tweetList.map((e) =>
        e ? Tweet.toJSON(e) : undefined
      );
    } else {
      obj.tweetList = [];
    }
    message.tweetCount !== undefined && (obj.tweetCount = message.tweetCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.userList = [];
    message.walletToUserIdList = [];
    message.tweetList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.dbHead !== undefined && object.dbHead !== null) {
      message.dbHead = DbHead.fromPartial(object.dbHead);
    } else {
      message.dbHead = undefined;
    }
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromPartial(e));
      }
    }
    if (
      object.walletToUserIdList !== undefined &&
      object.walletToUserIdList !== null
    ) {
      for (const e of object.walletToUserIdList) {
        message.walletToUserIdList.push(WalletToUserId.fromPartial(e));
      }
    }
    if (object.tweetList !== undefined && object.tweetList !== null) {
      for (const e of object.tweetList) {
        message.tweetList.push(Tweet.fromPartial(e));
      }
    }
    if (object.tweetCount !== undefined && object.tweetCount !== null) {
      message.tweetCount = object.tweetCount;
    } else {
      message.tweetCount = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
