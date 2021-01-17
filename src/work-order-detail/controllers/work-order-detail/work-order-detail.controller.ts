import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateWorkOrderDetailDTO } from 'src/work-order-detail/dto/workOrderDetail.dto';
import { WorkOrderDetail } from 'src/work-order-detail/interfaces/workOrderDetail';
import { WorkOrderDetailService } from 'src/work-order-detail/services/work-order-detail/work-order-detail.service';


@Controller('api/work-order-detail')
export class WorkOrderDetailController {
    constructor(private workOrderDetailService: WorkOrderDetailService ){}

    @Get('/:workOrder')
    async getDetails(@Param() param): Promise<WorkOrderDetail[]>{
        return await this.workOrderDetailService.getWorkOrderDetail(param.workOrder);
    }

    @Post()
    async createDetail(@Body() createWorkOrderDetailDTO: CreateWorkOrderDetailDTO): Promise<WorkOrderDetail> {
        return await this.workOrderDetailService.createDetail(createWorkOrderDetailDTO);
    }

    @Put('/:work_order_detail_id')
    async updateDetail(@Body() updateWorkOrderDetailDTO: CreateWorkOrderDetailDTO, @Param() id: number): Promise<WorkOrderDetail>{
        return await this.workOrderDetailService.updateDetail(id, updateWorkOrderDetailDTO);
    }

    @Delete('/:work_order_detail_id')
    async deleteDetail(@Param() workOrderId: number): Promise<Boolean> {
        return await this.workOrderDetailService.deleteDetail(workOrderId);
    }
}
