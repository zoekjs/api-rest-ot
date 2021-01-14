import { Controller, Get, HttpStatus, Param, Post, Res, Body, Delete } from '@nestjs/common';
import { CreateWorkOrderDTO } from 'src/work-order/dto/workOrders.dto';
import { WorkOrderService } from 'src/work-order/services/work-order/work-order.service';
import { WorkOrder } from '../../interfaces/workOrders.interface';

@Controller('api/work-orders')
export class WorkOrderController {

    constructor(private workOrderService: WorkOrderService){}

    @Get()
    async getWorkOrders(@Res() res): Promise<WorkOrder[]> {
        const workOrders = await this.workOrderService.getWorkOrders();
        if(workOrders.length == 0) return res.status(HttpStatus.NOT_FOUND).json({message: 'No hay ordenes de trabajo para mostrar :('})
        return res.status(HttpStatus.OK).json({ workOrders })
    }

    @Get('/:rut')
    async getWorkOrdersByClient(@Param() rut: number): Promise<WorkOrder[]> {
        return await this.workOrderService.getWorkOrdersByClient(rut);
    }

    @Get(':id')
    async getWorkOrder(@Res() res, @Param() id: number): Promise<WorkOrder>{
        return await this.workOrderService.getWorkOrder(id);
    }

    @Post()
    async createWorkOrder(@Res() res, @Body() createWorkOrderDTO: CreateWorkOrderDTO): Promise<WorkOrder>{
        const workOrder = await this.workOrderService.createWorkOrder(createWorkOrderDTO)
        return res.status(HttpStatus.OK).json({ workOrder });
    }

    @Delete('/:work_order_id')
    async deleteWorkOrder(@Param() work_order_id: number) {
        return await this.workOrderService.deleteWorkOrder(work_order_id);
    }
}
