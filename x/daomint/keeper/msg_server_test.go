package keeper_test

import (
	"context"
	"testing"

	keepertest "DAOmint/testutil/keeper"
	"DAOmint/x/daomint/keeper"
	"DAOmint/x/daomint/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.DaomintKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
