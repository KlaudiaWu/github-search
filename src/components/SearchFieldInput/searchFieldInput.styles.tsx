import { styled, TextField } from "@mui/material";

export const OutlinedInputStyles = styled(TextField)({
    alignSelf: "end",
    "& .MuiOutlinedInput-root": {
        height: 37,
        width: 242,
        "&::placeholder": {
            opacity: 1,
        },
        color: "#D0D7DE",
        fontSize: 16,
        lineHeight: 24,
        "&.Mui-focused fieldset": {
            borderColor: "#D0D7DE",
            borderWidth: 1,
            borderRadius: 5,
        },
    },
});
