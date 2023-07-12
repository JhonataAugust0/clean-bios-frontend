import React, { useState } from 'react';
import styled from 'styled-components';

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const SidebarContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #f2f2f2;
  z-index: 2;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const SidebarLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
`;

const SidebarFooter = styled.div`
  padding: 20px;
  background-color: #ddd;
`;

const DarkModeLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #333;
`;

const DarkModeSwitch = styled.input`
  margin-right: 10px;
`;

export const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <>
      {isSidebarOpen && <Overlay onClick={toggleSidebar} />}
      <SidebarContainer open={isSidebarOpen}>
        <SidebarContent>
          <SidebarLink href="./index.html">Home</SidebarLink>
          <SidebarLink href="./services.html">Serviços</SidebarLink>
        </SidebarContent>
        <SidebarFooter>
          <DarkModeLabel>
            <span>Modo escuro</span>
            <DarkModeSwitch type="checkbox" />
            <span className="slider" />
          </DarkModeLabel>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
};

