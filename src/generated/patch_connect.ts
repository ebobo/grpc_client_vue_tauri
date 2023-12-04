//
// Copyright (C) 2023 Autronica Fire and Security. All rights reserved.

// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file patch.proto (package patch, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PullRequest, PullResponse, PushRequest, PushResponse } from "./patch_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service patch.Service
 */
export const Service = {
  typeName: "patch.Service",
  methods: {
    /**
     * @generated from rpc patch.Service.Pull
     */
    pull: {
      name: "Pull",
      I: PullRequest,
      O: PullResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc patch.Service.Push
     */
    push: {
      name: "Push",
      I: PushRequest,
      O: PushResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
