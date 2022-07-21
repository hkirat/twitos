package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/hkirat/twitos/testutil/keeper"
	"github.com/hkirat/twitos/testutil/nullify"
	"github.com/hkirat/twitos/x/twitos/keeper"
	"github.com/hkirat/twitos/x/twitos/types"
	"github.com/stretchr/testify/require"
)

func createNTweet(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Tweet {
	items := make([]types.Tweet, n)
	for i := range items {
		items[i].Id = keeper.AppendTweet(ctx, items[i])
	}
	return items
}

func TestTweetGet(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNTweet(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTweet(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestTweetRemove(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNTweet(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTweet(ctx, item.Id)
		_, found := keeper.GetTweet(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTweetGetAll(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNTweet(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTweet(ctx)),
	)
}

func TestTweetCount(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNTweet(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTweetCount(ctx))
}
