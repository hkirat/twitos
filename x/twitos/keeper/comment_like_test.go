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

func createNCommentLike(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CommentLike {
	items := make([]types.CommentLike, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetCommentLike(ctx, items[i])
	}
	return items
}

func TestCommentLikeGet(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNCommentLike(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCommentLike(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCommentLikeRemove(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNCommentLike(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCommentLike(ctx,
			item.Index,
		)
		_, found := keeper.GetCommentLike(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestCommentLikeGetAll(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	items := createNCommentLike(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCommentLike(ctx)),
	)
}
