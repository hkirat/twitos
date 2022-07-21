package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CommentLikeKeyPrefix is the prefix to retrieve all CommentLike
	CommentLikeKeyPrefix = "CommentLike/value/"
)

// CommentLikeKey returns the store key to retrieve a CommentLike from the index fields
func CommentLikeKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
