package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

func (k msgServer) CreateTweet(goCtx context.Context, msg *types.MsgCreateTweet) (*types.MsgCreateTweetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateTweetResponse{}, nil
}
