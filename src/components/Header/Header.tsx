import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import { ReactComponent as GitHubIcon } from '../../images/logo-github.svg';
import { SearchField } from "../SearchField/SearchField";

export function Header(): React.ReactElement {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="Logo">
                        <GitHubIcon />
                    </IconButton>
                    <SearchField />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
