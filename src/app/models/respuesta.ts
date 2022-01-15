export class Respuesta <T>{

    isSuccess:boolean =false;

    result:T|undefined;

    displayMessage:string="";

    errorMessages:Array<string> = new Array<string>();
}