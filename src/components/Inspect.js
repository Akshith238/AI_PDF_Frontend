import React, { useState } from 'react';
import { Fab, Tooltip, Button, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inspect = () => {
  const [excelFile, setExcelFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setExcelFile(file);
    } else {
      toast.error('Please upload a valid Excel file.');
    }
  };

  const handleSend = async () => {
    const formData = new FormData();
    if (excelFile) {
      formData.append('file', excelFile);
    }

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }
      
      toast.success('Data sent successfully');
    } catch (error) {
      toast.error('Error sending data: ' + error.message);
    }
  };

  return (
    <div className="p-4 space-y-4 font-poppins flex flex-col h-screen items-center bg-gray-100">
      <Typography variant="h3" component="h1" className="font-bold font-poppins text-slate-900 mb-6">
        Inspect Your Macros
      </Typography>
      <Box
        className="w-[300px] h-[300px] flex items-center justify-center bg-white rounded-lg shadow-lg"
        sx={{ border: '2px dashed #E5E7EB' }}
      >
        <input
          accept=".xlsx"
          id="excel-upload"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <label htmlFor="excel-upload" className="flex flex-col items-center cursor-pointer">
          <UploadFileIcon fontSize="large" className='text-slate-900' />
          <Typography variant="h6" className="font-poppins text-center text-gray-800 mt-2">
            Drag and drop or click to upload Excel file
          </Typography>
        </label>
      </Box>
      {excelFile && (
        <Box className="text-center mt-4">
          <Typography variant="subtitle1" className="font-poppins text-slate-800">
            {excelFile.name}
          </Typography>
        </Box>
      )}
      <Button
        variant="contained"
        className="rounded-lg font-poppins bg-slate-900"
        onClick={handleSend}
      >
        Send
      </Button>
      <ToastContainer />
    </div>
  );
};

export default Inspect;
