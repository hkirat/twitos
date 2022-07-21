package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/hkirat/twitos/testutil/keeper"
	"github.com/hkirat/twitos/testutil/nullify"
	"github.com/hkirat/twitos/x/twitos/types"
)

func TestDbHeadQuery(t *testing.T) {
	keeper, ctx := keepertest.TwitosKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestDbHead(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetDbHeadRequest
		response *types.QueryGetDbHeadResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetDbHeadRequest{},
			response: &types.QueryGetDbHeadResponse{DbHead: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.DbHead(wctx, tc.request)
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
