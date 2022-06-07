import { ChangeEventHandler } from "react";

import { SearchFieldInput } from "../SearchFieldInput/SearchFieldInput";

import { AppBarStyles, GitHubIconStyles, HeaderStyles, IconButtonStyles, ToolbarStyles } from "./header.styles";

export function Header({
    handleSearchChange,
}: {
    handleSearchChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}): React.ReactElement {
    return (
        <HeaderStyles>
            <AppBarStyles position="static" elevation={0}>
                <ToolbarStyles>
                    <IconButtonStyles aria-label="Logo">
                        <GitHubIconStyles />
                    </IconButtonStyles>
                    <SearchFieldInput handleSearchChange={handleSearchChange} />
                </ToolbarStyles>
            </AppBarStyles>
        </HeaderStyles>
    );
}
