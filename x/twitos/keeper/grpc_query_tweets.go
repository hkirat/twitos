package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Tweets(goCtx context.Context, req *types.QueryTweetsRequest) (*types.QueryTweetsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tweets []*types.Tweet
	userIds := []uint64{req.UserId}

	ctx := sdk.UnwrapSDKContext(goCtx)

	tweetStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetKey))

	pageRes, err := query.Paginate(tweetStore, req.Pagination, func(key []byte, value []byte) error {
		var tweet types.Tweet
		if err := k.cdc.Unmarshal(value, &tweet); err != nil {
			return err
		}

		if tweet.Owner == req.UserId {
			tweets = append(tweets, &tweet)
		}

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	users := k.GetAllFilteredUser(ctx, userIds)

	return &types.QueryTweetsResponse{
		tweets,
		users,
		pageRes,
	}, nil
}
