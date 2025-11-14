type EventHandler = (data: any) => void;

export class EventBus {
  private handlers: Record<string, EventHandler[]> = {};

  subscribe(event: string, handler: EventHandler) {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event].push(handler);
  }

  publish(event: string, data: any) {
    const eventHandlers = this.handlers[event] || [];
    eventHandlers.forEach(handler => handler(data));
  }
}

export const eventBus = new EventBus();
