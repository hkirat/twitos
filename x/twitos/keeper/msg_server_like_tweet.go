package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

func (k msgServer) LikeTweet(goCtx context.Context, msg *types.MsgLikeTweet) (*types.MsgLikeTweetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgLikeTweetResponse{}, nil
}
