package keeper_test

import (
	"testing"

	testkeeper "DAOmint/testutil/keeper"
	"DAOmint/x/daomint/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.DaomintKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
