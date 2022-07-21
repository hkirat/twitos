/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hkirat.twitos.twitos";

export interface Tweet {
  id: number;
  tweetId: number;
  owner: number;
  description: string;
  likes: number;
  comments: number;
}

const baseTweet: object = {
  id: 0,
  tweetId: 0,
  owner: 0,
  description: "",
  likes: 0,
  comments: 0,
};

export const Tweet = {
  encode(message: Tweet, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.tweetId !== 0) {
      writer.uint32(16).uint64(message.tweetId);
    }
    if (message.owner !== 0) {
      writer.uint32(24).uint64(message.owner);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.likes !== 0) {
      writer.uint32(40).uint64(message.likes);
    }
    if (message.comments !== 0) {
      writer.uint32(48).uint64(message.comments);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Tweet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTweet } as Tweet;
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
          message.owner = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.likes = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.comments = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tweet {
    const message = { ...baseTweet } as Tweet;
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
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Number(object.owner);
    } else {
      message.owner = 0;
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
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = Number(object.comments);
    } else {
      message.comments = 0;
    }
    return message;
  },

  toJSON(message: Tweet): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tweetId !== undefined && (obj.tweetId = message.tweetId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.description !== undefined &&
      (obj.description = message.description);
    message.likes !== undefined && (obj.likes = message.likes);
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  fromPartial(object: DeepPartial<Tweet>): Tweet {
    const message = { ...baseTweet } as Tweet;
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
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = 0;
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
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = 0;
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
