import { BadRequestException, Injectable } from '@nestjs/common';
import { Client } from '../../interfaces/clients.interface';
import { CreateClientDTO } from '../../dto/createClient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Client as ClientEnt } from '../../entities/clients.entity';
import { WorkOrder, WorkOrder as WorkOrderEnt } from '../../../work-order/entities/workOrder.entity';

@Injectable()
export class ClientsService {
    constructor(@InjectRepository(ClientEnt) private readonly clientRepo: Repository<Client>){}

    async getClients(): Promise<Client[]> {
        const clients = await this.clientRepo.find();
        console.log(clients)
        return clients;
    }

    async getClient(rut: number): Promise<Client> {
        const client = await this.clientRepo.findOne(rut);
        return client;
    }

    async createClient(createClientDTO: CreateClientDTO): Promise<Client> {
        const count = await this.clientRepo.count(createClientDTO);
        if(count > 0) throw new BadRequestException({status: 'error', message: 'El cliente ya existe en el sistema :('})
        else{
            const client = this.clientRepo.create(createClientDTO);    
            return await this.clientRepo.save(client);
        }
    }

    async deleteClient(rut: number): Promise<any> {
        const deletedClient = await this.clientRepo.delete(rut);
        return deletedClient;
    }

    async getWorkOrders(rut: number): Promise<WorkOrder[]>{
        const workOrders = await getRepository(WorkOrderEnt)
            .createQueryBuilder()
            .select("*")
            .from(WorkOrderEnt, "work_order")
            .where("rut_client = :rut", { rut })
            .getMany();

        return workOrders;
    }

    async updateClient(rut: number, updateClientDTO: CreateClientDTO): Promise<Client> {
        try{
            const client = await this.clientRepo.findOne(rut);
            this.clientRepo.merge(client, updateClientDTO)
            return this.clientRepo.save(client);
        }catch(err){
            throw new BadRequestException({status: 'error', message: 'El cliente que desea actualizar no existe en nuestros registros :('})
        }      
    }
}
