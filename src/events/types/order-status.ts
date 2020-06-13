export enum OrderStatus {
  // when the order has been created, but the ticket it is trying to order has not been reserved
  Created = 'created',
  // the ticket the order is trying to treserve has already been reserved,
  // or when the user has cancelled the order
  // or the order expires before payment
  // ACTUALLY, A BIT OF A CATCH ALL!
  Cancelled = 'cancelled',
  // The order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  // The order has reserved the ticket and the user has provided payment successfully
  Complete = 'complete'
}