/* eslint-disable */
import { Params } from "../twitos/params";
import { DbHead } from "../twitos/db_head";
import { User } from "../twitos/user";
import { WalletToUserId } from "../twitos/wallet_to_user_id";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hkirat.twitos.twitos";

/** GenesisState defines the twitos module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  dbHead: DbHead | undefined;
  userList: User[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  walletToUserIdList: WalletToUserId[];
}

const baseGenesisState: object = {};

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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.userList = [];
    message.walletToUserIdList = [];
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
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.userList = [];
    message.walletToUserIdList = [];
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
    return message;
  },
};

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
