"use client"; 

import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const inter = Inter({ subsets: ["latin"] });



const StyledBox = styled(Box)`
  background-color: lightblue;
`;
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
     <StyledBox>
     <body className={inter.className}>{children}</body>
     </StyledBox>
    
    </html>
  );
}
