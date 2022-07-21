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

func (k Keeper) WalletToUserIdAll(c context.Context, req *types.QueryAllWalletToUserIdRequest) (*types.QueryAllWalletToUserIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var walletToUserIds []types.WalletToUserId
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	walletToUserIdStore := prefix.NewStore(store, types.KeyPrefix(types.WalletToUserIdKeyPrefix))

	pageRes, err := query.Paginate(walletToUserIdStore, req.Pagination, func(key []byte, value []byte) error {
		var walletToUserId types.WalletToUserId
		if err := k.cdc.Unmarshal(value, &walletToUserId); err != nil {
			return err
		}

		walletToUserIds = append(walletToUserIds, walletToUserId)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllWalletToUserIdResponse{WalletToUserId: walletToUserIds, Pagination: pageRes}, nil
}

func (k Keeper) WalletToUserId(c context.Context, req *types.QueryGetWalletToUserIdRequest) (*types.QueryGetWalletToUserIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetWalletToUserId(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetWalletToUserIdResponse{WalletToUserId: val}, nil
}
