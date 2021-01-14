import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkOrderDTO } from '../../dto/workOrders.dto';
import { WorkOrder as WorkOrderEnt} from '../../entities/workOrder.entity';
import { WorkOrder } from '../../interfaces/workOrders.interface';
import { Repository } from 'typeorm';

@Injectable()
export class WorkOrderService {
    constructor(@InjectRepository(WorkOrderEnt) private readonly workOrderRepo: Repository<WorkOrder>){}

    async getWorkOrders(): Promise<WorkOrder[]> {
        const workOrders = await this.workOrderRepo.find();
        console.log(workOrders)
        return workOrders;   
    }

    async getWorkOrder(id: number): Promise<WorkOrder>{
        const workOrder = await this.workOrderRepo.findOne(id);
        return workOrder;
    }

    async createWorkOrder(createWorkOrderDTO: CreateWorkOrderDTO): Promise<WorkOrder> {
        const workOrder = await this.workOrderRepo.create(createWorkOrderDTO);
        
        return await this.workOrderRepo.save(workOrder);
    }

    async updateWorkOrder(id: number, updateWorkOrderDTO: CreateWorkOrderDTO): Promise<WorkOrder> {
        const workOrder = await this.workOrderRepo.findOne(id);
        await this.workOrderRepo.merge(workOrder, updateWorkOrderDTO);
        return await this.workOrderRepo.save(workOrder);
    }
    async getWorkOrdersByClient(rut: number): Promise<WorkOrder[]>{
        const workOrders = await this.workOrderRepo.find({ where: {client_rut: rut}, relations: ["client"]});
        console.log(workOrders);
        return workOrders;
    }
    async deleteWorkOrder(work_order_id: number) {
        const { affected } = await this.workOrderRepo.delete(work_order_id);   
        if(affected == 0){
            return false;
        }else{
            return true;
        }
    }
}
