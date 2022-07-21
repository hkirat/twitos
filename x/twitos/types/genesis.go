package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		DbHead:             nil,
		UserList:           []User{},
		WalletToUserIdList: []WalletToUserId{},
		TweetList:          []Tweet{},
		TweetLikeList:      []TweetLike{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in user
	userIndexMap := make(map[string]struct{})

	for _, elem := range gs.UserList {
		index := string(UserKey(elem.Index))
		if _, ok := userIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for user")
		}
		userIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in walletToUserId
	walletToUserIdIndexMap := make(map[string]struct{})

	for _, elem := range gs.WalletToUserIdList {
		index := string(WalletToUserIdKey(elem.Index))
		if _, ok := walletToUserIdIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for walletToUserId")
		}
		walletToUserIdIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in tweet
	tweetIdMap := make(map[uint64]bool)
	tweetCount := gs.GetTweetCount()
	for _, elem := range gs.TweetList {
		if _, ok := tweetIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for tweet")
		}
		if elem.Id >= tweetCount {
			return fmt.Errorf("tweet id should be lower or equal than the last id")
		}
		tweetIdMap[elem.Id] = true
	}
	// Check for duplicated index in tweetLike
	tweetLikeIndexMap := make(map[string]struct{})

	for _, elem := range gs.TweetLikeList {
		index := string(TweetLikeKey(elem.Index))
		if _, ok := tweetLikeIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for tweetLike")
		}
		tweetLikeIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
