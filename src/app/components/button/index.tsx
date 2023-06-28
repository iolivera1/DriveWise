import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    px-5
    py-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `}
`;

const OutlineButton = styled(BaseButton)`
  ${tw`
    bg-[#00A3FF]
  `};

  &:hover {
    ${tw`
      bg-transparent
      text-[#00A3FF]
      border-[#00A3FF]
    `};
  }
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-[#00A3FF]
    text-[#00A3FF]
    bg-transparent
  `};

  &:hover {
    ${tw`
      bg-[#00A3FF]
      text-white
      border-transparent
    `};
  }
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled") {
    return <FilledButton className={className}> {text} </FilledButton>;
  } else {
    return <OutlineButton className={className}> {text} </OutlineButton>;
  }
}
