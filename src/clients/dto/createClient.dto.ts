import { IsNotEmpty } from "class-validator";

export class CreateClientDTO {
    @IsNotEmpty({ message: "El rut es obligatorio"})
    readonly rut: number;
    @IsNotEmpty({ message: "El nombre es obligatorio"})
    readonly name: string;
    @IsNotEmpty({ message: "El apellido es obligatorio"})
    readonly last_name: string;
    @IsNotEmpty({ message: "el telefono de contacto es obligatorio"})
    readonly phone: string; 
    @IsNotEmpty({ message: "La dirección es obligatoria"})
    readonly address: string;
}