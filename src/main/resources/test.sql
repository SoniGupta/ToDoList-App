create table order(
  orderId varchar(20),
  customerId varchar(10),
  employeeId varchar(10),
  orderDate varchar(10),
  shipperId varchar(10),
  PRIMARY KEY (orderId) ,
  FOREIGN KEY (customerId) REFERENCES customer(CustomerId)
);