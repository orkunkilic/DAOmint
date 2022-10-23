package cli

import (
	"strconv"

	"DAOmint/x/daomint/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-vote [voting-id] [option]",
		Short: "Broadcast message create-vote",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argVotingID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argOption := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// convert argOption to uint64
			option, err := cast.ToUint64E(argOption)

			if err != nil {
				return err
			}

			msg := types.NewMsgCreateVote(
				clientCtx.GetFromAddress().String(),
				argVotingID,
				option,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
