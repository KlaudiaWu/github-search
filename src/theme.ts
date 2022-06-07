import { ThemeOptions } from "@mui/material"

export const theme: ThemeOptions = {
    palette: {
        common: {
            black: "#000000",
        },
        text: {
            primary: "#24292F",
            secondary: "#6F7781",
        },
        action: {
            active: "#166CD7"
        },
        grey: {
            700: "#24292F",
            500: "#6F7781"
        }
    }, 
    components: {

    },
    typography: {
        fontFamily: `"Roboto", "Open Sans", sans-serif`,
        h1: {
            fontSize: 26,
            lineHeight: 1.23,
            fontWeight: 500
        },
        h2: {
            fontSize: 21,
            lineHeight: 1.523,
            fontWeight: 500
        },
        h3: {
            fontSize: 20,
            lineHeight: 1.6,
            fontWeight: 500
        },
        h4: {
            fontSize: 16,
            lineHeight: 1.5,
            fontWeight: 500
        },
        body1: {
            fontSize: 16,
            lineHeight: 1.5,
            fontWeight: 500
        },
        body2: {
            fontSize: 14,
            lineHeight: 1.125,
            fontWeight: 500
        },
        caption: {
            fontSize: 12,
            lineHeight: 1,
            fontWeight: 500
        }
        


    }
}