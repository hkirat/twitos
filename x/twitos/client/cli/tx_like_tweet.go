package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/hkirat/twitos/x/twitos/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdLikeTweet() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "like-tweet [tweet-id] [like]",
		Short: "Broadcast message likeTweet",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTweetId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argLike, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgLikeTweet(
				clientCtx.GetFromAddress().String(),
				argTweetId,
				argLike,
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
