import { IsNotEmpty } from "class-validator";

export class CreateWorkOrderDetailDTO {
    @IsNotEmpty({ message: 'La cantidad es obligatoria'})
    public readonly quantity: number;

    @IsNotEmpty({ message: 'La descripción es obligatoria'})
    public readonly description: string;

    @IsNotEmpty({ message: 'El precio es obligatorio'})
    public readonly price: number;

    public readonly workOrderId: number;
}