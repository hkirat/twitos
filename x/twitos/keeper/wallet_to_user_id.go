package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

// SetWalletToUserId set a specific walletToUserId in the store from its index
func (k Keeper) SetWalletToUserId(ctx sdk.Context, walletToUserId types.WalletToUserId) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WalletToUserIdKeyPrefix))
	b := k.cdc.MustMarshal(&walletToUserId)
	store.Set(types.WalletToUserIdKey(
		walletToUserId.Index,
	), b)
}

// GetWalletToUserId returns a walletToUserId from its index
func (k Keeper) GetWalletToUserId(
	ctx sdk.Context,
	index string,

) (val types.WalletToUserId, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WalletToUserIdKeyPrefix))

	b := store.Get(types.WalletToUserIdKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWalletToUserId removes a walletToUserId from the store
func (k Keeper) RemoveWalletToUserId(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WalletToUserIdKeyPrefix))
	store.Delete(types.WalletToUserIdKey(
		index,
	))
}

// GetAllWalletToUserId returns all walletToUserId
func (k Keeper) GetAllWalletToUserId(ctx sdk.Context) (list []types.WalletToUserId) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WalletToUserIdKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.WalletToUserId
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
