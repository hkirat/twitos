package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/hkirat/twitos/x/twitos/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group twitos queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdShowDbHead())
	cmd.AddCommand(CmdListUser())
	cmd.AddCommand(CmdShowUser())
	cmd.AddCommand(CmdListWalletToUserId())
	cmd.AddCommand(CmdShowWalletToUserId())
	cmd.AddCommand(CmdListTweet())
	cmd.AddCommand(CmdShowTweet())
	cmd.AddCommand(CmdListTweetLike())
	cmd.AddCommand(CmdShowTweetLike())
	// this line is used by starport scaffolding # 1

	return cmd
}
