export class AppConstants {

  public static get baseServidor() : string {return "http://localhost:8080"}
  public static get baseLogins(): string {return this.baseServidor + "/login"}
  public static get baseUrlUsuario(): string {return this.baseServidor + "/usuarios/"}
}
