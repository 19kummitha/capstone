export interface LoginResponse{
    statusCode: number;
  value: {
    expiration: string;
    roles: string[];
    token: string;
  };
}