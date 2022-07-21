package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgLikeComment = "like_comment"

var _ sdk.Msg = &MsgLikeComment{}

func NewMsgLikeComment(creator string, commentId uint64, like bool) *MsgLikeComment {
	return &MsgLikeComment{
		Creator:   creator,
		CommentId: commentId,
		Like:      like,
	}
}

func (msg *MsgLikeComment) Route() string {
	return RouterKey
}

func (msg *MsgLikeComment) Type() string {
	return TypeMsgLikeComment
}

func (msg *MsgLikeComment) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgLikeComment) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgLikeComment) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
