package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgLikeTweet = "like_tweet"

var _ sdk.Msg = &MsgLikeTweet{}

func NewMsgLikeTweet(creator string, tweetId uint64, like bool) *MsgLikeTweet {
	return &MsgLikeTweet{
		Creator: creator,
		TweetId: tweetId,
		Like:    like,
	}
}

func (msg *MsgLikeTweet) Route() string {
	return RouterKey
}

func (msg *MsgLikeTweet) Type() string {
	return TypeMsgLikeTweet
}

func (msg *MsgLikeTweet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgLikeTweet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgLikeTweet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
