import { ChangeEventHandler } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import { ReactComponent as GitHubIcon } from '../../images/logo-github.svg';
import { SearchFieldInput } from "../SearchFieldInput/SearchFieldInput";

export function Header({handleSearchChange}: {handleSearchChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}): React.ReactElement {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} >
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="Logo">
                        <GitHubIcon />
                    </IconButton>
                    <SearchFieldInput handleSearchChange={handleSearchChange}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
