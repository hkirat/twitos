package keeper

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/hkirat/twitos/x/twitos/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TweetAll(c context.Context, req *types.QueryAllTweetRequest) (*types.QueryAllTweetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tweets []types.Tweet
	var userIds []uint64
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	tweetStore := prefix.NewStore(store, types.KeyPrefix(types.TweetKey))

	pageRes, err := query.Paginate(tweetStore, req.Pagination, func(key []byte, value []byte) error {
		var tweet types.Tweet
		if err := k.cdc.Unmarshal(value, &tweet); err != nil {
			return err
		}

		tweets = append(tweets, tweet)
		userIds = append(userIds, tweet.Owner)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	users := k.GetAllFilteredUser(ctx, userIds)

	return &types.QueryAllTweetResponse{Tweet: tweets, Pagination: pageRes, User: users}, nil
}

func (k Keeper) Tweet(c context.Context, req *types.QueryGetTweetRequest) (*types.QueryGetTweetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	tweet, found := k.GetTweet(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}
	user, userFound := k.GetUser(ctx, strconv.Itoa(int(tweet.Owner)))

	if !userFound {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTweetResponse{Tweet: tweet, User: user}, nil
}
