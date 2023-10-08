// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/account/fission/v1/fission.proto (package bilibili.account.fission.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { EntranceReply, EntranceReq, PrivacyReply, PrivacyReq, WindowReply, WindowReq } from "./fission_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Fission裂变
 *
 * @generated from service bilibili.account.fission.v1.Fission
 */
export const Fission = {
  typeName: "bilibili.account.fission.v1.Fission",
  methods: {
    /**
     * 活动入口
     *
     * @generated from rpc bilibili.account.fission.v1.Fission.Entrance
     */
    entrance: {
      name: "Entrance",
      I: EntranceReq,
      O: EntranceReply,
      kind: MethodKind.Unary,
    },
    /**
     * 首页弹窗
     *
     * @generated from rpc bilibili.account.fission.v1.Fission.Window
     */
    window: {
      name: "Window",
      I: WindowReq,
      O: WindowReply,
      kind: MethodKind.Unary,
    },
    /**
     * 
     *
     * @generated from rpc bilibili.account.fission.v1.Fission.Privacy
     */
    privacy: {
      name: "Privacy",
      I: PrivacyReq,
      O: PrivacyReply,
      kind: MethodKind.Unary,
    },
  }
};
