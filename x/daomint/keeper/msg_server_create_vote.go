package keeper

import (
	"context"
	"fmt"

	"DAOmint/x/daomint/types"

	sdk "github.com/cosmos/cosmos-sdk/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateVote(goCtx context.Context, msg *types.MsgCreateVote) (*types.MsgCreateVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the Post Exists for which a comment is being created
	post, found := k.GetVoting(ctx, msg.VotingID)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Create variable of type comment
	var vote = types.Vote{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Option:    msg.Option,
		VotingID:  msg.VotingID,
		CreatedAt: ctx.BlockHeight(),
	}

	// Check if the comment is older than the Post. If more than 100 blocks, then return error.
	if uint64(vote.CreatedAt) > post.Expiration {
		return nil, sdkerrors.Wrapf(types.ErrVotingExpired, "Voting expired at %d", post.Expiration)
	}

	id := k.AppendVote(ctx, vote)
	return &types.MsgCreateVoteResponse{Id: id}, nil
}
