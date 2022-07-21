package twitos

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/keeper"
	"github.com/hkirat/twitos/x/twitos/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.DbHead != nil {
		k.SetDbHead(ctx, *genState.DbHead)
	}
	// Set all the user
	for _, elem := range genState.UserList {
		k.SetUser(ctx, elem)
	}
	// Set all the walletToUserId
	for _, elem := range genState.WalletToUserIdList {
		k.SetWalletToUserId(ctx, elem)
	}
	// Set all the tweet
	for _, elem := range genState.TweetList {
		k.SetTweet(ctx, elem)
	}

	// Set tweet count
	k.SetTweetCount(ctx, genState.TweetCount)
	// Set all the tweetLike
	for _, elem := range genState.TweetLikeList {
		k.SetTweetLike(ctx, elem)
	}
	// Set all the comment
	for _, elem := range genState.CommentList {
		k.SetComment(ctx, elem)
	}

	// Set comment count
	k.SetCommentCount(ctx, genState.CommentCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all dbHead
	dbHead, found := k.GetDbHead(ctx)
	if found {
		genesis.DbHead = &dbHead
	}
	genesis.UserList = k.GetAllUser(ctx)
	genesis.WalletToUserIdList = k.GetAllWalletToUserId(ctx)
	genesis.TweetList = k.GetAllTweet(ctx)
	genesis.TweetCount = k.GetTweetCount(ctx)
	genesis.TweetLikeList = k.GetAllTweetLike(ctx)
	genesis.CommentList = k.GetAllComment(ctx)
	genesis.CommentCount = k.GetCommentCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
