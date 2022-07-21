package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/hkirat/twitos/x/twitos/types"
	"github.com/spf13/cobra"
)

func CmdListWalletToUserId() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-wallet-to-user-id",
		Short: "list all walletToUserId",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllWalletToUserIdRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.WalletToUserIdAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowWalletToUserId() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-wallet-to-user-id [index]",
		Short: "shows a walletToUserId",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetWalletToUserIdRequest{
				Index: argIndex,
			}

			res, err := queryClient.WalletToUserId(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
