import React, { useCallback, useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const Wrapper = styled("div")({});

const StyledTypography = styled(Typography)({
  color: "black",
});

const StyledFormControl = styled(FormControl)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  gap: 10,
});

const StyledTextField = styled(TextField)({});

const StyledButton = styled(Button)({});

type Props = {
  onClick: () => void;
};

export const SampleComponent: React.FC<Props> = (props) => {
  const [shown, setShown] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = useCallback((value: string) => {
    setValue(value);
    setShown(false);
  }, []);

  const handleClick = useCallback(() => {
    setShown(true);
    props.onClick();
  }, []);

  return (
    <Wrapper>
      {shown && <StyledTypography variant="h1">{value}</StyledTypography>}
      <StyledFormControl>
        <StyledTextField
          variant="outlined"
          onChange={(e) => handleChange(e.target.value)}
        />
        <StyledButton variant="outlined" onClick={handleClick}>
          submit
        </StyledButton>
      </StyledFormControl>
    </Wrapper>
  );
};
