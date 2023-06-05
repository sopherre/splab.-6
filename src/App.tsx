import React, { useState } from "react";
import "./App.css";
import { SampleComponent } from "view/components/sample";
import { Button, styled } from "@mui/material";
import { SampleComponent2 } from "view/components/sample2";
import { SampleComponent3 } from "view/components/sample3";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  gap: 10,
});

const Sample2Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  height: 500,
});

const Sample3Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  height: 500,
});

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Wrapper className="App">
      <SampleComponent onClick={() => console.log("test")} />
      <Sample2Wrapper>
        <SampleComponent2 open={openDialog} onOpenClose={setOpenDialog} />
        <Button variant="outlined" onClick={() => setOpenDialog(true)}>
          open dialog
        </Button>
      </Sample2Wrapper>
      <Sample3Wrapper>
        <SampleComponent3 open={openDrawer} onOpenClose={setOpenDrawer} />
        <Button variant="outlined" onClick={() => setOpenDrawer(true)}>
          open drawer
        </Button>
      </Sample3Wrapper>
    </Wrapper>
  );
}

export default App;
