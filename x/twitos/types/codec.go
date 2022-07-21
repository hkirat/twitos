package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateUser{}, "twitos/CreateUser", nil)
	cdc.RegisterConcrete(&MsgCreateTweet{}, "twitos/CreateTweet", nil)
	cdc.RegisterConcrete(&MsgLikeTweet{}, "twitos/LikeTweet", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateUser{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTweet{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgLikeTweet{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
