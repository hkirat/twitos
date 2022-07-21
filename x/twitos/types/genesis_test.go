package types_test

import (
	"testing"

	"github.com/hkirat/twitos/x/twitos/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				DbHead: &types.DbHead{
					UserIndex:    33,
					TweetIndex:   96,
					CommentIndex: 28,
				},
				UserList: []types.User{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				WalletToUserIdList: []types.WalletToUserId{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				TweetList: []types.Tweet{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				TweetCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated user",
			genState: &types.GenesisState{
				UserList: []types.User{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated walletToUserId",
			genState: &types.GenesisState{
				WalletToUserIdList: []types.WalletToUserId{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated tweet",
			genState: &types.GenesisState{
				TweetList: []types.Tweet{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid tweet count",
			genState: &types.GenesisState{
				TweetList: []types.Tweet{
					{
						Id: 1,
					},
				},
				TweetCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
