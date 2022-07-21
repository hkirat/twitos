package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

// GetTweetCount get the total number of tweet
func (k Keeper) GetTweetCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TweetCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTweetCount set the total number of tweet
func (k Keeper) SetTweetCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TweetCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTweet appends a tweet in the store with a new id and update the count
func (k Keeper) AppendTweet(
	ctx sdk.Context,
	tweet types.Tweet,
) uint64 {
	// Create the tweet
	count := k.GetTweetCount(ctx)

	// Set the ID of the appended value
	tweet.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetKey))
	appendedValue := k.cdc.MustMarshal(&tweet)
	store.Set(GetTweetIDBytes(tweet.Id), appendedValue)

	// Update tweet count
	k.SetTweetCount(ctx, count+1)

	return count
}

// SetTweet set a specific tweet in the store
func (k Keeper) SetTweet(ctx sdk.Context, tweet types.Tweet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetKey))
	b := k.cdc.MustMarshal(&tweet)
	store.Set(GetTweetIDBytes(tweet.Id), b)
}

// GetTweet returns a tweet from its id
func (k Keeper) GetTweet(ctx sdk.Context, id uint64) (val types.Tweet, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetKey))
	b := store.Get(GetTweetIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTweet removes a tweet from the store
func (k Keeper) RemoveTweet(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetKey))
	store.Delete(GetTweetIDBytes(id))
}

// GetAllTweet returns all tweet
func (k Keeper) GetAllTweet(ctx sdk.Context) (list []types.Tweet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TweetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Tweet
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTweetIDBytes returns the byte representation of the ID
func GetTweetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTweetIDFromBytes returns ID in uint64 format from a byte array
func GetTweetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
