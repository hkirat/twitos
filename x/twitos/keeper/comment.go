package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
)

// GetCommentCount get the total number of comment
func (k Keeper) GetCommentCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CommentCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCommentCount set the total number of comment
func (k Keeper) SetCommentCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CommentCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendComment appends a comment in the store with a new id and update the count
func (k Keeper) AppendComment(
	ctx sdk.Context,
	comment types.Comment,
) uint64 {
	// Create the comment
	count := k.GetCommentCount(ctx)

	// Set the ID of the appended value
	comment.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentKey))
	appendedValue := k.cdc.MustMarshal(&comment)
	store.Set(GetCommentIDBytes(comment.Id), appendedValue)

	// Update comment count
	k.SetCommentCount(ctx, count+1)

	return count
}

// SetComment set a specific comment in the store
func (k Keeper) SetComment(ctx sdk.Context, comment types.Comment) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentKey))
	b := k.cdc.MustMarshal(&comment)
	store.Set(GetCommentIDBytes(comment.Id), b)
}

// GetComment returns a comment from its id
func (k Keeper) GetComment(ctx sdk.Context, id uint64) (val types.Comment, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentKey))
	b := store.Get(GetCommentIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveComment removes a comment from the store
func (k Keeper) RemoveComment(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentKey))
	store.Delete(GetCommentIDBytes(id))
}

// GetAllComment returns all comment
func (k Keeper) GetAllComment(ctx sdk.Context) (list []types.Comment) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommentKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Comment
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCommentIDBytes returns the byte representation of the ID
func GetCommentIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCommentIDFromBytes returns ID in uint64 format from a byte array
func GetCommentIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
