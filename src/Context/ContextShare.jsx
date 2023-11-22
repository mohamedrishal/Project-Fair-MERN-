import React, { createContext, useState } from "react";
export const addProjectResponseContext = createContext();

function ContextShare({ children }) {
  const [addProjectResponse, setAddProjectResponse] = useState({});
  return (
   <>
        <addProjectResponseContext.provider
          value={{ addProjectResponse, setAddProjectResponse }}
        >
          {children}
        </addProjectResponseContext.provider>
   </>
  );
}

export default ContextShare;
