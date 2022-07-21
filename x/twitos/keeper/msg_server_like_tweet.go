package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

func (k msgServer) LikeTweet(goCtx context.Context, msg *types.MsgLikeTweet) (*types.MsgLikeTweetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	userMapping, existingUserFound := k.GetWalletToUserId(ctx, msg.Creator)

	if !existingUserFound {
		return nil, types.ErrUserDoesntExist
	}

	tweet, tweetFound := k.Keeper.GetTweet(ctx, msg.TweetId)

	tweetId := strconv.FormatUint(tweet.Id, 10)

	if !tweetFound {
		return nil, types.ErrTweetDoesntExist
	}

	if msg.Like {
		_, existingLikeFound := k.GetTweetLike(ctx, tweetId+"-"+msg.Creator)
		if existingLikeFound {
			return nil, types.ErrTweetAlreadyLiked
		}
		tweet.Likes++
		k.Keeper.SetTweet(ctx, tweet)

		tweetIndex, parseErr := strconv.ParseUint(tweetId, 10, 32)
		if parseErr != nil {
			panic("Non uint id found for tweet")
		}

		newLike := types.TweetLike{
			TweetId: tweetIndex,
			User:    userMapping.UserId,
			Index:   tweetId + "-" + msg.Creator,
		}

		k.Keeper.SetTweetLike(ctx, newLike)

	} else {
		_, existingLikeFound := k.GetTweetLike(ctx, tweetId+"-"+msg.Creator)
		if !existingLikeFound {
			return nil, types.ErrTweetAlreadyNotLiked
		}

		tweet.Likes--
		k.Keeper.SetTweet(ctx, tweet)

		k.Keeper.RemoveTweetLike(ctx, tweetId+"-"+msg.Creator)

	}

	return &types.MsgLikeTweetResponse{
		Done: true,
	}, nil
}
