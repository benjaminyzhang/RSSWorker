// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/gaia/gw/gw_api.proto (package bilibili.gaia.gw, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * 加密方式
 *
 * @generated from enum bilibili.gaia.gw.EncryptType
 */
export const EncryptType = proto3.makeEnum(
  "bilibili.gaia.gw.EncryptType",
  [
    {no: 0, name: "INVALID_ENCRYPT_TYPE"},
    {no: 1, name: "CLIENT_AES"},
    {no: 2, name: "SERVER_RSA_AES"},
  ],
);

/**
 * 负载类型
 *
 * @generated from enum bilibili.gaia.gw.PayloadType
 */
export const PayloadType = proto3.makeEnum(
  "bilibili.gaia.gw.PayloadType",
  [
    {no: 0, name: "INVALID_PAYLOAD"},
    {no: 1, name: "DEVICE_APP_LIST"},
  ],
);

/**
 * 待加密的pb对象
 *
 * @generated from message bilibili.gaia.gw.DeviceAppList
 */
export const DeviceAppList = proto3.makeMessageType(
  "bilibili.gaia.gw.DeviceAppList",
  () => [
    { no: 1, name: "source", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "system_app_list", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "user_app_list", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message bilibili.gaia.gw.FetchPublicKeyReply
 */
export const FetchPublicKeyReply = proto3.makeMessageType(
  "bilibili.gaia.gw.FetchPublicKeyReply",
  () => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "public_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "deadline", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.gaia.gw.GaiaDeviceBasicInfo
 */
export const GaiaDeviceBasicInfo = proto3.makeMessageType(
  "bilibili.gaia.gw.GaiaDeviceBasicInfo",
  () => [
    { no: 1, name: "platform", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "device", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "mobi_app", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "origin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "app_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "sdkver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "app_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "app_version_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "build", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "brand", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "model", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "osver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "user_agent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "buvid_local", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "buvid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "mid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "fts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 19, name: "first", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 20, name: "network", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 应用列表上报-请求
 *
 * @generated from message bilibili.gaia.gw.GaiaEncryptMsgReq
 */
export const GaiaEncryptMsgReq = proto3.makeMessageType(
  "bilibili.gaia.gw.GaiaEncryptMsgReq",
  () => [
    { no: 1, name: "header", kind: "message", T: GaiaMsgHeader },
    { no: 2, name: "encrypt_payload", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * 风控通用消息头
 *
 * @generated from message bilibili.gaia.gw.GaiaMsgHeader
 */
export const GaiaMsgHeader = proto3.makeMessageType(
  "bilibili.gaia.gw.GaiaMsgHeader",
  () => [
    { no: 1, name: "encode_type", kind: "enum", T: proto3.getEnumType(EncryptType) },
    { no: 2, name: "payload_type", kind: "enum", T: proto3.getEnumType(PayloadType) },
    { no: 3, name: "encoded_aes_key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "ts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 应用列表上报-响应
 *
 * @generated from message bilibili.gaia.gw.UploadAppListReply
 */
export const UploadAppListReply = proto3.makeMessageType(
  "bilibili.gaia.gw.UploadAppListReply",
  () => [
    { no: 1, name: "trace_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
