package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

func (k msgServer) CreateTweet(goCtx context.Context, msg *types.MsgCreateTweet) (*types.MsgCreateTweetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	userMapping, existingUserFound := k.GetWalletToUserId(ctx, msg.Creator)

	if !existingUserFound {
		return nil, types.ErrUserDoesntExist
	}

	newTweet := types.Tweet{
		Owner:       userMapping.UserId,
		Description: msg.Description,
		Likes:       0,
		Comments:    0,
	}

	tweetId := k.Keeper.AppendTweet(ctx, newTweet)

	return &types.MsgCreateTweetResponse{
		IdValue: strconv.Itoa(int(tweetId)),
	}, nil
}
