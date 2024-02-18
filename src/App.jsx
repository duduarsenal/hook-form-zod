import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar variant="circular" sx={{ margin: 1 }}>
            <img src="" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre-se
          </Typography>

          <Box
            component="form"
            display="flex"
            flexWrap="wrap"
            rowGap={2}
            marginBlock={3}
            justifyContent="space-between"
          >
            <Input label="Primeiro Nome" name="firstName" autoFocus={true} />
            <Input label="Sobrenome" name="lastName" />
            <Input label="Usuário" name="username" />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                sx={{ width: "250px" }}
                label="Data de Nascimento"
                format="DD/MM/YYYY"
                required
              />
            </LocalizationProvider>

            <Input label="Endereço de E-mail" name="email" width="100%" />
            <Input label="Senha" name="password" type="password" />
            <Input label="Confirmar Senha" name="repassword" type="password" />
          </Box>

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "rgba(230, 30, 0, 1)",
              outline: "solid 2px",
              outlineColor: "rgba(255, 0, 20, 0.8)",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "rgba(200, 30, 0, 1)",
              },
            }}
          >
            Criar Conta
          </Button>

          <Typography component="p" width="100%" textAlign="right">
            Ja possui uma conta?{" "}
            <Typography
              component="a"
              sx={{
                color: "red",
                cursor: "pointer",
                ":hover": { backgroundColor: "#ff000010" },
                padding: "5px",
                transition: "all .3s",
              }}
            >
              Registre-se
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
