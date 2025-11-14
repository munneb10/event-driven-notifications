import { eventBus } from "../eventBus";

export class OrderService {
  placeOrder(userId: number, item: string) {
    const order = { id: Date.now(), userId, item };
    console.log(`📦 Order placed for ${item}`);
    eventBus.publish("order:placed", order);
  }
}
