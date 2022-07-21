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

func createNWalletToUserId(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.WalletToUserId {
	items := make([]types.WalletToUserId, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetWalletToUserId(ctx, items[i])
	}
	return items
}

func TestWalletToUserIdGet(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNWalletToUserId(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetWalletToUserId(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestWalletToUserIdRemove(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNWalletToUserId(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveWalletToUserId(ctx,
			item.Index,
		)
		_, found := keeper.GetWalletToUserId(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestWalletToUserIdGetAll(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNWalletToUserId(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllWalletToUserId(ctx)),
	)
}
