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

	// find if there is a vote exists with the same creator in the same voting, return error if found
	_, found = k.GetVoteByCreatorAndVotingID(ctx, msg.Creator, msg.VotingID)
	if found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("Vote already exists for the creator %s in voting %d", msg.Creator, msg.VotingID))
	}

	// Create variable of type comment
	var vote = types.Vote{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Option:    msg.Option,
		VotingID:  msg.VotingID,
		CreatedAt: ctx.BlockHeight(),
	}

	if uint64(vote.CreatedAt) > post.Expiration {
		return nil, sdkerrors.Wrapf(types.ErrVotingExpired, "Voting expired at %d", post.Expiration)
	}

	id := k.AppendVote(ctx, vote)
	return &types.MsgCreateVoteResponse{Id: id}, nil
}
