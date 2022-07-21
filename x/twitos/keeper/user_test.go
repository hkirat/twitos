package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/hkirat/twitos/testutil/keeper"
	"github.com/hkirat/twitos/testutil/nullify"
	"github.com/hkirat/twitos/x/twitos/keeper"
	"github.com/hkirat/twitos/x/twitos/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNUser(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.User {
	items := make([]types.User, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetUser(ctx, items[i])
	}
	return items
}

func TestUserGet(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNUser(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetUser(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestUserRemove(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNUser(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveUser(ctx,
			item.Index,
		)
		_, found := keeper.GetUser(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestUserGetAll(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNUser(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllUser(ctx)),
	)
}
