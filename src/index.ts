import { UserService } from "./services/userService";
import { OrderService } from "./services/orderService";
import { NotificationService } from "./services/notificationService";

const userService = new UserService();
const orderService = new OrderService();
const notificationService = new NotificationService();
notificationService.subscribe();

// Simulate user registration and order placement
userService.registerUser("Alice");
orderService.placeOrder(1, "MacBook Pro");
