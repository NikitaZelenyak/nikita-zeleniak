export const CTAButton = ({
  text = "Button text",
  style = "",
  onClick,
}: {
  text: string;
  style?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-md bg-MainColor px-12 py-2 h text-lg font-semibold text-WhiteColor shadow-sm hover:bg-HoverMainColor ease-bg-blink duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-MainColor-100  ${style}`}
    >
      {text}
    </button>
  );
};
