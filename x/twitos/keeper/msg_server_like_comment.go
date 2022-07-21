package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

func (k msgServer) LikeComment(goCtx context.Context, msg *types.MsgLikeComment) (*types.MsgLikeCommentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgLikeCommentResponse{}, nil
}
