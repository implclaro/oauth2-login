import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Container, FormControlLabel, TextField } from "@mui/material";
import { RiArrowRightLine } from "react-icons/ri";
import { LoginUserSchema, type LoginUser } from "../models/auth.model";
import { useOauthLogin } from "../clients/login.client";
import { useNavigate } from "react-router-dom";
import { useOauthParams } from "../hooks/useOauthParams.hook";
import { DEFAULT_RESTART_ROUTE } from "@/app/errors/constants/error.const";

export default function LoginForm() {

  const [_, searchParamsValidation] = useOauthParams();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<LoginUser>({ resolver: zodResolver(LoginUserSchema) });

  const { mutateAsync: loginAsync } = useOauthLogin();

  const onChangeShowPassword = () => setShowPassword((prev) => !prev);

  const onLogin = async (user: LoginUser) => {
    const response = await loginAsync(user);
    const url = new URL(response.callbackUri);
    url.searchParams.set("code", response.code);
    url.searchParams.set("state", response.state ?? '');
    window.location.href = url.toString();
  };

  useEffect(() => {
    if (!searchParamsValidation.isValid) {
      navigate(DEFAULT_RESTART_ROUTE);
    }
  }, []);

  return (
    <Container className="flex items-center justify-center min-h-svh">
      <div className="animate-fade-up">
        <form
          className="flex flex-col items-center justify-center gap-6 rounded-2xl h-[calc(90svh)] w-sm sm:w-xl"
          onSubmit={handleSubmit(onLogin)}
        >
          <div className="flex items-center pb-6 sm:w-md 2xl:w-lg">
            <h2
              className="select-none text-3xl text-zinc-600 w-56 sm:w-md 2xl:w-lg"
            >
              Inicio de sesión
            </h2>
          </div>

          {/* Account field */}
          <div className="flex flex-col items-center justify-center gap-6 sm:w-md 2xl:w-lg">
            <TextField
              id="account"
              variant="outlined"
              label="Usuario o correo"
              className="select-none w-full"
              error={!!errors.account?.message}
              helperText={errors.account?.message}
              {...register("account")}
            />

            <div className="w-full">
              {/* Password field */}
              <TextField
                type={showPassword ? "text" : "password"}
                id="passwd"
                variant="outlined"
                label="Ingresa tu contraseña"
                className="select-none w-full"
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                {...register("password")}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPassword}
                    onChange={onChangeShowPassword}
                  />
                }
                className="[&>.css-rizt0-MuiTypography-root]:text-sm! [&>.MuiSvgIcon-root]:text-2xl [&>.css-rizt0-MuiTypography-root]:text-zinc-600 w-full select-none"
                label="Mostrar contraseña"
              />
            </div>

            {/* Send credentials */}
            <Button
              type="submit"
              variant="contained"
              className="w-full bg-red-primary! group/buttonLogin [&_.MuiCircularProgress-circle]:stroke-white!"
              loading={isSubmitting}
            >
              Iniciar
              <span className="px-2 text-xl group-hover/buttonLogin:translate-x-1 ease-in-out duration-200">
                <RiArrowRightLine />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </Container>
  )
}