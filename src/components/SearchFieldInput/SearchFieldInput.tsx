import { ChangeEventHandler } from "react";

import { OutlinedInputStyles } from "./searchFieldInput.styles";

export function SearchFieldInput({
    handleSearchChange,
}: {
    handleSearchChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}): React.ReactElement {
    return <OutlinedInputStyles variant="outlined" focused placeholder="Search" onChange={handleSearchChange} />;
}
