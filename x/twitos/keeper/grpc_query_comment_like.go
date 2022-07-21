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

func (k Keeper) CommentLikeAll(c context.Context, req *types.QueryAllCommentLikeRequest) (*types.QueryAllCommentLikeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var commentLikes []types.CommentLike
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	commentLikeStore := prefix.NewStore(store, types.KeyPrefix(types.CommentLikeKeyPrefix))

	pageRes, err := query.Paginate(commentLikeStore, req.Pagination, func(key []byte, value []byte) error {
		var commentLike types.CommentLike
		if err := k.cdc.Unmarshal(value, &commentLike); err != nil {
			return err
		}

		commentLikes = append(commentLikes, commentLike)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCommentLikeResponse{CommentLike: commentLikes, Pagination: pageRes}, nil
}

func (k Keeper) CommentLike(c context.Context, req *types.QueryGetCommentLikeRequest) (*types.QueryGetCommentLikeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCommentLike(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCommentLikeResponse{CommentLike: val}, nil
}
