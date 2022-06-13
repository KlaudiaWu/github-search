import { ChangeEventHandler } from "react";

import { OutlinedInputStyles } from "./searchFieldInput.styles";

// It's only input. The whole logic is in controllers. This component only creates events.
export function SearchFieldInput({
    handleSearchChange,
}: {
    handleSearchChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}): React.ReactElement {
    return <OutlinedInputStyles variant="outlined" focused placeholder="Search" onChange={handleSearchChange} />;
}
