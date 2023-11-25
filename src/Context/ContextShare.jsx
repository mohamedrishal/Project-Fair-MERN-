import React, { createContext, useState } from "react";
export const addProjectResponseContext = createContext();
export const EditProjectResponseContext = createContext();

function ContextShare({ children }) {
  const [addProjectResponse, setAddProjectResponse] = useState({});
  const [editProjectResponse, setEditProjectResponse] = useState({});
  return (
    <>
      <addProjectResponseContext.Provider
        value={{ addProjectResponse, setAddProjectResponse }}
      >
        <EditProjectResponseContext.Provider
          value={{ editProjectResponse, setEditProjectResponse }}
        >
          {children}
        </EditProjectResponseContext.Provider>
      </addProjectResponseContext.Provider>
    </>
  );
}

export default ContextShare;
