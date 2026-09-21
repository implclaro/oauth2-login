import { DEFAULT_RESTART_ROUTE } from "@/app/errors/constants/error.const";
import { useEffect  } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useOauthParams } from "../hooks/useOauthParams.hook";

export default function Oauth2SearchParamsValidator() {
  const [searchParams, searchParamsValidation] = useOauthParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParamsValidation.isValid) {
        navigate(DEFAULT_RESTART_ROUTE);
    }
  }, [searchParams]);

  return (
    !searchParamsValidation.isValid ? <></> : <Outlet/>
  );
}