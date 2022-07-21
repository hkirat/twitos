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

func (k Keeper) Comments(goCtx context.Context, req *types.QueryCommentsRequest) (*types.QueryCommentsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var comments []*types.Comment
	var userIds []uint64

	ctx := sdk.UnwrapSDKContext(goCtx)

	commentStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentKey))

	pageRes, err := query.Paginate(commentStore, req.Pagination, func(key []byte, value []byte) error {
		var comment types.Comment
		if err := k.cdc.Unmarshal(value, &comment); err != nil {
			return err
		}

		if comment.TweetId == req.TweetId {
			comments = append(comments, &comment)
			userIds = append(userIds, comment.Owner)
		}

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	users := k.GetAllFilteredUser(ctx, userIds)

	return &types.QueryCommentsResponse{
		comments,
		users,
		pageRes,
	}, nil
}
