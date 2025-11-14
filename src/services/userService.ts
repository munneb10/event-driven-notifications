import { eventBus } from "../eventBus";

export class UserService {
  registerUser(name: string) {
    const user = { id: Date.now(), name };
    console.log(`👤 User registered: ${name}`);
    eventBus.publish("user:registered", user);
  }
}
