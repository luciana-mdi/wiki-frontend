// src/screens/UploadScreen.js

import React, { useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Loading from '../components/Loading';

const LoadingScreen = () => {
  return (
    <BackgroundWrapper>
        <Loading />
    </BackgroundWrapper>
  );
};

export default LoadingScreen;
