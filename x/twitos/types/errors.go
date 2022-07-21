package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/twitos module sentinel errors
var (
	ErrSample                 = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrUserAlreadyExists      = sdkerrors.Register(ModuleName, 1101, "User already exists")
	ErrUserDoesntExist        = sdkerrors.Register(ModuleName, 1102, "User doesn't exists")
	ErrTweetDoesntExist       = sdkerrors.Register(ModuleName, 1103, "Tweet doesn't exists")
	ErrTweetAlreadyLiked      = sdkerrors.Register(ModuleName, 1104, "Tweet already liked")
	ErrTweetAlreadyNotLiked   = sdkerrors.Register(ModuleName, 1105, "Tweet already not liked")
	ErrCommentDoesntExist     = sdkerrors.Register(ModuleName, 1106, "Comment doesn't exists")
	ErrCommentAlreadyLiked    = sdkerrors.Register(ModuleName, 1107, "Comment already liked")
	ErrCommentAlreadyNotLiked = sdkerrors.Register(ModuleName, 1108, "Comment already not liked")
)
