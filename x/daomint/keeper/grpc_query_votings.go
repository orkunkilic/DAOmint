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

func (k Keeper) Votings(goCtx context.Context, req *types.QueryVotingsRequest) (*types.QueryVotingsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var votings []*types.Voting

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Get the key-value module store using the store key (in our case store key is "chain")
	store := ctx.KVStore(k.storeKey)

	// Get the part of the store that keeps posts (using post key, which is "Post-value-")
	votingStore := prefix.NewStore(store, []byte(types.VotingKey))

	// Paginate the posts store based on PageRequest
	pageRes, err := query.Paginate(votingStore, req.Pagination, func(key []byte, value []byte) error {
		var voting types.Voting
		if err := k.cdc.Unmarshal(value, &voting); err != nil {
			return err
		}

		votings = append(votings, &voting)

		return nil
	})

	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	// Return a struct containing a list of posts and pagination info
	return &types.QueryVotingsResponse{Votings: votings, Pagination: pageRes}, nil
}
