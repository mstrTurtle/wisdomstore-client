import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import axios from 'axios';

export default function UploadButton({handleDetail}) {
    var uploadFile = (file) => {
     
        // Create an object of formData
        const formData = new FormData();
       
        // Update the formData object
        formData.append(
          "file",
          file,
          file.name
        );
       
        // Details of the uploaded file
        console.log(file);
       
        axios.post("api/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }},)
        .then((resp)=>{
            console.log(resp.data)
            handleDetail(resp.data)
        })
        .catch((e)=>{
            console.log(e)
            handleDetail( {status:'Fail', reason:'error catched'})
        })
      };


    var onFileChange = event => {
        // Update the state
        uploadFile(event.target.files[0]);
      };
       
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        上传图片
        <input hidden onChange={onFileChange} accept="image/*" multiple type="file" />
      </Button>
    </Stack>
  );
}