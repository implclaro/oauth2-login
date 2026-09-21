import zod from "zod";

export const LoginUserSchema = zod.object({
  account: zod
    .string()
    .max(100),
  password: zod
    .string({ message: "La contraseña no puede ser nula" })
    .max(50, "La contraseña debe tener un máximo de 50 caracteres")
});

export const LoginResponseSchema = zod.object({
  state: zod.string().nullable(),
  code: zod.string(),
  callbackUri: zod.url()
});

export type LoginUser = zod.infer<typeof LoginUserSchema>;
export type LoginResponse = zod.infer<typeof LoginResponseSchema>;
