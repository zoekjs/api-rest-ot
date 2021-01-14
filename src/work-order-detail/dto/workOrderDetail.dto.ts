import { IsNotEmpty } from "class-validator";

export class CreateWorkOrderDetailDTO {
    @IsNotEmpty({ message: 'La cantidad es obligatoria'})
    readonly quantity: number;
    @IsNotEmpty({ message: 'La descripción es obligatoria'})
    readonly description: string;
    @IsNotEmpty({ message: 'El precio es obligatorio'})
    readonly price: number;
    readonly workOrderId: number;
}