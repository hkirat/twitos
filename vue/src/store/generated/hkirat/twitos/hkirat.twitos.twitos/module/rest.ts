/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface TwitosComment {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  tweetId?: string;
  description?: string;

  /** @format uint64 */
  likes?: string;

  /** @format uint64 */
  timestamp?: string;

  /** @format uint64 */
  owner?: string;
}

export interface TwitosCommentLike {
  index?: string;

  /** @format uint64 */
  commentId?: string;

  /** @format uint64 */
  user?: string;
}

export interface TwitosDbHead {
  /** @format uint64 */
  userIndex?: string;

  /** @format uint64 */
  tweetIndex?: string;

  /** @format uint64 */
  commentIndex?: string;
}

export interface TwitosMsgCreateTweetResponse {
  idValue?: string;
}

export interface TwitosMsgCreateUserResponse {
  idValue?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type TwitosParams = object;

export interface TwitosQueryAllCommentLikeResponse {
  commentLike?: TwitosCommentLike[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TwitosQueryAllCommentResponse {
  Comment?: TwitosComment[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TwitosQueryAllTweetLikeResponse {
  tweetLike?: TwitosTweetLike[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TwitosQueryAllTweetResponse {
  Tweet?: TwitosTweet[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TwitosQueryAllUserResponse {
  user?: TwitosUser[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TwitosQueryAllWalletToUserIdResponse {
  walletToUserId?: TwitosWalletToUserId[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface TwitosQueryGetCommentLikeResponse {
  commentLike?: TwitosCommentLike;
}

export interface TwitosQueryGetCommentResponse {
  Comment?: TwitosComment;
}

export interface TwitosQueryGetDbHeadResponse {
  DbHead?: TwitosDbHead;
}

export interface TwitosQueryGetTweetLikeResponse {
  tweetLike?: TwitosTweetLike;
}

export interface TwitosQueryGetTweetResponse {
  Tweet?: TwitosTweet;
}

export interface TwitosQueryGetUserResponse {
  user?: TwitosUser;
}

export interface TwitosQueryGetWalletToUserIdResponse {
  walletToUserId?: TwitosWalletToUserId;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface TwitosQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: TwitosParams;
}

export interface TwitosTweet {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  tweetId?: string;

  /** @format uint64 */
  owner?: string;
  description?: string;

  /** @format uint64 */
  likes?: string;

  /** @format uint64 */
  comments?: string;
}

export interface TwitosTweetLike {
  index?: string;

  /** @format uint64 */
  tweetId?: string;

  /** @format uint64 */
  user?: string;
}

export interface TwitosUser {
  index?: string;
  address?: string;
  name?: string;
}

export interface TwitosWalletToUserId {
  index?: string;

  /** @format uint64 */
  userId?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title twitos/comment.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCommentAll
   * @summary Queries a list of Comment items.
   * @request GET:/hkirat/twitos/twitos/comment
   */
  queryCommentAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TwitosQueryAllCommentResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/comment`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryComment
   * @summary Queries a Comment by id.
   * @request GET:/hkirat/twitos/twitos/comment/{id}
   */
  queryComment = (id: string, params: RequestParams = {}) =>
    this.request<TwitosQueryGetCommentResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/comment/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCommentLikeAll
   * @summary Queries a list of CommentLike items.
   * @request GET:/hkirat/twitos/twitos/comment_like
   */
  queryCommentLikeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TwitosQueryAllCommentLikeResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/comment_like`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCommentLike
   * @summary Queries a CommentLike by index.
   * @request GET:/hkirat/twitos/twitos/comment_like/{index}
   */
  queryCommentLike = (index: string, params: RequestParams = {}) =>
    this.request<TwitosQueryGetCommentLikeResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/comment_like/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDbHead
   * @summary Queries a DbHead by index.
   * @request GET:/hkirat/twitos/twitos/db_head
   */
  queryDbHead = (params: RequestParams = {}) =>
    this.request<TwitosQueryGetDbHeadResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/db_head`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/hkirat/twitos/twitos/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<TwitosQueryParamsResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTweetAll
   * @summary Queries a list of Tweet items.
   * @request GET:/hkirat/twitos/twitos/tweet
   */
  queryTweetAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TwitosQueryAllTweetResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/tweet`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTweet
   * @summary Queries a Tweet by id.
   * @request GET:/hkirat/twitos/twitos/tweet/{id}
   */
  queryTweet = (id: string, params: RequestParams = {}) =>
    this.request<TwitosQueryGetTweetResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/tweet/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTweetLikeAll
   * @summary Queries a list of TweetLike items.
   * @request GET:/hkirat/twitos/twitos/tweet_like
   */
  queryTweetLikeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TwitosQueryAllTweetLikeResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/tweet_like`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTweetLike
   * @summary Queries a TweetLike by index.
   * @request GET:/hkirat/twitos/twitos/tweet_like/{index}
   */
  queryTweetLike = (index: string, params: RequestParams = {}) =>
    this.request<TwitosQueryGetTweetLikeResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/tweet_like/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUserAll
   * @summary Queries a list of User items.
   * @request GET:/hkirat/twitos/twitos/user
   */
  queryUserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TwitosQueryAllUserResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/user`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUser
   * @summary Queries a User by index.
   * @request GET:/hkirat/twitos/twitos/user/{index}
   */
  queryUser = (index: string, params: RequestParams = {}) =>
    this.request<TwitosQueryGetUserResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/user/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWalletToUserIdAll
   * @summary Queries a list of WalletToUserId items.
   * @request GET:/hkirat/twitos/twitos/wallet_to_user_id
   */
  queryWalletToUserIdAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TwitosQueryAllWalletToUserIdResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/wallet_to_user_id`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWalletToUserId
   * @summary Queries a WalletToUserId by index.
   * @request GET:/hkirat/twitos/twitos/wallet_to_user_id/{index}
   */
  queryWalletToUserId = (index: string, params: RequestParams = {}) =>
    this.request<TwitosQueryGetWalletToUserIdResponse, RpcStatus>({
      path: `/hkirat/twitos/twitos/wallet_to_user_id/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
