import { Box, Divider, ListItem as ListItemMui } from "@mui/material";

interface ListItemInterface {
    children: React.ReactNode;
}

export function ListItem({ children }: ListItemInterface) {
    return (
        <ListItemMui>
            <Box>
                <Divider />
                {children}
            </Box>
        </ListItemMui>
    );
}
