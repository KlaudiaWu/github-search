import { Divider } from "@mui/material";

import { ListItemChildStyles, ListItemStyles, ListItemWrapperStyles } from "./listItem.styles";

interface ListItemInterface {
    children: React.ReactNode;
}

// Template for a list of items of all kinds. To be universal, it only has styles and divider
export function ListItem({ children }: ListItemInterface) {
    return (
        <ListItemStyles>
            <ListItemWrapperStyles>
                <Divider />
                <ListItemChildStyles>{children}</ListItemChildStyles>
            </ListItemWrapperStyles>
        </ListItemStyles>
    );
}
