// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/dynamic/common/dynamic.proto (package bilibili.app.dynamic.common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 *
 *
 * @generated from enum bilibili.app.dynamic.common.WHRatio
 */
export const WHRatio = proto3.makeEnum(
  "bilibili.app.dynamic.common.WHRatio",
  [
    {no: 0, name: "W_H_RATIO_1_1"},
    {no: 1, name: "W_H_RATIO_16_9"},
    {no: 2, name: "W_H_RATIO_3_4"},
    {no: 3, name: "W_H_RATIO_CUSTOM"},
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.dynamic.common.ItemWHRatio
 */
export const ItemWHRatio = proto3.makeMessageType(
  "bilibili.app.dynamic.common.ItemWHRatio",
  () => [
    { no: 1, name: "ratio", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "width", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "height", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);
