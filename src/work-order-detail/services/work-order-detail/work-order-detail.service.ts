import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkOrderDetailDTO } from '../../dto/workOrderDetail.dto';
import { WorkOrderDetail as WorkOrderDetailEnt } from '../../entities/workOrderDetail.entity';
import { Repository } from 'typeorm';
import { WorkOrderDetail } from '../../interfaces/workOrderDetail';

@Injectable()
export class WorkOrderDetailService {
    constructor(@InjectRepository(WorkOrderDetailEnt) private readonly workOrderDetailRepo: Repository<WorkOrderDetail>) { }

    async getWorkOrderDetail(work_order_id: number): Promise<WorkOrderDetail[]> {
        const workOrderDetail = await this.workOrderDetailRepo.find({ where: { work_order_id: work_order_id }, relations: ["workOrder"] });
        console.log(workOrderDetail)
        if (workOrderDetail.length == 0) { throw new NotFoundException({ message: 'No hay detalles para mostrar' }) }
        return workOrderDetail;
    }

    async createDetail(createWorkOrderDetailDTO: CreateWorkOrderDetailDTO): Promise<WorkOrderDetail> {
        const detail = await this.workOrderDetailRepo.create(createWorkOrderDetailDTO);
        return this.workOrderDetailRepo.save(detail)
    }

    async updateDetail(id: number, updateWorkOrderDetailDTO: Partial<CreateWorkOrderDetailDTO>): Promise<WorkOrderDetail> {
        const updateDetail = await this.workOrderDetailRepo.findOne(id)
        this.workOrderDetailRepo.merge(updateDetail, updateWorkOrderDetailDTO)
        return this.workOrderDetailRepo.save(updateDetail);


    }

    async deleteDetail(workOrderDetailId: number) {
        const { affected } = await this.workOrderDetailRepo.delete(workOrderDetailId);
        if (affected == 0) {
            return false;
        } else {
            return true;
        }
    }
}
