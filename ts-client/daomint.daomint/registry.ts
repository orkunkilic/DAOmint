import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateVote } from "./types/daomint/daomint/tx";
import { MsgCreateVoting } from "./types/daomint/daomint/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/daomint.daomint.MsgCreateVote", MsgCreateVote],
    ["/daomint.daomint.MsgCreateVoting", MsgCreateVoting],
    
];

export { msgTypes }