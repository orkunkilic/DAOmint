/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Vote } from "./vote";
import { Voting } from "./voting";

export const protobufPackage = "daomint.daomint";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryVotingsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryVotingsResponse {
  votings: Voting[];
  pagination: PageResponse | undefined;
}

export interface QueryGetVoteRequest {
  id: number;
}

export interface QueryGetVoteResponse {
  Vote: Vote | undefined;
}

export interface QueryAllVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVoteResponse {
  Vote: Vote[];
  pagination: PageResponse | undefined;
}

export interface QueryVotesRequest {
  id: number;
  pagination: PageRequest | undefined;
}

export interface QueryVotesResponse {
  Voting: Voting | undefined;
  Vote: Vote[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryVotingsRequest(): QueryVotingsRequest {
  return { pagination: undefined };
}

export const QueryVotingsRequest = {
  encode(message: QueryVotingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingsRequest();
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

  fromJSON(object: any): QueryVotingsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryVotingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotingsRequest>, I>>(object: I): QueryVotingsRequest {
    const message = createBaseQueryVotingsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryVotingsResponse(): QueryVotingsResponse {
  return { votings: [], pagination: undefined };
}

export const QueryVotingsResponse = {
  encode(message: QueryVotingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votings) {
      Voting.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votings.push(Voting.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryVotingsResponse {
    return {
      votings: Array.isArray(object?.votings) ? object.votings.map((e: any) => Voting.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryVotingsResponse): unknown {
    const obj: any = {};
    if (message.votings) {
      obj.votings = message.votings.map((e) => e ? Voting.toJSON(e) : undefined);
    } else {
      obj.votings = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotingsResponse>, I>>(object: I): QueryVotingsResponse {
    const message = createBaseQueryVotingsResponse();
    message.votings = object.votings?.map((e) => Voting.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetVoteRequest(): QueryGetVoteRequest {
  return { id: 0 };
}

export const QueryGetVoteRequest = {
  encode(message: QueryGetVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVoteRequest();
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

  fromJSON(object: any): QueryGetVoteRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetVoteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetVoteRequest>, I>>(object: I): QueryGetVoteRequest {
    const message = createBaseQueryGetVoteRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetVoteResponse(): QueryGetVoteResponse {
  return { Vote: undefined };
}

export const QueryGetVoteResponse = {
  encode(message: QueryGetVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Vote !== undefined) {
      Vote.encode(message.Vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteResponse {
    return { Vote: isSet(object.Vote) ? Vote.fromJSON(object.Vote) : undefined };
  },

  toJSON(message: QueryGetVoteResponse): unknown {
    const obj: any = {};
    message.Vote !== undefined && (obj.Vote = message.Vote ? Vote.toJSON(message.Vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetVoteResponse>, I>>(object: I): QueryGetVoteResponse {
    const message = createBaseQueryGetVoteResponse();
    message.Vote = (object.Vote !== undefined && object.Vote !== null) ? Vote.fromPartial(object.Vote) : undefined;
    return message;
  },
};

function createBaseQueryAllVoteRequest(): QueryAllVoteRequest {
  return { pagination: undefined };
}

export const QueryAllVoteRequest = {
  encode(message: QueryAllVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVoteRequest();
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

  fromJSON(object: any): QueryAllVoteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVoteRequest>, I>>(object: I): QueryAllVoteRequest {
    const message = createBaseQueryAllVoteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllVoteResponse(): QueryAllVoteResponse {
  return { Vote: [], pagination: undefined };
}

export const QueryAllVoteResponse = {
  encode(message: QueryAllVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Vote) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Vote.push(Vote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllVoteResponse {
    return {
      Vote: Array.isArray(object?.Vote) ? object.Vote.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllVoteResponse): unknown {
    const obj: any = {};
    if (message.Vote) {
      obj.Vote = message.Vote.map((e) => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.Vote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVoteResponse>, I>>(object: I): QueryAllVoteResponse {
    const message = createBaseQueryAllVoteResponse();
    message.Vote = object.Vote?.map((e) => Vote.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryVotesRequest(): QueryVotesRequest {
  return { id: 0, pagination: undefined };
}

export const QueryVotesRequest = {
  encode(message: QueryVotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotesRequest>, I>>(object: I): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.id = object.id ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryVotesResponse(): QueryVotesResponse {
  return { Voting: undefined, Vote: [], pagination: undefined };
}

export const QueryVotesResponse = {
  encode(message: QueryVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Voting !== undefined) {
      Voting.encode(message.Voting, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Vote) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Voting = Voting.decode(reader, reader.uint32());
          break;
        case 2:
          message.Vote.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesResponse {
    return {
      Voting: isSet(object.Voting) ? Voting.fromJSON(object.Voting) : undefined,
      Vote: Array.isArray(object?.Vote) ? object.Vote.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};
    message.Voting !== undefined && (obj.Voting = message.Voting ? Voting.toJSON(message.Voting) : undefined);
    if (message.Vote) {
      obj.Vote = message.Vote.map((e) => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.Vote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotesResponse>, I>>(object: I): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.Voting = (object.Voting !== undefined && object.Voting !== null)
      ? Voting.fromPartial(object.Voting)
      : undefined;
    message.Vote = object.Vote?.map((e) => Vote.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Votings items. */
  Votings(request: QueryVotingsRequest): Promise<QueryVotingsResponse>;
  /** Queries a Vote by id. */
  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
  /** Queries a list of Vote items. */
  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
  /** Queries a list of Votes items. */
  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Votings = this.Votings.bind(this);
    this.Vote = this.Vote.bind(this);
    this.VoteAll = this.VoteAll.bind(this);
    this.Votes = this.Votes.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("daomint.daomint.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Votings(request: QueryVotingsRequest): Promise<QueryVotingsResponse> {
    const data = QueryVotingsRequest.encode(request).finish();
    const promise = this.rpc.request("daomint.daomint.Query", "Votings", data);
    return promise.then((data) => QueryVotingsResponse.decode(new _m0.Reader(data)));
  }

  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse> {
    const data = QueryGetVoteRequest.encode(request).finish();
    const promise = this.rpc.request("daomint.daomint.Query", "Vote", data);
    return promise.then((data) => QueryGetVoteResponse.decode(new _m0.Reader(data)));
  }

  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse> {
    const data = QueryAllVoteRequest.encode(request).finish();
    const promise = this.rpc.request("daomint.daomint.Query", "VoteAll", data);
    return promise.then((data) => QueryAllVoteResponse.decode(new _m0.Reader(data)));
  }

  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("daomint.daomint.Query", "Votes", data);
    return promise.then((data) => QueryVotesResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
