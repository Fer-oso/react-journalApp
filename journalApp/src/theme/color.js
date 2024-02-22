import { createTheme } from "@mui/material";
import { grey,red } from "@mui/material/colors";

export const colorTheme = createTheme({
    palette:{
      primary:{
        main: grey[100],
        second: grey[400]
      },
      secondary:{
        main: grey[400]
      },
      error:{
        main: red.A400
      },
    },
})