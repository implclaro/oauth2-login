export const DEFAULT_LOGIN_ROUTE='/auth/ui/login';

export const OAUTH_REQUIRED_PARAMS = [
  "response_type",
  "client_id",
  "redirect_uri",
  "state",
  "code_challenge",
  "code_challenge_method",
  "resource_id",
] as const;