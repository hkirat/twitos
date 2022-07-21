package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateUser = "create_user"

var _ sdk.Msg = &MsgCreateUser{}

func NewMsgCreateUser(creator string, name string) *MsgCreateUser {
	return &MsgCreateUser{
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgCreateUser) Route() string {
	return RouterKey
}

func (msg *MsgCreateUser) Type() string {
	return TypeMsgCreateUser
}

func (msg *MsgCreateUser) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateUser) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
