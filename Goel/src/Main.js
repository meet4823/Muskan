import React, { useState } from "react";
import "./App.css";
import Document from "./Document";
import Table from "./Table";
import { Grid } from "@material-ui/core";
import PdfViewer from "./pdfViewer/pdfViewer"

function Main() {

  const [receivedUrl, setReceivedUrl] = useState("")

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Table setReceivedUrl={setReceivedUrl} />
        </Grid>
        <Grid item xs={8}>
          {/* <Document/> */}
          <PdfViewer fileUrl={receivedUrl} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
