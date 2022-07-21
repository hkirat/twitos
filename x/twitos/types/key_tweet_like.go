package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TweetLikeKeyPrefix is the prefix to retrieve all TweetLike
	TweetLikeKeyPrefix = "TweetLike/value/"
)

// TweetLikeKey returns the store key to retrieve a TweetLike from the index fields
func TweetLikeKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
