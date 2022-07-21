package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateTweet = "create_tweet"

var _ sdk.Msg = &MsgCreateTweet{}

func NewMsgCreateTweet(creator string, description string) *MsgCreateTweet {
	return &MsgCreateTweet{
		Creator:     creator,
		Description: description,
	}
}

func (msg *MsgCreateTweet) Route() string {
	return RouterKey
}

func (msg *MsgCreateTweet) Type() string {
	return TypeMsgCreateTweet
}

func (msg *MsgCreateTweet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTweet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTweet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
