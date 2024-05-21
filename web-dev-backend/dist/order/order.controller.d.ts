import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(dto: CreateOrderDto, req: any): Promise<any>;
    findOne(req: any): Promise<import("./entities/order_item.entity").OrderItemEntity[]>;
}
