/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "hkirat.twitos.twitos";

export interface MsgCreateUser {
  creator: string;
  name: string;
}

export interface MsgCreateUserResponse {
  idValue: string;
}

export interface MsgCreateTweet {
  creator: string;
  description: string;
}

export interface MsgCreateTweetResponse {
  idValue: string;
}

export interface MsgLikeTweet {
  creator: string;
  tweetId: number;
  like: boolean;
}

export interface MsgLikeTweetResponse {
  done: boolean;
}

export interface MsgCreateComment {
  creator: string;
  tweetId: number;
  description: string;
}

export interface MsgCreateCommentResponse {
  idValue: string;
}

export interface MsgLikeComment {
  creator: string;
  commentId: number;
  like: boolean;
}

export interface MsgLikeCommentResponse {
  done: boolean;
}

const baseMsgCreateUser: object = { creator: "", name: "" };

export const MsgCreateUser = {
  encode(message: MsgCreateUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateUser } as MsgCreateUser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUser {
    const message = { ...baseMsgCreateUser } as MsgCreateUser;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateUser>): MsgCreateUser {
    const message = { ...baseMsgCreateUser } as MsgCreateUser;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgCreateUserResponse: object = { idValue: "" };

export const MsgCreateUserResponse = {
  encode(
    message: MsgCreateUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.idValue !== "") {
      writer.uint32(10).string(message.idValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = String(object.idValue);
    } else {
      message.idValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreateUserResponse): unknown {
    const obj: any = {};
    message.idValue !== undefined && (obj.idValue = message.idValue);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateUserResponse>
  ): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = object.idValue;
    } else {
      message.idValue = "";
    }
    return message;
  },
};

const baseMsgCreateTweet: object = { creator: "", description: "" };

export const MsgCreateTweet = {
  encode(message: MsgCreateTweet, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTweet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTweet } as MsgCreateTweet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTweet {
    const message = { ...baseMsgCreateTweet } as MsgCreateTweet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTweet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTweet>): MsgCreateTweet {
    const message = { ...baseMsgCreateTweet } as MsgCreateTweet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgCreateTweetResponse: object = { idValue: "" };

export const MsgCreateTweetResponse = {
  encode(
    message: MsgCreateTweetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.idValue !== "") {
      writer.uint32(10).string(message.idValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTweetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTweetResponse } as MsgCreateTweetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTweetResponse {
    const message = { ...baseMsgCreateTweetResponse } as MsgCreateTweetResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = String(object.idValue);
    } else {
      message.idValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTweetResponse): unknown {
    const obj: any = {};
    message.idValue !== undefined && (obj.idValue = message.idValue);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTweetResponse>
  ): MsgCreateTweetResponse {
    const message = { ...baseMsgCreateTweetResponse } as MsgCreateTweetResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = object.idValue;
    } else {
      message.idValue = "";
    }
    return message;
  },
};

const baseMsgLikeTweet: object = { creator: "", tweetId: 0, like: false };

export const MsgLikeTweet = {
  encode(message: MsgLikeTweet, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tweetId !== 0) {
      writer.uint32(16).uint64(message.tweetId);
    }
    if (message.like === true) {
      writer.uint32(24).bool(message.like);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLikeTweet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLikeTweet } as MsgLikeTweet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tweetId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.like = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLikeTweet {
    const message = { ...baseMsgLikeTweet } as MsgLikeTweet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.tweetId !== undefined && object.tweetId !== null) {
      message.tweetId = Number(object.tweetId);
    } else {
      message.tweetId = 0;
    }
    if (object.like !== undefined && object.like !== null) {
      message.like = Boolean(object.like);
    } else {
      message.like = false;
    }
    return message;
  },

  toJSON(message: MsgLikeTweet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tweetId !== undefined && (obj.tweetId = message.tweetId);
    message.like !== undefined && (obj.like = message.like);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLikeTweet>): MsgLikeTweet {
    const message = { ...baseMsgLikeTweet } as MsgLikeTweet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.tweetId !== undefined && object.tweetId !== null) {
      message.tweetId = object.tweetId;
    } else {
      message.tweetId = 0;
    }
    if (object.like !== undefined && object.like !== null) {
      message.like = object.like;
    } else {
      message.like = false;
    }
    return message;
  },
};

const baseMsgLikeTweetResponse: object = { done: false };

export const MsgLikeTweetResponse = {
  encode(
    message: MsgLikeTweetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.done === true) {
      writer.uint32(8).bool(message.done);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLikeTweetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLikeTweetResponse } as MsgLikeTweetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.done = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLikeTweetResponse {
    const message = { ...baseMsgLikeTweetResponse } as MsgLikeTweetResponse;
    if (object.done !== undefined && object.done !== null) {
      message.done = Boolean(object.done);
    } else {
      message.done = false;
    }
    return message;
  },

  toJSON(message: MsgLikeTweetResponse): unknown {
    const obj: any = {};
    message.done !== undefined && (obj.done = message.done);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLikeTweetResponse>): MsgLikeTweetResponse {
    const message = { ...baseMsgLikeTweetResponse } as MsgLikeTweetResponse;
    if (object.done !== undefined && object.done !== null) {
      message.done = object.done;
    } else {
      message.done = false;
    }
    return message;
  },
};

const baseMsgCreateComment: object = {
  creator: "",
  tweetId: 0,
  description: "",
};

export const MsgCreateComment = {
  encode(message: MsgCreateComment, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tweetId !== 0) {
      writer.uint32(16).uint64(message.tweetId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateComment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateComment } as MsgCreateComment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tweetId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateComment {
    const message = { ...baseMsgCreateComment } as MsgCreateComment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateComment): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tweetId !== undefined && (obj.tweetId = message.tweetId);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateComment>): MsgCreateComment {
    const message = { ...baseMsgCreateComment } as MsgCreateComment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateCommentResponse: object = { idValue: "" };

export const MsgCreateCommentResponse = {
  encode(
    message: MsgCreateCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.idValue !== "") {
      writer.uint32(10).string(message.idValue);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCommentResponse,
    } as MsgCreateCommentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCommentResponse {
    const message = {
      ...baseMsgCreateCommentResponse,
    } as MsgCreateCommentResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = String(object.idValue);
    } else {
      message.idValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCommentResponse): unknown {
    const obj: any = {};
    message.idValue !== undefined && (obj.idValue = message.idValue);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCommentResponse>
  ): MsgCreateCommentResponse {
    const message = {
      ...baseMsgCreateCommentResponse,
    } as MsgCreateCommentResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = object.idValue;
    } else {
      message.idValue = "";
    }
    return message;
  },
};

const baseMsgLikeComment: object = { creator: "", commentId: 0, like: false };

export const MsgLikeComment = {
  encode(message: MsgLikeComment, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.commentId !== 0) {
      writer.uint32(16).uint64(message.commentId);
    }
    if (message.like === true) {
      writer.uint32(24).bool(message.like);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLikeComment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLikeComment } as MsgLikeComment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.commentId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.like = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLikeComment {
    const message = { ...baseMsgLikeComment } as MsgLikeComment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.commentId !== undefined && object.commentId !== null) {
      message.commentId = Number(object.commentId);
    } else {
      message.commentId = 0;
    }
    if (object.like !== undefined && object.like !== null) {
      message.like = Boolean(object.like);
    } else {
      message.like = false;
    }
    return message;
  },

  toJSON(message: MsgLikeComment): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.like !== undefined && (obj.like = message.like);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLikeComment>): MsgLikeComment {
    const message = { ...baseMsgLikeComment } as MsgLikeComment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.commentId !== undefined && object.commentId !== null) {
      message.commentId = object.commentId;
    } else {
      message.commentId = 0;
    }
    if (object.like !== undefined && object.like !== null) {
      message.like = object.like;
    } else {
      message.like = false;
    }
    return message;
  },
};

const baseMsgLikeCommentResponse: object = { done: false };

export const MsgLikeCommentResponse = {
  encode(
    message: MsgLikeCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.done === true) {
      writer.uint32(8).bool(message.done);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLikeCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLikeCommentResponse } as MsgLikeCommentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.done = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLikeCommentResponse {
    const message = { ...baseMsgLikeCommentResponse } as MsgLikeCommentResponse;
    if (object.done !== undefined && object.done !== null) {
      message.done = Boolean(object.done);
    } else {
      message.done = false;
    }
    return message;
  },

  toJSON(message: MsgLikeCommentResponse): unknown {
    const obj: any = {};
    message.done !== undefined && (obj.done = message.done);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLikeCommentResponse>
  ): MsgLikeCommentResponse {
    const message = { ...baseMsgLikeCommentResponse } as MsgLikeCommentResponse;
    if (object.done !== undefined && object.done !== null) {
      message.done = object.done;
    } else {
      message.done = false;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
  CreateTweet(request: MsgCreateTweet): Promise<MsgCreateTweetResponse>;
  LikeTweet(request: MsgLikeTweet): Promise<MsgLikeTweetResponse>;
  CreateComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  LikeComment(request: MsgLikeComment): Promise<MsgLikeCommentResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Msg",
      "CreateUser",
      data
    );
    return promise.then((data) =>
      MsgCreateUserResponse.decode(new Reader(data))
    );
  }

  CreateTweet(request: MsgCreateTweet): Promise<MsgCreateTweetResponse> {
    const data = MsgCreateTweet.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Msg",
      "CreateTweet",
      data
    );
    return promise.then((data) =>
      MsgCreateTweetResponse.decode(new Reader(data))
    );
  }

  LikeTweet(request: MsgLikeTweet): Promise<MsgLikeTweetResponse> {
    const data = MsgLikeTweet.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Msg",
      "LikeTweet",
      data
    );
    return promise.then((data) =>
      MsgLikeTweetResponse.decode(new Reader(data))
    );
  }

  CreateComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse> {
    const data = MsgCreateComment.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Msg",
      "CreateComment",
      data
    );
    return promise.then((data) =>
      MsgCreateCommentResponse.decode(new Reader(data))
    );
  }

  LikeComment(request: MsgLikeComment): Promise<MsgLikeCommentResponse> {
    const data = MsgLikeComment.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Msg",
      "LikeComment",
      data
    );
    return promise.then((data) =>
      MsgLikeCommentResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
