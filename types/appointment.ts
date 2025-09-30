export interface Appointment {
  id: string
  clientId: string
  professionalId: string
  consultationTypeId: string

  // Basic Info
  title: string
  description: string
  status: AppointmentStatus
  type: "in-person" | "video"

  // Scheduling
  date: Date
  startTime: string
  endTime: string
  duration: number // in minutes
  timezone: string

  // Meeting Details
  location?: string
  videoLink?: string

  // Pricing
  price: number
  serviceFee: number
  totalAmount: number

  // Documents
  attachments: string[]
  notes: string

  // Participants
  client: {
    id: string
    name: string
    email: string
    phone: string
  }
  professional: {
    id: string
    name: string
    email: string
    phone: string
    title: string
  }

  // Metadata
  createdAt: Date
  updatedAt: Date
  cancelledAt?: Date
  cancelledBy?: string
  cancellationReason?: string
}

export type AppointmentStatus =
  | "pending" // Waiting for professional confirmation
  | "confirmed" // Confirmed by professional
  | "cancelled" // Cancelled by either party
  | "completed" // Appointment finished
  | "no-show" // Client didn't show up
  | "rescheduled" // Moved to different time

export interface TimeSlot {
  date: string
  startTime: string
  endTime: string
  isAvailable: boolean
  isBooked: boolean
}

export interface BookingRequest {
  professionalId: string
  consultationTypeId: string
  date: string
  startTime: string
  type: "in-person" | "video"
  description: string
  attachments?: File[]
}
