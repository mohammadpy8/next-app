"use client";

import { Box } from "@mui/material";
import type { FC } from "react";
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      iconName: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

type PropsIconComponent = {
  iconName: JSX.IntrinsicElements;
  iconColor: string;
  iconSize: number | string;
};


const IconComponent: FC<PropsIconComponent> = ({ iconColor, iconName, iconSize, ...restIcon }) => {
  const restProps = {
    ...restIcon,
    iconSize,
  };

  return (
    <Box>
      <iconName color={iconColor} {...restProps} />
    </Box>
  );
};

export { IconComponent };
