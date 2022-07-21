package types

const (
	// ModuleName defines the module name
	ModuleName = "twitos"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_twitos"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	DbHeadKey = "DbHead-value-"
)

const (
	TweetKey      = "Tweet-value-"
	TweetCountKey = "Tweet-count-"
)

const (
	CommentKey      = "Comment-value-"
	CommentCountKey = "Comment-count-"
)
