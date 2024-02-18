import { Grid, TextField } from "@mui/material";

export default function Input({
  label,
  name,
  autoFocus = false,
  width = '250px',
  type = "text",
}) {
  return (
    <>
      <Grid sx={{width: width}}>
        <TextField
          type={type}
          name={name}
          label={label}
          required
          autoFocus={autoFocus}
          fullWidth
        />
      </Grid>
    </>
  );
}
