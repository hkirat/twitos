package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

// SetCommentLike set a specific commentLike in the store from its index
func (k Keeper) SetCommentLike(ctx sdk.Context, commentLike types.CommentLike) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentLikeKeyPrefix))
	b := k.cdc.MustMarshal(&commentLike)
	store.Set(types.CommentLikeKey(
		commentLike.Index,
	), b)
}

// GetCommentLike returns a commentLike from its index
func (k Keeper) GetCommentLike(
	ctx sdk.Context,
	index string,

) (val types.CommentLike, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentLikeKeyPrefix))

	b := store.Get(types.CommentLikeKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCommentLike removes a commentLike from the store
func (k Keeper) RemoveCommentLike(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentLikeKeyPrefix))
	store.Delete(types.CommentLikeKey(
		index,
	))
}

// GetAllCommentLike returns all commentLike
func (k Keeper) GetAllCommentLike(ctx sdk.Context) (list []types.CommentLike) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentLikeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CommentLike
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
