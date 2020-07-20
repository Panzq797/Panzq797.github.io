import React from "react";
import NavBar from "./navBar";
import createPalette from '@material-ui/core/styles/createPalette';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const Layout = ({ children }) => {
  var palette = createPalette ({
    primary: {
      main: '#FFF000',
      light: '#E63946'
    },
    secondary: {
      main: '#FFFFFF',
      light: '#E1E8E1'
    }
  })

  var theme = createMuiTheme({
    palette: palette
  })


  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      {children}
    </MuiThemeProvider>
  );
};
export default Layout;
