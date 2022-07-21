package twitos_test

import (
	"testing"

	keepertest "github.com/hkirat/twitos/testutil/keeper"
	"github.com/hkirat/twitos/testutil/nullify"
	"github.com/hkirat/twitos/x/twitos"
	"github.com/hkirat/twitos/x/twitos/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		DbHead: &types.DbHead{
			UserIndex:    94,
			TweetIndex:   59,
			CommentIndex: 74,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TwitosKeeper(t)
	twitos.InitGenesis(ctx, *k, genesisState)
	got := twitos.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.DbHead, got.DbHead)
	// this line is used by starport scaffolding # genesis/test/assert
}
