import { StyledButton } from "@renderer/components/ui/button"
import { useCreateWalletMutation } from "@renderer/queries/wallet"

export const CreateWallet = () => {
  const mutation = useCreateWalletMutation()

  return (
    <div>
      <StyledButton
        variant="primary"
        isLoading={mutation.isPending}
        onClick={() => mutation.mutate()}
      >
        Create Wallet
      </StyledButton>

      <p className="my-2 text-theme-inactive">
        Create a free wallet to receive
        {" "}
        <strong>PowerTokens</strong>
        , which can
        be used to reward creators and also get rewarded for your content
        contributions.
      </p>
    </div>
  )
}
