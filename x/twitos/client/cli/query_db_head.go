package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/hkirat/twitos/x/twitos/types"
	"github.com/spf13/cobra"
)

func CmdShowDbHead() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-db-head",
		Short: "shows dbHead",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetDbHeadRequest{}

			res, err := queryClient.DbHead(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
