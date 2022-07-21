package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/types"
	"strconv"
)

// SetUser set a specific user in the store from its index
func (k Keeper) SetUser(ctx sdk.Context, user types.User) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserKeyPrefix))
	b := k.cdc.MustMarshal(&user)
	store.Set(types.UserKey(
		user.Index,
	), b)
}

// GetUser returns a user from its index
func (k Keeper) GetUser(
	ctx sdk.Context,
	index string,

) (val types.User, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserKeyPrefix))

	b := store.Get(types.UserKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveUser removes a user from the store
func (k Keeper) RemoveUser(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserKeyPrefix))
	store.Delete(types.UserKey(
		index,
	))
}

// GetAllUser returns all user
func (k Keeper) GetAllUser(ctx sdk.Context) (list []types.User) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.User
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// Get Filtered users based on ids
func (k Keeper) GetAllFilteredUser(ctx sdk.Context, userIds []uint64) (list []types.User) {
	var users []types.User

	processed := make(map[uint64]bool)
	if userIds == nil {
		return users
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserKeyPrefix))
	for _, userId := range userIds {
		if processed[userId] {
			continue
		}
		processed[userId] = true
		b := store.Get(types.UserKey(
			strconv.Itoa(int(userId)),
		))
		if b != nil {
			var val types.User
			k.cdc.MustUnmarshal(b, &val)
			users = append(users, val)
		}
	}

	return users
}
