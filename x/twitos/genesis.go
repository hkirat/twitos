package twitos

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hkirat/twitos/x/twitos/keeper"
	"github.com/hkirat/twitos/x/twitos/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.DbHead != nil {
		k.SetDbHead(ctx, *genState.DbHead)
	}
	// Set all the user
	for _, elem := range genState.UserList {
		k.SetUser(ctx, elem)
	}
	// Set all the walletToUserId
	for _, elem := range genState.WalletToUserIdList {
		k.SetWalletToUserId(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all dbHead
	dbHead, found := k.GetDbHead(ctx)
	if found {
		genesis.DbHead = &dbHead
	}
	genesis.UserList = k.GetAllUser(ctx)
	genesis.WalletToUserIdList = k.GetAllWalletToUserId(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
