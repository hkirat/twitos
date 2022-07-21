/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hkirat.twitos.twitos";

export interface Comment {
  id: number;
  tweetId: number;
  description: string;
  likes: number;
  timestamp: number;
  owner: number;
}

const baseComment: object = {
  id: 0,
  tweetId: 0,
  description: "",
  likes: 0,
  timestamp: 0,
  owner: 0,
};

export const Comment = {
  encode(message: Comment, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.tweetId !== 0) {
      writer.uint32(16).uint64(message.tweetId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.likes !== 0) {
      writer.uint32(32).uint64(message.likes);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint64(message.timestamp);
    }
    if (message.owner !== 0) {
      writer.uint32(48).uint64(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Comment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComment } as Comment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tweetId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.likes = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.owner = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Comment {
    const message = { ...baseComment } as Comment;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.tweetId !== undefined && object.tweetId !== null) {
      message.tweetId = Number(object.tweetId);
    } else {
      message.tweetId = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.likes !== undefined && object.likes !== null) {
      message.likes = Number(object.likes);
    } else {
      message.likes = 0;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Number(object.owner);
    } else {
      message.owner = 0;
    }
    return message;
  },

  toJSON(message: Comment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tweetId !== undefined && (obj.tweetId = message.tweetId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.likes !== undefined && (obj.likes = message.likes);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<Comment>): Comment {
    const message = { ...baseComment } as Comment;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.tweetId !== undefined && object.tweetId !== null) {
      message.tweetId = object.tweetId;
    } else {
      message.tweetId = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.likes !== undefined && object.likes !== null) {
      message.likes = object.likes;
    } else {
      message.likes = 0;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = 0;
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
