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

func TestUserQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNUser(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetUserRequest
		response *types.QueryGetUserResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetUserRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetUserResponse{User: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetUserRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetUserResponse{User: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetUserRequest{
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
			response, err := keeper.User(wctx, tc.request)
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

func TestUserQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNUser(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllUserRequest {
		return &types.QueryAllUserRequest{
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
			resp, err := keeper.UserAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.User), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.User),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.UserAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.User), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.User),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.UserAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.User),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.UserAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
