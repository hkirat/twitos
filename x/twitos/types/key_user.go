package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// UserKeyPrefix is the prefix to retrieve all User
	UserKeyPrefix = "User/value/"
)

// UserKey returns the store key to retrieve a User from the index fields
func UserKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
