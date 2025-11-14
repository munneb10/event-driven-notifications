import { eventBus } from "../eventBus";

export class NotificationService {
  constructor() {
    
  }

  subscribe () {
    eventBus.subscribe("user:registered", this.sendWelcomeNotification);
    eventBus.subscribe("order:placed", this.sendOrderConfirmation);
  }
  private sendWelcomeNotification(user: any) {
    console.log(`📩 Welcome email sent to ${user.name}!`);
  }

  private sendOrderConfirmation(order: any) {
    console.log(`🛒 Order confirmation sent for order #${order.id}`);
  }
}
