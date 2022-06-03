import { OutlinedInput } from "@mui/material";
import { ChangeEventHandler } from "react";

export function SearchFieldInput({handleSearchChange}: {handleSearchChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>}): React.ReactElement {
    return  <OutlinedInput placeholder="Search" onChange={handleSearchChange} />;
}
