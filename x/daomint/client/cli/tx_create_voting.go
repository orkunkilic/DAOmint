package cli

import (
	"strconv"

	"DAOmint/x/daomint/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateVoting() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-voting [title] [desc] [expiration]",
		Short: "Broadcast message createVoting",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTitle := args[0]
			argDesc := args[1]
			argExpiration := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// convert argExpiration to uint64
			expiration, err := strconv.ParseUint(argExpiration, 10, 64)

			if err != nil {
				return err
			}

			msg := types.NewMsgCreateVoting(
				clientCtx.GetFromAddress().String(),
				argTitle,
				argDesc,
				expiration,
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
