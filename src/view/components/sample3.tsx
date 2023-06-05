import { Drawer, Typography, styled } from "@mui/material";
import React from "react";

const StyledDrawer = styled(Drawer)({});

type Props = {
  open: boolean;
  onOpenClose: (state: boolean) => void;
};

export const SampleComponent3: React.FC<Props> = (props) => {
  return (
    <StyledDrawer
      open={props.open}
      onClose={() => props.onOpenClose(false)}
      anchor="right"
    >
      <Typography variant="h1">{`${props.open}`}</Typography>
    </StyledDrawer>
  );
};
