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

func createNTweetLike(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.TweetLike {
	items := make([]types.TweetLike, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetTweetLike(ctx, items[i])
	}
	return items
}

func TestTweetLikeGet(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNTweetLike(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTweetLike(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTweetLikeRemove(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNTweetLike(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTweetLike(ctx,
			item.Index,
		)
		_, found := keeper.GetTweetLike(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestTweetLikeGetAll(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNTweetLike(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTweetLike(ctx)),
	)
}