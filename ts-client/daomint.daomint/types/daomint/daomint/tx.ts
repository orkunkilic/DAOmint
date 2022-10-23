/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "daomint.daomint";

export interface MsgCreateVoting {
  creator: string;
  title: string;
  desc: string;
  expiration: number;
  id: number;
}

export interface MsgCreateVotingResponse {
  id: number;
}

export interface MsgCreateVote {
  creator: string;
  votingID: number;
  option: number;
  id: number;
}

export interface MsgCreateVoteResponse {
  id: number;
}

function createBaseMsgCreateVoting(): MsgCreateVoting {
  return { creator: "", title: "", desc: "", expiration: 0, id: 0 };
}

export const MsgCreateVoting = {
  encode(message: MsgCreateVoting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.expiration !== 0) {
      writer.uint32(32).uint64(message.expiration);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVoting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVoting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.expiration = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVoting {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
      expiration: isSet(object.expiration) ? Number(object.expiration) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgCreateVoting): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.desc !== undefined && (obj.desc = message.desc);
    message.expiration !== undefined && (obj.expiration = Math.round(message.expiration));
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVoting>, I>>(object: I): MsgCreateVoting {
    const message = createBaseMsgCreateVoting();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.desc = object.desc ?? "";
    message.expiration = object.expiration ?? 0;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgCreateVotingResponse(): MsgCreateVotingResponse {
  return { id: 0 };
}

export const MsgCreateVotingResponse = {
  encode(message: MsgCreateVotingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVotingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVotingResponse();
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

  fromJSON(object: any): MsgCreateVotingResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateVotingResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVotingResponse>, I>>(object: I): MsgCreateVotingResponse {
    const message = createBaseMsgCreateVotingResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgCreateVote(): MsgCreateVote {
  return { creator: "", votingID: 0, option: 0, id: 0 };
}

export const MsgCreateVote = {
  encode(message: MsgCreateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.votingID !== 0) {
      writer.uint32(16).uint64(message.votingID);
    }
    if (message.option !== 0) {
      writer.uint32(24).uint64(message.option);
    }
    if (message.id !== 0) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.votingID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.option = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVote {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      votingID: isSet(object.votingID) ? Number(object.votingID) : 0,
      option: isSet(object.option) ? Number(object.option) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgCreateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.votingID !== undefined && (obj.votingID = Math.round(message.votingID));
    message.option !== undefined && (obj.option = Math.round(message.option));
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVote>, I>>(object: I): MsgCreateVote {
    const message = createBaseMsgCreateVote();
    message.creator = object.creator ?? "";
    message.votingID = object.votingID ?? 0;
    message.option = object.option ?? 0;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgCreateVoteResponse(): MsgCreateVoteResponse {
  return { id: 0 };
}

export const MsgCreateVoteResponse = {
  encode(message: MsgCreateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVoteResponse();
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

  fromJSON(object: any): MsgCreateVoteResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateVoteResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVoteResponse>, I>>(object: I): MsgCreateVoteResponse {
    const message = createBaseMsgCreateVoteResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateVoting(request: MsgCreateVoting): Promise<MsgCreateVotingResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateVoting = this.CreateVoting.bind(this);
    this.CreateVote = this.CreateVote.bind(this);
  }
  CreateVoting(request: MsgCreateVoting): Promise<MsgCreateVotingResponse> {
    const data = MsgCreateVoting.encode(request).finish();
    const promise = this.rpc.request("daomint.daomint.Msg", "CreateVoting", data);
    return promise.then((data) => MsgCreateVotingResponse.decode(new _m0.Reader(data)));
  }

  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse> {
    const data = MsgCreateVote.encode(request).finish();
    const promise = this.rpc.request("daomint.daomint.Msg", "CreateVote", data);
    return promise.then((data) => MsgCreateVoteResponse.decode(new _m0.Reader(data)));
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
