import React, { useState } from 'react';
import AppContext from '.';
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState('testUser'); //originally in app
  const [images, setImages] = useState([]); //originally in app
  const context = {
    setUser,
    setImages,
    images,
    setImages,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
