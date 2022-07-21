package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"

	"github.com/hkirat/twitos/x/twitos/types"
)

func (k msgServer) LikeComment(goCtx context.Context, msg *types.MsgLikeComment) (*types.MsgLikeCommentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	userMapping, existingUserFound := k.GetWalletToUserId(ctx, msg.Creator)

	if !existingUserFound {
		return nil, types.ErrUserDoesntExist
	}

	comment, commentFound := k.Keeper.GetComment(ctx, msg.CommentId)

	if !commentFound {
		return nil, types.ErrCommentDoesntExist
	}

	commentId := strconv.FormatUint(comment.Id, 10)

	if msg.Like {
		_, existingLikeFound := k.GetCommentLike(ctx, commentId+"-"+msg.Creator)
		if existingLikeFound {
			return nil, types.ErrCommentAlreadyLiked
		}
		comment.Likes++
		k.Keeper.SetComment(ctx, comment)

		newLike := types.CommentLike{
			CommentId: comment.Id,
			User:      userMapping.UserId,
			Index:     commentId + "-" + msg.Creator,
		}

		k.Keeper.SetCommentLike(ctx, newLike)

	} else {
		_, existingLikeFound := k.GetCommentLike(ctx, commentId+"-"+msg.Creator)
		if !existingLikeFound {
			return nil, types.ErrCommentAlreadyNotLiked
		}

		comment.Likes--
		k.Keeper.SetComment(ctx, comment)

		k.Keeper.RemoveCommentLike(ctx, commentId+"-"+msg.Creator)

	}

	return &types.MsgLikeCommentResponse{
		Done: true,
	}, nil
}
