import { useState, createContext } from "react";

export const sideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <sideBarContext.Provider 
    value={{ 
        isOpen,
        setIsOpen,
        handleClose, 
        }}>{children}
    </sideBarContext.Provider>
  );
};

export default SideBarProvider