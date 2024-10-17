// src/screens/UploadScreen.js

import React, { useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import FileUpload from '../components/FileUpload';

const UploadScreen = () => {
  return (
    <BackgroundWrapper>
      <FileUpload />
    </BackgroundWrapper>
  );
};

export default UploadScreen;
