import { Dialog, DialogContent, styled } from "@mui/material";
import React from "react";

const StyledDialog = styled(Dialog)({
  width: "100%",
});

const StyledDialogContent = styled(DialogContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 0,
  paddingRight: 0,
});

type Props = {
  open: boolean;
  onOpenClose: (state: boolean) => void;
};

export const SampleComponent2: React.FC<Props> = (props) => {
  return (
    <StyledDialog
      open={props.open}
      onClose={() => props.onOpenClose(false)}
      fullWidth
    >
      <StyledDialogContent>{`${props.open}`}</StyledDialogContent>
    </StyledDialog>
  );
};
