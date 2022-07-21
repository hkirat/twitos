package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/hkirat/twitos/x/twitos/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TweetLikeAll(c context.Context, req *types.QueryAllTweetLikeRequest) (*types.QueryAllTweetLikeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tweetLikes []types.TweetLike
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	tweetLikeStore := prefix.NewStore(store, types.KeyPrefix(types.TweetLikeKeyPrefix))

	pageRes, err := query.Paginate(tweetLikeStore, req.Pagination, func(key []byte, value []byte) error {
		var tweetLike types.TweetLike
		if err := k.cdc.Unmarshal(value, &tweetLike); err != nil {
			return err
		}

		tweetLikes = append(tweetLikes, tweetLike)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTweetLikeResponse{TweetLike: tweetLikes, Pagination: pageRes}, nil
}

func (k Keeper) TweetLike(c context.Context, req *types.QueryGetTweetLikeRequest) (*types.QueryGetTweetLikeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetTweetLike(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetTweetLikeResponse{TweetLike: val}, nil
}
