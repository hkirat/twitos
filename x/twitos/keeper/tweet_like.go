package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

// SetTweetLike set a specific tweetLike in the store from its index
func (k Keeper) SetTweetLike(ctx sdk.Context, tweetLike types.TweetLike) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetLikeKeyPrefix))
	b := k.cdc.MustMarshal(&tweetLike)
	store.Set(types.TweetLikeKey(
		tweetLike.Index,
	), b)
}

// GetTweetLike returns a tweetLike from its index
func (k Keeper) GetTweetLike(
	ctx sdk.Context,
	index string,

) (val types.TweetLike, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetLikeKeyPrefix))

	b := store.Get(types.TweetLikeKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTweetLike removes a tweetLike from the store
func (k Keeper) RemoveTweetLike(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetLikeKeyPrefix))
	store.Delete(types.TweetLikeKey(
		index,
	))
}

// GetAllTweetLike returns all tweetLike
func (k Keeper) GetAllTweetLike(ctx sdk.Context) (list []types.TweetLike) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetLikeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TweetLike
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
