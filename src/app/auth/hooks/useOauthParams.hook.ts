import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { OAUTH_REQUIRED_PARAMS } from "../constants/auth.const";

type OauthParamsResult = [URLSearchParams, {
    isValid: boolean;
    missingParams: ("response_type" | "client_id" | "redirect_uri" | "state" | "code_challenge" | "code_challenge_method" | "resource_id")[];
    params: {
        responseType: string | null;
        clientId: string | null;
        redirectUri: string | null;
        state: string | null;
        codeChallenge: string | null;
        codeChallengeMethod: string | null;
        resourceId: string | null;
    };
}];

export const useOauthParams = (): OauthParamsResult => {
  const [searchParams] = useSearchParams();

  const searchParamsValidation = useMemo(() => {
    const missingParams = OAUTH_REQUIRED_PARAMS.filter(
      (param) => !searchParams.get(param)
    );

    return {
      isValid: missingParams.length === 0,
      missingParams,
      params: {
        responseType: searchParams.get("response_type"),
        clientId: searchParams.get("client_id"),
        redirectUri: searchParams.get("redirect_uri"),
        state: searchParams.get("state"),
        codeChallenge: searchParams.get("code_challenge"),
        codeChallengeMethod: searchParams.get("code_challenge_method"),
        resourceId: searchParams.get("resource_id"),
      },
    };
  }, [searchParams]);

  return [searchParams, searchParamsValidation];
};