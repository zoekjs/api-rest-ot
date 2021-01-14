import { Body, Controller, Get, HttpStatus, Post, Res, NotFoundException, InternalServerErrorException, Param, Put, Delete } from '@nestjs/common';
import { CreateClientDTO } from 'src/clients/dto/createClient.dto';
import { ClientsService } from '../../services/clients/clients.service';

@Controller('api/clients')
export class ClientsController {

    constructor(private clientService: ClientsService){}

    @Get()
    async getAll(@Res() res) {
        const clients = await this.clientService.getClients();
        if(clients.length == 0) throw new NotFoundException({ message: 'No hay clientes para mostrar '})
        else return res.status(HttpStatus.OK).json({ clients })
    }

    @Post()
    async createClient(@Res() res, @Body() createClientDTO: CreateClientDTO) {
        const client = await this.clientService.createClient(createClientDTO);
        if(!client) throw new InternalServerErrorException({ message: 'El Cliente no pudo ser registrado'})
        return res.status(HttpStatus.OK).json({
            message: 'received',
            client
        });
    }

    @Get('/:rut')
    async getClient(@Res() res, @Param() rut: number) {
        const client = await this.clientService.getClient(rut)
        if(!client) throw new NotFoundException({ message: 'El cliente que busca no existe en nuestros registros'})
        return res.status(HttpStatus.OK).json({client})
    }

    @Put('/:rut')
    async updateClient(@Res() res, @Param() rut: number, @Body() body) {
        const client = await this.clientService.updateClient(rut, body);
        if(!client) throw new InternalServerErrorException({ message: 'No se pudo actualizar el cliente'})
        return res.status(HttpStatus.OK).json({ status: 'Cliente actualizado con éxito', client})
    } 

    @Delete('/:rut')
    async deleteClient(@Res() res, @Param() rut: number) {
        const {affected} = await this.clientService.deleteClient(rut);
        if(affected > 0){
            return res.status(HttpStatus.OK).json({ status: 'success', message: 'Cliente eliminado correctamente'})
        }else{
            throw new NotFoundException({ message: 'El cliente que desea eliminar no existe en nuestros registros'})
        }
        
    }
}
