package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

// SetDbHead set dbHead in the store
func (k Keeper) SetDbHead(ctx sdk.Context, dbHead types.DbHead) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DbHeadKey))
	b := k.cdc.MustMarshal(&dbHead)
	store.Set([]byte{0}, b)
}

// GetDbHead returns dbHead
func (k Keeper) GetDbHead(ctx sdk.Context) (val types.DbHead, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DbHeadKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDbHead removes dbHead from the store
func (k Keeper) RemoveDbHead(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DbHeadKey))
	store.Delete([]byte{0})
}
