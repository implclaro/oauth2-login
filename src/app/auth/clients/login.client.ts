import axios from "axios";
import {
  useMutation,
  type UseMutationResult,
} from "@tanstack/react-query";
import type { LoginResponse, LoginUser } from "../models/auth.model";
import { useOauthParams } from "../hooks/useOauthParams.hook";
import { showNotifyAlert } from "@/commons/base-components/alert/util/showNotify";

export const useOauthLogin = (): UseMutationResult<LoginResponse, Error, LoginUser> => {
  const [_, searchParamsValidation] = useOauthParams();

  const sendCredentials = async (credentials: LoginUser): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(import.meta.env.VITE_BASE_API_URI, credentials, {
      params: {
        "response_type": searchParamsValidation.params.responseType,
        "client_id": searchParamsValidation.params.clientId,
        "redirect_uri": searchParamsValidation.params.redirectUri,
        "state": searchParamsValidation.params.state,
        "code_challenge": searchParamsValidation.params.codeChallenge,
        "code_challenge_method": searchParamsValidation.params.codeChallengeMethod,
        "resource_id": searchParamsValidation.params.resourceId,
      }
    });

    return response.data;
  };

  return useMutation({
    mutationFn: sendCredentials,
    onError: (e: any) => {
      const status = e?.response?.status || 500;

      switch (status) {
        case 400:
          showNotifyAlert({
            title: "Inicio de sesión fallido",
            message: "La cuenta o la contraseña no son correctas",
            variant: "error"
          });
        break;
        case 502:
          showNotifyAlert({
            title: "Inicio de sesión fallido",
            message: "Actualmente no se encuentra disponible el servicio",
            variant: "error"
          });
        break;
        default:
          showNotifyAlert({
            title: "Inicio de sesión fallido",
            message: "Error desconocido al procesar los datos",
            variant: "error"
          });
        break;
      }
    }
  });
};