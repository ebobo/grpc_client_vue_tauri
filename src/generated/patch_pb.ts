//
// Copyright (C) 2023 Autronica Fire and Security. All rights reserved.

// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file patch.proto (package patch, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Meta } from "./common_pb.js";

/**
 * @generated from enum patch.StatusCode
 */
export enum StatusCode {
  /**
   * @generated from enum value: INVALID_REQUEST = 0;
   */
  INVALID_REQUEST = 0,

  /**
   * @generated from enum value: DROP = 1;
   */
  DROP = 1,

  /**
   * @generated from enum value: FULL_UPDATE = 2;
   */
  FULL_UPDATE = 2,

  /**
   * @generated from enum value: INCREMENTAL_UPDATE = 3;
   */
  INCREMENTAL_UPDATE = 3,

  /**
   * @generated from enum value: PENDING_UPDATE = 4;
   */
  PENDING_UPDATE = 4,

  /**
   * @generated from enum value: FINAL_UPDATE = 5;
   */
  FINAL_UPDATE = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(StatusCode)
proto3.util.setEnumType(StatusCode, "patch.StatusCode", [
  { no: 0, name: "INVALID_REQUEST" },
  { no: 1, name: "DROP" },
  { no: 2, name: "FULL_UPDATE" },
  { no: 3, name: "INCREMENTAL_UPDATE" },
  { no: 4, name: "PENDING_UPDATE" },
  { no: 5, name: "FINAL_UPDATE" },
]);

/**
 * @generated from enum patch.Type
 */
export enum Type {
  /**
   * @generated from enum value: PUT = 0;
   */
  PUT = 0,

  /**
   * @generated from enum value: DELETE = 1;
   */
  DELETE = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(Type)
proto3.util.setEnumType(Type, "patch.Type", [
  { no: 0, name: "PUT" },
  { no: 1, name: "DELETE" },
]);

/**
 * @generated from message patch.Query
 */
export class Query extends Message<Query> {
  /**
   * @generated from field: bytes path = 1;
   */
  path = new Uint8Array(0);

  /**
   * @generated from field: int32 limit = 2;
   */
  limit = 0;

  /**
   * @generated from field: int32 timeout = 3;
   */
  timeout = 0;

  constructor(data?: PartialMessage<Query>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "patch.Query";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "timeout", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Query {
    return new Query().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Query {
    return new Query().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Query {
    return new Query().fromJsonString(jsonString, options);
  }

  static equals(a: Query | PlainMessage<Query> | undefined, b: Query | PlainMessage<Query> | undefined): boolean {
    return proto3.util.equals(Query, a, b);
  }
}

/**
 * @generated from message patch.State
 */
export class State extends Message<State> {
  /**
   * @generated from field: bytes opaque = 1;
   */
  opaque = new Uint8Array(0);

  /**
   * @generated from field: bytes cursor = 2;
   */
  cursor = new Uint8Array(0);

  constructor(data?: PartialMessage<State>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "patch.State";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "opaque", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "cursor", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State {
    return new State().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State {
    return new State().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State {
    return new State().fromJsonString(jsonString, options);
  }

  static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean {
    return proto3.util.equals(State, a, b);
  }
}

/**
 * @generated from message patch.Item
 */
export class Item extends Message<Item> {
  /**
   * @generated from field: patch.Type type = 1;
   */
  type = Type.PUT;

  /**
   * @generated from field: bytes key = 2;
   */
  key = new Uint8Array(0);

  /**
   * @generated from field: bytes value = 3;
   */
  value = new Uint8Array(0);

  /**
   * @generated from field: common.Meta meta = 4;
   */
  meta?: Meta;

  constructor(data?: PartialMessage<Item>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "patch.Item";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(Type) },
    { no: 2, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "meta", kind: "message", T: Meta },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Item {
    return new Item().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Item {
    return new Item().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Item {
    return new Item().fromJsonString(jsonString, options);
  }

  static equals(a: Item | PlainMessage<Item> | undefined, b: Item | PlainMessage<Item> | undefined): boolean {
    return proto3.util.equals(Item, a, b);
  }
}

/**
 * @generated from message patch.PullRequest
 */
export class PullRequest extends Message<PullRequest> {
  /**
   * @generated from field: patch.Query query = 1;
   */
  query?: Query;

  /**
   * @generated from field: patch.State state = 2;
   */
  state?: State;

  constructor(data?: PartialMessage<PullRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "patch.PullRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "message", T: Query },
    { no: 2, name: "state", kind: "message", T: State },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PullRequest {
    return new PullRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PullRequest {
    return new PullRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PullRequest {
    return new PullRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PullRequest | PlainMessage<PullRequest> | undefined, b: PullRequest | PlainMessage<PullRequest> | undefined): boolean {
    return proto3.util.equals(PullRequest, a, b);
  }
}

/**
 * @generated from message patch.PullResponse
 */
export class PullResponse extends Message<PullResponse> {
  /**
   * @generated from field: patch.Query query = 1;
   */
  query?: Query;

  /**
   * @generated from field: patch.State state = 2;
   */
  state?: State;

  /**
   * @generated from field: repeated patch.Item list = 3;
   */
  list: Item[] = [];

  /**
   * @generated from field: patch.StatusCode status = 4;
   */
  status = StatusCode.INVALID_REQUEST;

  constructor(data?: PartialMessage<PullResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "patch.PullResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "message", T: Query },
    { no: 2, name: "state", kind: "message", T: State },
    { no: 3, name: "list", kind: "message", T: Item, repeated: true },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(StatusCode) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PullResponse {
    return new PullResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PullResponse {
    return new PullResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PullResponse {
    return new PullResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PullResponse | PlainMessage<PullResponse> | undefined, b: PullResponse | PlainMessage<PullResponse> | undefined): boolean {
    return proto3.util.equals(PullResponse, a, b);
  }
}

/**
 * @generated from message patch.PushRequest
 */
export class PushRequest extends Message<PushRequest> {
  /**
   * @generated from field: patch.Query query = 1;
   */
  query?: Query;

  /**
   * @generated from field: patch.State state = 2;
   */
  state?: State;

  /**
   * @generated from field: repeated patch.Item list = 3;
   */
  list: Item[] = [];

  /**
   * @generated from field: patch.StatusCode status = 4;
   */
  status = StatusCode.INVALID_REQUEST;

  /**
   * @generated from field: bytes channel = 5;
   */
  channel = new Uint8Array(0);

  constructor(data?: PartialMessage<PushRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "patch.PushRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "message", T: Query },
    { no: 2, name: "state", kind: "message", T: State },
    { no: 3, name: "list", kind: "message", T: Item, repeated: true },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(StatusCode) },
    { no: 5, name: "channel", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PushRequest {
    return new PushRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PushRequest {
    return new PushRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PushRequest {
    return new PushRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PushRequest | PlainMessage<PushRequest> | undefined, b: PushRequest | PlainMessage<PushRequest> | undefined): boolean {
    return proto3.util.equals(PushRequest, a, b);
  }
}

/**
 * @generated from message patch.PushResponse
 */
export class PushResponse extends Message<PushResponse> {
  /**
   * @generated from field: patch.Query query = 1;
   */
  query?: Query;

  /**
   * @generated from field: patch.State state = 2;
   */
  state?: State;

  /**
   * @generated from field: patch.StatusCode status = 3;
   */
  status = StatusCode.INVALID_REQUEST;

  /**
   * @generated from field: bytes channel = 4;
   */
  channel = new Uint8Array(0);

  constructor(data?: PartialMessage<PushResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "patch.PushResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "message", T: Query },
    { no: 2, name: "state", kind: "message", T: State },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(StatusCode) },
    { no: 4, name: "channel", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PushResponse {
    return new PushResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PushResponse {
    return new PushResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PushResponse {
    return new PushResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PushResponse | PlainMessage<PushResponse> | undefined, b: PushResponse | PlainMessage<PushResponse> | undefined): boolean {
    return proto3.util.equals(PushResponse, a, b);
  }
}
