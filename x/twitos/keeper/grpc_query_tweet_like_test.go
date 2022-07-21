package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/hkirat/twitos/testutil/keeper"
	"github.com/hkirat/twitos/testutil/nullify"
	"github.com/hkirat/twitos/x/twitos/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestTweetLikeQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNTweetLike(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetTweetLikeRequest
		response *types.QueryGetTweetLikeResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetTweetLikeRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetTweetLikeResponse{TweetLike: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetTweetLikeRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetTweetLikeResponse{TweetLike: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetTweetLikeRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.TweetLike(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestTweetLikeQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNTweetLike(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllTweetLikeRequest {
		return &types.QueryAllTweetLikeRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.TweetLikeAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.TweetLike), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.TweetLike),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.TweetLikeAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.TweetLike), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.TweetLike),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.TweetLikeAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.TweetLike),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.TweetLikeAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
