import { Divider } from "@mui/material";

import { ListItemChildStyles, ListItemStyles, ListItemWrapperStyles } from "./listItem.styles";

interface ListItemInterface {
    children: React.ReactNode;
}

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
