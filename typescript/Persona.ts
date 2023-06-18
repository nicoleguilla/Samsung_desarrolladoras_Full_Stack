import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';

export class Persona {
  //Atributos
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _dni: string;
  private _fechaNacimiento: Date;
  private _colorFavorito: string;
  private _sexo: string;
  private _direcciones: Array<Direccion>;
  private _mails: Array<Mail>;
  private _telefonos: Array<Telefono>;
  private _notas: string;
  
  //Constructor
  constructor(nombre: string, apellidos: string, edad: number, dni: string, fechaNacimiento: Date, colorFavorito: string,sexo: string,direcciones: Array<Direccion>, mails: Array<Mail>, telefonos: Array<Telefono>, notas: string) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._dni = dni;
    this._fechaNacimiento = fechaNacimiento;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }
  
  //Getters y Setters
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  
  public get apellidos(): string {
    return this._apellidos;
  }
  public set apellidos(value: string) {
    this._apellidos = value;
  }

  public get edad(): number {
    return this._edad;
  }
  public set edad(value: number) {
    this._edad = value;
  }

  public get dni(): string {
    return this._dni;
  }
  public set dni(value: string) {
    this._dni = value;
  }

  public get fechaNacimiento(): Date {
    return this._fechaNacimiento;
  }
  public set fechaNacimiento(value: Date) {
    this._fechaNacimiento = value;
  }

  public get colorFavorito(): string {
    return this._colorFavorito;
  }
  public set colorFavorito(value: string) {
    this._colorFavorito = value;
  }

  public get sexo(): string {
    return this._sexo;
  }
  public set sexo(value: string) {
    this._sexo = value;
  }

  public get direcciones(): Array<Direccion> {
    return this._direcciones;
  }
  public set direcciones(value: Array<Direccion>) {
    this._direcciones = value;
  }

  public get mails(): Array<Mail> {
    return this._mails;
  }
  public set mails(value: Array<Mail>) {
    this._mails = value;
  }

  public get telefonos(): Array<Telefono> {
    return this._telefonos;
  }
  public set telefonos(value: Array<Telefono>) {
    this._telefonos = value;
  }

  public get notas(): string {
    return this._notas;
  }
  public set notas(value: string) {
    this._notas = value;
  }

  //Métodos

  obtenerDirecciones(): string[] {
    return this.direcciones.map(
      (direccion) =>
        `${direccion.calle} ${direccion.numero}, ${direccion.poblacion}, ${direccion.provincia}`
    );
  }

  obtenerMails(): string[] {
    return this.mails.map((mail) => `${mail.tipo}: ${mail.direccion}`);
  }

  obtenerTelefonos(): string[] {
    return this.telefonos.map((telefono) => `${telefono.tipo}: ${telefono.numero}`);
  }
}
  
