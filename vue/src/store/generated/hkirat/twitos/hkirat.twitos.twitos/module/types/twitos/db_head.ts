/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hkirat.twitos.twitos";

export interface DbHead {
  userIndex: number;
  tweetIndex: number;
  commentIndex: number;
}

const baseDbHead: object = { userIndex: 0, tweetIndex: 0, commentIndex: 0 };

export const DbHead = {
  encode(message: DbHead, writer: Writer = Writer.create()): Writer {
    if (message.userIndex !== 0) {
      writer.uint32(8).uint64(message.userIndex);
    }
    if (message.tweetIndex !== 0) {
      writer.uint32(16).uint64(message.tweetIndex);
    }
    if (message.commentIndex !== 0) {
      writer.uint32(24).uint64(message.commentIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DbHead {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDbHead } as DbHead;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userIndex = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tweetIndex = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.commentIndex = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DbHead {
    const message = { ...baseDbHead } as DbHead;
    if (object.userIndex !== undefined && object.userIndex !== null) {
      message.userIndex = Number(object.userIndex);
    } else {
      message.userIndex = 0;
    }
    if (object.tweetIndex !== undefined && object.tweetIndex !== null) {
      message.tweetIndex = Number(object.tweetIndex);
    } else {
      message.tweetIndex = 0;
    }
    if (object.commentIndex !== undefined && object.commentIndex !== null) {
      message.commentIndex = Number(object.commentIndex);
    } else {
      message.commentIndex = 0;
    }
    return message;
  },

  toJSON(message: DbHead): unknown {
    const obj: any = {};
    message.userIndex !== undefined && (obj.userIndex = message.userIndex);
    message.tweetIndex !== undefined && (obj.tweetIndex = message.tweetIndex);
    message.commentIndex !== undefined &&
      (obj.commentIndex = message.commentIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<DbHead>): DbHead {
    const message = { ...baseDbHead } as DbHead;
    if (object.userIndex !== undefined && object.userIndex !== null) {
      message.userIndex = object.userIndex;
    } else {
      message.userIndex = 0;
    }
    if (object.tweetIndex !== undefined && object.tweetIndex !== null) {
      message.tweetIndex = object.tweetIndex;
    } else {
      message.tweetIndex = 0;
    }
    if (object.commentIndex !== undefined && object.commentIndex !== null) {
      message.commentIndex = object.commentIndex;
    } else {
      message.commentIndex = 0;
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
