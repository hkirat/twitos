package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/hkirat/twitos/testutil/keeper"
	"github.com/hkirat/twitos/testutil/nullify"
	"github.com/hkirat/twitos/x/twitos/keeper"
	"github.com/hkirat/twitos/x/twitos/types"
)

func createTestDbHead(keeper *keeper.Keeper, ctx sdk.Context) types.DbHead {
	item := types.DbHead{}
	keeper.SetDbHead(ctx, item)
	return item
}

func TestDbHeadGet(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	item := createTestDbHead(keeper, ctx)
	rst, found := keeper.GetDbHead(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestDbHeadRemove(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	createTestDbHead(keeper, ctx)
	keeper.RemoveDbHead(ctx)
	_, found := keeper.GetDbHead(ctx)
	require.False(t, found)
}
