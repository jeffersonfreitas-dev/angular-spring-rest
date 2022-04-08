export class AppConstants {

  public static get baseServidor() : string {return "http://localhost:8080"}
  public static get baseLogins(): string {return this.baseServidor + "cursospringrestapi/login"}
  public static get baseUrl(): string {return this.baseServidor + "cursospringrestapi/usuario"}
}
