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
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
