
// Принцип единственной ответственности (SRP)

class Order {
    constructor(customer, items) {
      this.customer = customer;
      this.items = items;
    }
  
    getTotalPrice() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  
    placeOrder() {
      // Обработка платежа, доставка и т.д.
      // ...
    }
  }
  
  class PaymentProcessor {
    processPayment(order) {
      // Подключение к платежной системе, авторизация и т.д.
      // ...
    }
  }
  
  class ShippingService {
    shipOrder(order) {
      // Выбор перевозчика, расчет стоимости доставки и т.д.
      // ...
    }
  }
  
  // ...
  
  const order = new Order(customer, items);
  const paymentProcessor = new PaymentProcessor();
  const shippingService = new ShippingService();
  
  paymentProcessor.processPayment(order);
  shippingService.shipOrder(order);




//  Принцип открытости/закрытости



  class Shape {
    area() {
      throw new Error('NotImplementedError');
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // ...
  
  const shapes = [new Rectangle(2, 3), new Circle(5)];
  const totalArea = shapes.reduce((sum, shape) => sum + shape.area(), 0);
  
  console.log(totalArea); // 28.274333882308138





// Принцип подстановки Лисков

  class Animal {
    makeSound() {
      throw new Error('NotImplementedError');
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      return 'Woof!';
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      return 'Meow!';
    }
  }
  
  // ...
  
  const animals = [new Dog(), new Cat()];
  animals.forEach(animal => animal.makeSound());





//    Принцип разделения интерфейса




  class EmailService {
    sendEmail(recipient, subject, body) {
      // ...
    }
  }
  
  class LoggingService {
    logMessage(message) {
      // ...
    }
  }
  
  class NotificationService {
    constructor(emailService, loggingService) {
      this.emailService = emailService;
      this.loggingService = loggingService;
    }
  
    notify(recipient, subject, body) {
      this.emailService.sendEmail(recipient, subject, body);
      this.loggingService.logMessage(`Sent email to ${recipient} with subject ${subject}`);
    }
  }
  
  // ...
  
  const emailService = new EmailService();
  const loggingService = new LoggingService();
  const notificationService = new NotificationService(emailService, loggingService);
  
  notificationService.notify('user@example.com', 'Subject', 'Body');