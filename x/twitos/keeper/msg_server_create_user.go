package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

func (k msgServer) CreateUser(goCtx context.Context, msg *types.MsgCreateUser) (*types.MsgCreateUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, existingUserFound := k.GetWalletToUserId(ctx, msg.Creator)

	if existingUserFound {
		return nil, types.ErrUserAlreadyExists
	}

	dbHead, found := k.Keeper.GetDbHead(ctx)
	if !found {
		panic("DB head not found")
	}
	nextUserHead := strconv.FormatUint(dbHead.UserIndex, 10)
	newUser := types.User{
		Name:    msg.Name,
		Index:   strconv.Itoa(int(dbHead.UserIndex)),
		Address: msg.Creator,
	}
	k.Keeper.SetUser(ctx, newUser)
	walletToUserId := types.WalletToUserId{
		UserId: dbHead.UserIndex,
		Index:  msg.Creator,
	}
	k.Keeper.SetWalletToUserId(ctx, walletToUserId)
	dbHead.UserIndex++
	k.Keeper.SetDbHead(ctx, dbHead)
	return &types.MsgCreateUserResponse{
		IdValue: nextUserHead,
	}, nil
}
