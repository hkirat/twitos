/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hkirat.twitos.twitos";

export interface CommentLike {
  index: string;
  commentId: number;
  user: number;
}

const baseCommentLike: object = { index: "", commentId: 0, user: 0 };

export const CommentLike = {
  encode(message: CommentLike, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.commentId !== 0) {
      writer.uint32(16).uint64(message.commentId);
    }
    if (message.user !== 0) {
      writer.uint32(24).uint64(message.user);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CommentLike {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommentLike } as CommentLike;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.commentId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.user = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommentLike {
    const message = { ...baseCommentLike } as CommentLike;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.commentId !== undefined && object.commentId !== null) {
      message.commentId = Number(object.commentId);
    } else {
      message.commentId = 0;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = Number(object.user);
    } else {
      message.user = 0;
    }
    return message;
  },

  toJSON(message: CommentLike): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(object: DeepPartial<CommentLike>): CommentLike {
    const message = { ...baseCommentLike } as CommentLike;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.commentId !== undefined && object.commentId !== null) {
      message.commentId = object.commentId;
    } else {
      message.commentId = 0;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = 0;
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
