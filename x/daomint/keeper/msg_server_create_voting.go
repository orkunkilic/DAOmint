package keeper

import (
	"context"

	"DAOmint/x/daomint/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateVoting(goCtx context.Context, msg *types.MsgCreateVoting) (*types.MsgCreateVotingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var voting = types.Voting{
		Creator:     msg.Creator,
		Title:       msg.Title,
		Description: msg.Desc,
		Expiration:  msg.Expiration, // string to uint64
		CreatedAt:   ctx.BlockHeight(),
	}

	id := k.AppendVoting(
		ctx,
		voting,
	)

	return &types.MsgCreateVotingResponse{Id: id}, nil
}
