package twitos

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/hkirat/twitos/testutil/sample"
	twitossimulation "github.com/hkirat/twitos/x/twitos/simulation"
	"github.com/hkirat/twitos/x/twitos/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = twitossimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateUser = "op_weight_msg_create_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateUser int = 100

	opWeightMsgCreateTweet = "op_weight_msg_create_tweet"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTweet int = 100

	opWeightMsgLikeTweet = "op_weight_msg_like_tweet"
	// TODO: Determine the simulation weight value
	defaultWeightMsgLikeTweet int = 100

	opWeightMsgCreateComment = "op_weight_msg_create_comment"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateComment int = 100

	opWeightMsgLikeComment = "op_weight_msg_like_comment"
	// TODO: Determine the simulation weight value
	defaultWeightMsgLikeComment int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	twitosGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&twitosGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateUser, &weightMsgCreateUser, nil,
		func(_ *rand.Rand) {
			weightMsgCreateUser = defaultWeightMsgCreateUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateUser,
		twitossimulation.SimulateMsgCreateUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTweet int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTweet, &weightMsgCreateTweet, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTweet = defaultWeightMsgCreateTweet
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTweet,
		twitossimulation.SimulateMsgCreateTweet(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgLikeTweet int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgLikeTweet, &weightMsgLikeTweet, nil,
		func(_ *rand.Rand) {
			weightMsgLikeTweet = defaultWeightMsgLikeTweet
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgLikeTweet,
		twitossimulation.SimulateMsgLikeTweet(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateComment int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateComment, &weightMsgCreateComment, nil,
		func(_ *rand.Rand) {
			weightMsgCreateComment = defaultWeightMsgCreateComment
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateComment,
		twitossimulation.SimulateMsgCreateComment(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgLikeComment int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgLikeComment, &weightMsgLikeComment, nil,
		func(_ *rand.Rand) {
			weightMsgLikeComment = defaultWeightMsgLikeComment
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgLikeComment,
		twitossimulation.SimulateMsgLikeComment(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
