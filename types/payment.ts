export interface PaymentMethod {
  id: string
  type: "card" | "bank_transfer" | "mobile_money"
  provider: "stripe" | "paypal" | "cmi" | "orange_money" | "inwi_money"
  isDefault: boolean
  details: {
    last4?: string
    brand?: string
    expiryMonth?: number
    expiryYear?: number
    holderName?: string
    phoneNumber?: string
    bankName?: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface Payment {
  id: string
  userId: string
  amount: number
  currency: "MAD" | "EUR" | "USD"
  status: PaymentStatus
  type: PaymentType
  description: string

  // Related entities
  appointmentId?: string
  serviceRequestId?: string
  subscriptionId?: string

  // Payment details
  paymentMethodId: string
  transactionId?: string
  providerTransactionId?: string

  // Fees
  serviceFee: number
  processingFee: number
  totalAmount: number

  // Metadata
  metadata?: Record<string, any>
  createdAt: Date
  updatedAt: Date
  paidAt?: Date
  refundedAt?: Date
  refundAmount?: number
}

export type PaymentStatus =
  | "pending"
  | "processing"
  | "succeeded"
  | "failed"
  | "cancelled"
  | "refunded"
  | "partially_refunded"

export type PaymentType = "appointment" | "service_request" | "subscription" | "penalty"

export interface Subscription {
  id: string
  professionalId: string
  planId: string
  status: SubscriptionStatus

  // Plan details
  planName: string
  planType: "individual" | "cabinet"
  billingCycle: "monthly" | "annual"
  price: number
  currency: "MAD"

  // Billing
  currentPeriodStart: Date
  currentPeriodEnd: Date
  nextBillingDate: Date

  // Payment
  paymentMethodId: string

  // Metadata
  createdAt: Date
  updatedAt: Date
  cancelledAt?: Date
  trialEndsAt?: Date
}

export type SubscriptionStatus = "active" | "past_due" | "cancelled" | "unpaid" | "trialing"

export interface Invoice {
  id: string
  userId: string
  subscriptionId?: string
  appointmentId?: string
  serviceRequestId?: string

  // Invoice details
  number: string
  status: InvoiceStatus
  amount: number
  serviceFee: number
  totalAmount: number
  currency: "MAD"

  // Dates
  issuedAt: Date
  dueAt: Date
  paidAt?: Date

  // PDF
  pdfUrl?: string

  createdAt: Date
  updatedAt: Date
}

export type InvoiceStatus = "draft" | "open" | "paid" | "void" | "uncollectible"

export interface RefundRequest {
  id: string
  paymentId: string
  userId: string
  amount: number
  reason: RefundReason
  status: RefundStatus
  description?: string

  // Processing
  processedAt?: Date
  processedBy?: string

  createdAt: Date
  updatedAt: Date
}

export type RefundReason = "appointment_cancelled" | "service_refused" | "duplicate_payment" | "fraud" | "other"

export type RefundStatus = "pending" | "approved" | "rejected" | "processed"
