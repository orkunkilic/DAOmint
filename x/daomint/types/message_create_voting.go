package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateVoting = "create_voting"

var _ sdk.Msg = &MsgCreateVoting{}

func NewMsgCreateVoting(creator string, title string, desc string, expiration uint64) *MsgCreateVoting {
	return &MsgCreateVoting{
		Creator:    creator,
		Title:      title,
		Desc:       desc,
		Expiration: expiration,
	}
}

func (msg *MsgCreateVoting) Route() string {
	return RouterKey
}

func (msg *MsgCreateVoting) Type() string {
	return TypeMsgCreateVoting
}

func (msg *MsgCreateVoting) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateVoting) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateVoting) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
