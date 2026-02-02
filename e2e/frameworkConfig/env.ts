export class Env {
  public static readonly BASE_URL = process.env.BASE_URL ?? "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  public static readonly USERNAME = process.env.VALID_USERNAME ?? "Admin";
  public static readonly PASSWORD = process.env.VALID_PASSWORD ?? "admin123";
  public static readonly INVALID_PASSWORD = process.env.INVALID_PASSWORD ?? "wrongPassword";
  public static readonly UNKNOWN_USER = process.env.UNKNOWN_USER ?? "UnknownUser";
}
