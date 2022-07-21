/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../twitos/params";
import { DbHead } from "../twitos/db_head";
import { User } from "../twitos/user";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { WalletToUserId } from "../twitos/wallet_to_user_id";
import { Tweet } from "../twitos/tweet";
import { TweetLike } from "../twitos/tweet_like";
import { Comment } from "../twitos/comment";
import { CommentLike } from "../twitos/comment_like";

export const protobufPackage = "hkirat.twitos.twitos";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetDbHeadRequest {}

export interface QueryGetDbHeadResponse {
  DbHead: DbHead | undefined;
}

export interface QueryGetUserRequest {
  index: string;
}

export interface QueryGetUserResponse {
  user: User | undefined;
}

export interface QueryAllUserRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllUserResponse {
  user: User[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWalletToUserIdRequest {
  index: string;
}

export interface QueryGetWalletToUserIdResponse {
  walletToUserId: WalletToUserId | undefined;
}

export interface QueryAllWalletToUserIdRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWalletToUserIdResponse {
  walletToUserId: WalletToUserId[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTweetRequest {
  id: number;
}

export interface QueryGetTweetResponse {
  Tweet: Tweet | undefined;
}

export interface QueryAllTweetRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTweetResponse {
  Tweet: Tweet[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTweetLikeRequest {
  index: string;
}

export interface QueryGetTweetLikeResponse {
  tweetLike: TweetLike | undefined;
}

export interface QueryAllTweetLikeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTweetLikeResponse {
  tweetLike: TweetLike[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCommentRequest {
  id: number;
}

export interface QueryGetCommentResponse {
  Comment: Comment | undefined;
}

export interface QueryAllCommentRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCommentResponse {
  Comment: Comment[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCommentLikeRequest {
  index: string;
}

export interface QueryGetCommentLikeResponse {
  commentLike: CommentLike | undefined;
}

export interface QueryAllCommentLikeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCommentLikeResponse {
  commentLike: CommentLike[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetDbHeadRequest: object = {};

export const QueryGetDbHeadRequest = {
  encode(_: QueryGetDbHeadRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDbHeadRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDbHeadRequest } as QueryGetDbHeadRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetDbHeadRequest {
    const message = { ...baseQueryGetDbHeadRequest } as QueryGetDbHeadRequest;
    return message;
  },

  toJSON(_: QueryGetDbHeadRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetDbHeadRequest>): QueryGetDbHeadRequest {
    const message = { ...baseQueryGetDbHeadRequest } as QueryGetDbHeadRequest;
    return message;
  },
};

const baseQueryGetDbHeadResponse: object = {};

export const QueryGetDbHeadResponse = {
  encode(
    message: QueryGetDbHeadResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DbHead !== undefined) {
      DbHead.encode(message.DbHead, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDbHeadResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDbHeadResponse } as QueryGetDbHeadResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DbHead = DbHead.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDbHeadResponse {
    const message = { ...baseQueryGetDbHeadResponse } as QueryGetDbHeadResponse;
    if (object.DbHead !== undefined && object.DbHead !== null) {
      message.DbHead = DbHead.fromJSON(object.DbHead);
    } else {
      message.DbHead = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDbHeadResponse): unknown {
    const obj: any = {};
    message.DbHead !== undefined &&
      (obj.DbHead = message.DbHead ? DbHead.toJSON(message.DbHead) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDbHeadResponse>
  ): QueryGetDbHeadResponse {
    const message = { ...baseQueryGetDbHeadResponse } as QueryGetDbHeadResponse;
    if (object.DbHead !== undefined && object.DbHead !== null) {
      message.DbHead = DbHead.fromPartial(object.DbHead);
    } else {
      message.DbHead = undefined;
    }
    return message;
  },
};

const baseQueryGetUserRequest: object = { index: "" };

export const QueryGetUserRequest = {
  encode(
    message: QueryGetUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetUserRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserRequest>): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetUserResponse: object = {};

export const QueryGetUserResponse = {
  encode(
    message: QueryGetUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserResponse>): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseQueryAllUserRequest: object = {};

export const QueryAllUserRequest = {
  encode(
    message: QueryAllUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserRequest>): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUserResponse: object = {};

export const QueryAllUserResponse = {
  encode(
    message: QueryAllUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.user) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.user = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user.push(User.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.user = [];
    if (object.user !== undefined && object.user !== null) {
      for (const e of object.user) {
        message.user.push(User.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserResponse): unknown {
    const obj: any = {};
    if (message.user) {
      obj.user = message.user.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.user = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserResponse>): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.user = [];
    if (object.user !== undefined && object.user !== null) {
      for (const e of object.user) {
        message.user.push(User.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetWalletToUserIdRequest: object = { index: "" };

export const QueryGetWalletToUserIdRequest = {
  encode(
    message: QueryGetWalletToUserIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWalletToUserIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWalletToUserIdRequest,
    } as QueryGetWalletToUserIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWalletToUserIdRequest {
    const message = {
      ...baseQueryGetWalletToUserIdRequest,
    } as QueryGetWalletToUserIdRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetWalletToUserIdRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWalletToUserIdRequest>
  ): QueryGetWalletToUserIdRequest {
    const message = {
      ...baseQueryGetWalletToUserIdRequest,
    } as QueryGetWalletToUserIdRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetWalletToUserIdResponse: object = {};

export const QueryGetWalletToUserIdResponse = {
  encode(
    message: QueryGetWalletToUserIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.walletToUserId !== undefined) {
      WalletToUserId.encode(
        message.walletToUserId,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWalletToUserIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWalletToUserIdResponse,
    } as QueryGetWalletToUserIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletToUserId = WalletToUserId.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWalletToUserIdResponse {
    const message = {
      ...baseQueryGetWalletToUserIdResponse,
    } as QueryGetWalletToUserIdResponse;
    if (object.walletToUserId !== undefined && object.walletToUserId !== null) {
      message.walletToUserId = WalletToUserId.fromJSON(object.walletToUserId);
    } else {
      message.walletToUserId = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWalletToUserIdResponse): unknown {
    const obj: any = {};
    message.walletToUserId !== undefined &&
      (obj.walletToUserId = message.walletToUserId
        ? WalletToUserId.toJSON(message.walletToUserId)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWalletToUserIdResponse>
  ): QueryGetWalletToUserIdResponse {
    const message = {
      ...baseQueryGetWalletToUserIdResponse,
    } as QueryGetWalletToUserIdResponse;
    if (object.walletToUserId !== undefined && object.walletToUserId !== null) {
      message.walletToUserId = WalletToUserId.fromPartial(
        object.walletToUserId
      );
    } else {
      message.walletToUserId = undefined;
    }
    return message;
  },
};

const baseQueryAllWalletToUserIdRequest: object = {};

export const QueryAllWalletToUserIdRequest = {
  encode(
    message: QueryAllWalletToUserIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWalletToUserIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWalletToUserIdRequest,
    } as QueryAllWalletToUserIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWalletToUserIdRequest {
    const message = {
      ...baseQueryAllWalletToUserIdRequest,
    } as QueryAllWalletToUserIdRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWalletToUserIdRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWalletToUserIdRequest>
  ): QueryAllWalletToUserIdRequest {
    const message = {
      ...baseQueryAllWalletToUserIdRequest,
    } as QueryAllWalletToUserIdRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWalletToUserIdResponse: object = {};

export const QueryAllWalletToUserIdResponse = {
  encode(
    message: QueryAllWalletToUserIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.walletToUserId) {
      WalletToUserId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWalletToUserIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWalletToUserIdResponse,
    } as QueryAllWalletToUserIdResponse;
    message.walletToUserId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletToUserId.push(
            WalletToUserId.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWalletToUserIdResponse {
    const message = {
      ...baseQueryAllWalletToUserIdResponse,
    } as QueryAllWalletToUserIdResponse;
    message.walletToUserId = [];
    if (object.walletToUserId !== undefined && object.walletToUserId !== null) {
      for (const e of object.walletToUserId) {
        message.walletToUserId.push(WalletToUserId.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWalletToUserIdResponse): unknown {
    const obj: any = {};
    if (message.walletToUserId) {
      obj.walletToUserId = message.walletToUserId.map((e) =>
        e ? WalletToUserId.toJSON(e) : undefined
      );
    } else {
      obj.walletToUserId = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWalletToUserIdResponse>
  ): QueryAllWalletToUserIdResponse {
    const message = {
      ...baseQueryAllWalletToUserIdResponse,
    } as QueryAllWalletToUserIdResponse;
    message.walletToUserId = [];
    if (object.walletToUserId !== undefined && object.walletToUserId !== null) {
      for (const e of object.walletToUserId) {
        message.walletToUserId.push(WalletToUserId.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTweetRequest: object = { id: 0 };

export const QueryGetTweetRequest = {
  encode(
    message: QueryGetTweetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTweetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTweetRequest } as QueryGetTweetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTweetRequest {
    const message = { ...baseQueryGetTweetRequest } as QueryGetTweetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTweetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTweetRequest>): QueryGetTweetRequest {
    const message = { ...baseQueryGetTweetRequest } as QueryGetTweetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTweetResponse: object = {};

export const QueryGetTweetResponse = {
  encode(
    message: QueryGetTweetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Tweet !== undefined) {
      Tweet.encode(message.Tweet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTweetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTweetResponse } as QueryGetTweetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Tweet = Tweet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTweetResponse {
    const message = { ...baseQueryGetTweetResponse } as QueryGetTweetResponse;
    if (object.Tweet !== undefined && object.Tweet !== null) {
      message.Tweet = Tweet.fromJSON(object.Tweet);
    } else {
      message.Tweet = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTweetResponse): unknown {
    const obj: any = {};
    message.Tweet !== undefined &&
      (obj.Tweet = message.Tweet ? Tweet.toJSON(message.Tweet) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTweetResponse>
  ): QueryGetTweetResponse {
    const message = { ...baseQueryGetTweetResponse } as QueryGetTweetResponse;
    if (object.Tweet !== undefined && object.Tweet !== null) {
      message.Tweet = Tweet.fromPartial(object.Tweet);
    } else {
      message.Tweet = undefined;
    }
    return message;
  },
};

const baseQueryAllTweetRequest: object = {};

export const QueryAllTweetRequest = {
  encode(
    message: QueryAllTweetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTweetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTweetRequest } as QueryAllTweetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTweetRequest {
    const message = { ...baseQueryAllTweetRequest } as QueryAllTweetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTweetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllTweetRequest>): QueryAllTweetRequest {
    const message = { ...baseQueryAllTweetRequest } as QueryAllTweetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTweetResponse: object = {};

export const QueryAllTweetResponse = {
  encode(
    message: QueryAllTweetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Tweet) {
      Tweet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTweetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTweetResponse } as QueryAllTweetResponse;
    message.Tweet = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Tweet.push(Tweet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTweetResponse {
    const message = { ...baseQueryAllTweetResponse } as QueryAllTweetResponse;
    message.Tweet = [];
    if (object.Tweet !== undefined && object.Tweet !== null) {
      for (const e of object.Tweet) {
        message.Tweet.push(Tweet.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTweetResponse): unknown {
    const obj: any = {};
    if (message.Tweet) {
      obj.Tweet = message.Tweet.map((e) => (e ? Tweet.toJSON(e) : undefined));
    } else {
      obj.Tweet = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTweetResponse>
  ): QueryAllTweetResponse {
    const message = { ...baseQueryAllTweetResponse } as QueryAllTweetResponse;
    message.Tweet = [];
    if (object.Tweet !== undefined && object.Tweet !== null) {
      for (const e of object.Tweet) {
        message.Tweet.push(Tweet.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTweetLikeRequest: object = { index: "" };

export const QueryGetTweetLikeRequest = {
  encode(
    message: QueryGetTweetLikeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTweetLikeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTweetLikeRequest,
    } as QueryGetTweetLikeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTweetLikeRequest {
    const message = {
      ...baseQueryGetTweetLikeRequest,
    } as QueryGetTweetLikeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetTweetLikeRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTweetLikeRequest>
  ): QueryGetTweetLikeRequest {
    const message = {
      ...baseQueryGetTweetLikeRequest,
    } as QueryGetTweetLikeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetTweetLikeResponse: object = {};

export const QueryGetTweetLikeResponse = {
  encode(
    message: QueryGetTweetLikeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.tweetLike !== undefined) {
      TweetLike.encode(message.tweetLike, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTweetLikeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTweetLikeResponse,
    } as QueryGetTweetLikeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tweetLike = TweetLike.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTweetLikeResponse {
    const message = {
      ...baseQueryGetTweetLikeResponse,
    } as QueryGetTweetLikeResponse;
    if (object.tweetLike !== undefined && object.tweetLike !== null) {
      message.tweetLike = TweetLike.fromJSON(object.tweetLike);
    } else {
      message.tweetLike = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTweetLikeResponse): unknown {
    const obj: any = {};
    message.tweetLike !== undefined &&
      (obj.tweetLike = message.tweetLike
        ? TweetLike.toJSON(message.tweetLike)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTweetLikeResponse>
  ): QueryGetTweetLikeResponse {
    const message = {
      ...baseQueryGetTweetLikeResponse,
    } as QueryGetTweetLikeResponse;
    if (object.tweetLike !== undefined && object.tweetLike !== null) {
      message.tweetLike = TweetLike.fromPartial(object.tweetLike);
    } else {
      message.tweetLike = undefined;
    }
    return message;
  },
};

const baseQueryAllTweetLikeRequest: object = {};

export const QueryAllTweetLikeRequest = {
  encode(
    message: QueryAllTweetLikeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTweetLikeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTweetLikeRequest,
    } as QueryAllTweetLikeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTweetLikeRequest {
    const message = {
      ...baseQueryAllTweetLikeRequest,
    } as QueryAllTweetLikeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTweetLikeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTweetLikeRequest>
  ): QueryAllTweetLikeRequest {
    const message = {
      ...baseQueryAllTweetLikeRequest,
    } as QueryAllTweetLikeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTweetLikeResponse: object = {};

export const QueryAllTweetLikeResponse = {
  encode(
    message: QueryAllTweetLikeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.tweetLike) {
      TweetLike.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTweetLikeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTweetLikeResponse,
    } as QueryAllTweetLikeResponse;
    message.tweetLike = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tweetLike.push(TweetLike.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTweetLikeResponse {
    const message = {
      ...baseQueryAllTweetLikeResponse,
    } as QueryAllTweetLikeResponse;
    message.tweetLike = [];
    if (object.tweetLike !== undefined && object.tweetLike !== null) {
      for (const e of object.tweetLike) {
        message.tweetLike.push(TweetLike.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTweetLikeResponse): unknown {
    const obj: any = {};
    if (message.tweetLike) {
      obj.tweetLike = message.tweetLike.map((e) =>
        e ? TweetLike.toJSON(e) : undefined
      );
    } else {
      obj.tweetLike = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTweetLikeResponse>
  ): QueryAllTweetLikeResponse {
    const message = {
      ...baseQueryAllTweetLikeResponse,
    } as QueryAllTweetLikeResponse;
    message.tweetLike = [];
    if (object.tweetLike !== undefined && object.tweetLike !== null) {
      for (const e of object.tweetLike) {
        message.tweetLike.push(TweetLike.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCommentRequest: object = { id: 0 };

export const QueryGetCommentRequest = {
  encode(
    message: QueryGetCommentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCommentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentRequest {
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCommentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentRequest>
  ): QueryGetCommentRequest {
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCommentResponse: object = {};

export const QueryGetCommentResponse = {
  encode(
    message: QueryGetCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Comment = Comment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentResponse {
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    if (object.Comment !== undefined && object.Comment !== null) {
      message.Comment = Comment.fromJSON(object.Comment);
    } else {
      message.Comment = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCommentResponse): unknown {
    const obj: any = {};
    message.Comment !== undefined &&
      (obj.Comment = message.Comment
        ? Comment.toJSON(message.Comment)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentResponse>
  ): QueryGetCommentResponse {
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    if (object.Comment !== undefined && object.Comment !== null) {
      message.Comment = Comment.fromPartial(object.Comment);
    } else {
      message.Comment = undefined;
    }
    return message;
  },
};

const baseQueryAllCommentRequest: object = {};

export const QueryAllCommentRequest = {
  encode(
    message: QueryAllCommentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCommentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentRequest {
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommentRequest>
  ): QueryAllCommentRequest {
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCommentResponse: object = {};

export const QueryAllCommentResponse = {
  encode(
    message: QueryAllCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Comment) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Comment.push(Comment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentResponse {
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    if (object.Comment !== undefined && object.Comment !== null) {
      for (const e of object.Comment) {
        message.Comment.push(Comment.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommentResponse): unknown {
    const obj: any = {};
    if (message.Comment) {
      obj.Comment = message.Comment.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.Comment = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommentResponse>
  ): QueryAllCommentResponse {
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    if (object.Comment !== undefined && object.Comment !== null) {
      for (const e of object.Comment) {
        message.Comment.push(Comment.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCommentLikeRequest: object = { index: "" };

export const QueryGetCommentLikeRequest = {
  encode(
    message: QueryGetCommentLikeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCommentLikeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentLikeRequest,
    } as QueryGetCommentLikeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentLikeRequest {
    const message = {
      ...baseQueryGetCommentLikeRequest,
    } as QueryGetCommentLikeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetCommentLikeRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentLikeRequest>
  ): QueryGetCommentLikeRequest {
    const message = {
      ...baseQueryGetCommentLikeRequest,
    } as QueryGetCommentLikeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetCommentLikeResponse: object = {};

export const QueryGetCommentLikeResponse = {
  encode(
    message: QueryGetCommentLikeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.commentLike !== undefined) {
      CommentLike.encode(
        message.commentLike,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCommentLikeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentLikeResponse,
    } as QueryGetCommentLikeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commentLike = CommentLike.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentLikeResponse {
    const message = {
      ...baseQueryGetCommentLikeResponse,
    } as QueryGetCommentLikeResponse;
    if (object.commentLike !== undefined && object.commentLike !== null) {
      message.commentLike = CommentLike.fromJSON(object.commentLike);
    } else {
      message.commentLike = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCommentLikeResponse): unknown {
    const obj: any = {};
    message.commentLike !== undefined &&
      (obj.commentLike = message.commentLike
        ? CommentLike.toJSON(message.commentLike)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentLikeResponse>
  ): QueryGetCommentLikeResponse {
    const message = {
      ...baseQueryGetCommentLikeResponse,
    } as QueryGetCommentLikeResponse;
    if (object.commentLike !== undefined && object.commentLike !== null) {
      message.commentLike = CommentLike.fromPartial(object.commentLike);
    } else {
      message.commentLike = undefined;
    }
    return message;
  },
};

const baseQueryAllCommentLikeRequest: object = {};

export const QueryAllCommentLikeRequest = {
  encode(
    message: QueryAllCommentLikeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCommentLikeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommentLikeRequest,
    } as QueryAllCommentLikeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentLikeRequest {
    const message = {
      ...baseQueryAllCommentLikeRequest,
    } as QueryAllCommentLikeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommentLikeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommentLikeRequest>
  ): QueryAllCommentLikeRequest {
    const message = {
      ...baseQueryAllCommentLikeRequest,
    } as QueryAllCommentLikeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCommentLikeResponse: object = {};

export const QueryAllCommentLikeResponse = {
  encode(
    message: QueryAllCommentLikeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.commentLike) {
      CommentLike.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCommentLikeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommentLikeResponse,
    } as QueryAllCommentLikeResponse;
    message.commentLike = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commentLike.push(CommentLike.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentLikeResponse {
    const message = {
      ...baseQueryAllCommentLikeResponse,
    } as QueryAllCommentLikeResponse;
    message.commentLike = [];
    if (object.commentLike !== undefined && object.commentLike !== null) {
      for (const e of object.commentLike) {
        message.commentLike.push(CommentLike.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommentLikeResponse): unknown {
    const obj: any = {};
    if (message.commentLike) {
      obj.commentLike = message.commentLike.map((e) =>
        e ? CommentLike.toJSON(e) : undefined
      );
    } else {
      obj.commentLike = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommentLikeResponse>
  ): QueryAllCommentLikeResponse {
    const message = {
      ...baseQueryAllCommentLikeResponse,
    } as QueryAllCommentLikeResponse;
    message.commentLike = [];
    if (object.commentLike !== undefined && object.commentLike !== null) {
      for (const e of object.commentLike) {
        message.commentLike.push(CommentLike.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a DbHead by index. */
  DbHead(request: QueryGetDbHeadRequest): Promise<QueryGetDbHeadResponse>;
  /** Queries a User by index. */
  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
  /** Queries a list of User items. */
  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
  /** Queries a WalletToUserId by index. */
  WalletToUserId(
    request: QueryGetWalletToUserIdRequest
  ): Promise<QueryGetWalletToUserIdResponse>;
  /** Queries a list of WalletToUserId items. */
  WalletToUserIdAll(
    request: QueryAllWalletToUserIdRequest
  ): Promise<QueryAllWalletToUserIdResponse>;
  /** Queries a Tweet by id. */
  Tweet(request: QueryGetTweetRequest): Promise<QueryGetTweetResponse>;
  /** Queries a list of Tweet items. */
  TweetAll(request: QueryAllTweetRequest): Promise<QueryAllTweetResponse>;
  /** Queries a TweetLike by index. */
  TweetLike(
    request: QueryGetTweetLikeRequest
  ): Promise<QueryGetTweetLikeResponse>;
  /** Queries a list of TweetLike items. */
  TweetLikeAll(
    request: QueryAllTweetLikeRequest
  ): Promise<QueryAllTweetLikeResponse>;
  /** Queries a Comment by id. */
  Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse>;
  /** Queries a list of Comment items. */
  CommentAll(request: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
  /** Queries a CommentLike by index. */
  CommentLike(
    request: QueryGetCommentLikeRequest
  ): Promise<QueryGetCommentLikeResponse>;
  /** Queries a list of CommentLike items. */
  CommentLikeAll(
    request: QueryAllCommentLikeRequest
  ): Promise<QueryAllCommentLikeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  DbHead(request: QueryGetDbHeadRequest): Promise<QueryGetDbHeadResponse> {
    const data = QueryGetDbHeadRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "DbHead",
      data
    );
    return promise.then((data) =>
      QueryGetDbHeadResponse.decode(new Reader(data))
    );
  }

  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
    const data = QueryGetUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "User",
      data
    );
    return promise.then((data) =>
      QueryGetUserResponse.decode(new Reader(data))
    );
  }

  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse> {
    const data = QueryAllUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "UserAll",
      data
    );
    return promise.then((data) =>
      QueryAllUserResponse.decode(new Reader(data))
    );
  }

  WalletToUserId(
    request: QueryGetWalletToUserIdRequest
  ): Promise<QueryGetWalletToUserIdResponse> {
    const data = QueryGetWalletToUserIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "WalletToUserId",
      data
    );
    return promise.then((data) =>
      QueryGetWalletToUserIdResponse.decode(new Reader(data))
    );
  }

  WalletToUserIdAll(
    request: QueryAllWalletToUserIdRequest
  ): Promise<QueryAllWalletToUserIdResponse> {
    const data = QueryAllWalletToUserIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "WalletToUserIdAll",
      data
    );
    return promise.then((data) =>
      QueryAllWalletToUserIdResponse.decode(new Reader(data))
    );
  }

  Tweet(request: QueryGetTweetRequest): Promise<QueryGetTweetResponse> {
    const data = QueryGetTweetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "Tweet",
      data
    );
    return promise.then((data) =>
      QueryGetTweetResponse.decode(new Reader(data))
    );
  }

  TweetAll(request: QueryAllTweetRequest): Promise<QueryAllTweetResponse> {
    const data = QueryAllTweetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "TweetAll",
      data
    );
    return promise.then((data) =>
      QueryAllTweetResponse.decode(new Reader(data))
    );
  }

  TweetLike(
    request: QueryGetTweetLikeRequest
  ): Promise<QueryGetTweetLikeResponse> {
    const data = QueryGetTweetLikeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "TweetLike",
      data
    );
    return promise.then((data) =>
      QueryGetTweetLikeResponse.decode(new Reader(data))
    );
  }

  TweetLikeAll(
    request: QueryAllTweetLikeRequest
  ): Promise<QueryAllTweetLikeResponse> {
    const data = QueryAllTweetLikeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "TweetLikeAll",
      data
    );
    return promise.then((data) =>
      QueryAllTweetLikeResponse.decode(new Reader(data))
    );
  }

  Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse> {
    const data = QueryGetCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "Comment",
      data
    );
    return promise.then((data) =>
      QueryGetCommentResponse.decode(new Reader(data))
    );
  }

  CommentAll(
    request: QueryAllCommentRequest
  ): Promise<QueryAllCommentResponse> {
    const data = QueryAllCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "CommentAll",
      data
    );
    return promise.then((data) =>
      QueryAllCommentResponse.decode(new Reader(data))
    );
  }

  CommentLike(
    request: QueryGetCommentLikeRequest
  ): Promise<QueryGetCommentLikeResponse> {
    const data = QueryGetCommentLikeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "CommentLike",
      data
    );
    return promise.then((data) =>
      QueryGetCommentLikeResponse.decode(new Reader(data))
    );
  }

  CommentLikeAll(
    request: QueryAllCommentLikeRequest
  ): Promise<QueryAllCommentLikeResponse> {
    const data = QueryAllCommentLikeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hkirat.twitos.twitos.Query",
      "CommentLikeAll",
      data
    );
    return promise.then((data) =>
      QueryAllCommentLikeResponse.decode(new Reader(data))
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
