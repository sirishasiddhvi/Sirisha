// import  BalloonEditor  from "@ckeditor/ckeditor5-build-balloon";
import React, { useState } from "react";
import {Box} from "@mui/material"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const CkEditor = () => {
  const [data, setData] = useState();
  console.log("bjhjbn")
  return (
    <Box sx={{ m: 15 }}>
        <h1>bjnj</h1>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
            setData( editor.getData())
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </Box>
  );
};
