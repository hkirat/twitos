package keeper

import (
	"context"
	"strconv"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

func (k msgServer) CreateComment(goCtx context.Context, msg *types.MsgCreateComment) (*types.MsgCreateCommentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	user, existingUserFound := k.GetWalletToUserId(ctx, msg.Creator)

	if !existingUserFound {
		return nil, types.ErrUserDoesntExist
	}

	tweet, tweetFound := k.Keeper.GetTweet(ctx, msg.TweetId)

	if !tweetFound {
		return nil, types.ErrTweetDoesntExist
	}

	comment := types.Comment{
		TweetId:     msg.TweetId,
		Description: msg.Description,
		Likes:       0,
		Timestamp:   uint64(time.Now().Unix()),
		Owner:       user.UserId,
	}

	commentId := k.Keeper.AppendComment(ctx, comment)
	tweet.Comments++
	k.Keeper.SetTweet(ctx, tweet)

	return &types.MsgCreateCommentResponse{
		IdValue: strconv.Itoa(int(commentId)),
	}, nil
}
