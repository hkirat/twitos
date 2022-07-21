package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// WalletToUserIdKeyPrefix is the prefix to retrieve all WalletToUserId
	WalletToUserIdKeyPrefix = "WalletToUserId/value/"
)

// WalletToUserIdKey returns the store key to retrieve a WalletToUserId from the index fields
func WalletToUserIdKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
