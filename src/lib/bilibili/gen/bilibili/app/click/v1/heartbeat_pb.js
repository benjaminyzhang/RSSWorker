// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/click/v1/heartbeat.proto (package bilibili.app.click.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * 
 *
 * @generated from enum bilibili.app.click.v1.PlayState
 */
export const PlayState = proto3.makeEnum(
  "bilibili.app.click.v1.PlayState",
  [
    {no: 0, name: "STATE_UNKNOWN"},
    {no: 1, name: "PREPARING"},
    {no: 2, name: "PREPARED"},
    {no: 3, name: "PLAYING"},
    {no: 4, name: "PAUSED"},
    {no: 5, name: "STOPPED"},
    {no: 6, name: "FAILED"},
  ],
);

/**
 * 
 *
 * @generated from enum bilibili.app.click.v1.Stage
 */
export const Stage = proto3.makeEnum(
  "bilibili.app.click.v1.Stage",
  [
    {no: 0, name: "STAGE_UNKNOWN"},
    {no: 1, name: "START"},
    {no: 2, name: "END"},
    {no: 3, name: "SAMPLE"},
  ],
);

/**
 * 账户信息
 *
 * @generated from message bilibili.app.click.v1.AccountInfo
 */
export const AccountInfo = proto3.makeMessageType(
  "bilibili.app.click.v1.AccountInfo",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * 
 *
 * @generated from message bilibili.app.click.v1.AppInfo
 */
export const AppInfo = proto3.makeMessageType(
  "bilibili.app.click.v1.AppInfo",
  () => [
    { no: 1, name: "top_page_class", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ftime", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "did", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 心跳补充信息
 *
 * @generated from message bilibili.app.click.v1.Extra
 */
export const Extra = proto3.makeMessageType(
  "bilibili.app.click.v1.Extra",
  () => [
    { no: 1, name: "session", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "refer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.click.v1.HeartBeatReply
 */
export const HeartBeatReply = proto3.makeMessageType(
  "bilibili.app.click.v1.HeartBeatReply",
  [],
);

/**
 * 
 *
 * @generated from message bilibili.app.click.v1.HeartBeatReq
 */
export const HeartBeatReq = proto3.makeMessageType(
  "bilibili.app.click.v1.HeartBeatReq",
  () => [
    { no: 1, name: "session_v2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "stage", kind: "enum", T: proto3.getEnumType(Stage) },
    { no: 3, name: "stream_timeout", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "batch_frequency", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "frequency", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "video_meta", kind: "message", T: VideoMeta },
    { no: 7, name: "app_info", kind: "message", T: AppInfo },
    { no: 8, name: "account_info", kind: "message", T: AccountInfo },
    { no: 9, name: "pre_process_result", kind: "message", T: PreProcessResult },
    { no: 10, name: "player_status", kind: "message", T: PlayerStatus, repeated: true },
    { no: 11, name: "video_info", kind: "message", T: VideoInfo },
  ],
);

/**
 * 
 *
 * @generated from message bilibili.app.click.v1.PlayerStatus
 */
export const PlayerStatus = proto3.makeMessageType(
  "bilibili.app.click.v1.PlayerStatus",
  () => [
    { no: 1, name: "playback_rate", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "progress", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "play_state", kind: "enum", T: proto3.getEnumType(PlayState) },
    { no: 4, name: "is_buffering", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * 
 *
 * @generated from message bilibili.app.click.v1.PreProcessResult
 */
export const PreProcessResult = proto3.makeMessageType(
  "bilibili.app.click.v1.PreProcessResult",
  () => [
    { no: 1, name: "vt", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 
 *
 * @generated from message bilibili.app.click.v1.VideoInfo
 */
export const VideoInfo = proto3.makeMessageType(
  "bilibili.app.click.v1.VideoInfo",
  () => [
    { no: 1, name: "cid_duration", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * 
 *
 * @generated from message bilibili.app.click.v1.VideoMeta
 */
export const VideoMeta = proto3.makeMessageType(
  "bilibili.app.click.v1.VideoMeta",
  () => [
    { no: 1, name: "aid", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "cid", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);
