package keeper

import (
	"context"

	"DAOmint/x/daomint/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Votes(goCtx context.Context, req *types.QueryVotesRequest) (*types.QueryVotesResponse, error) {
	// Throw an error if request is nil
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// Define a variable that will store a list of posts
	var votes []*types.Vote

	// Get context with the information about the environment
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Get the key-value module store using the store key (in this case store key is "chain")
	store := ctx.KVStore(k.storeKey)

	// Get the part of the store that keeps posts (using post key, which is "Post-value-")
	votesStore := prefix.NewStore(store, []byte(types.VoteKey))

	// Get the post by ID
	voting, _ := k.GetVoting(ctx, req.Id)

	// Get the post ID
	votingID := voting.Id

	// Paginate the posts store based on PageRequest
	pageRes, err := query.Paginate(votesStore, req.Pagination, func(key []byte, value []byte) error {
		var comment types.Vote
		if err := k.cdc.Unmarshal(value, &comment); err != nil {
			return err
		}

		if comment.VotingID == votingID {
			votes = append(votes, &comment)
		}

		return nil
	})

	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	// Return a struct containing a list of posts and pagination info
	return &types.QueryVotesResponse{Voting: &voting, Vote: votes, Pagination: pageRes}, nil

}
