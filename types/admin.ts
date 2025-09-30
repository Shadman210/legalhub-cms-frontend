export interface AdminUser {
  id: string
  name: string
  email: string
  role: AdminRole
  permissions: AdminPermission[]
  isActive: boolean
  lastLoginAt?: Date
  createdAt: Date
  updatedAt: Date
}

export type AdminRole = "super_admin" | "admin" | "moderator" | "support"

export type AdminPermission =
  | "manage_users"
  | "manage_professionals"
  | "manage_payments"
  | "manage_documents"
  | "manage_appointments"
  | "view_analytics"
  | "manage_support"
  | "manage_system"

export interface PlatformStats {
  totalUsers: number
  totalProfessionals: number
  totalAppointments: number
  totalDocuments: number
  totalRevenue: number
  monthlyGrowth: {
    users: number
    professionals: number
    appointments: number
    revenue: number
  }
  recentActivity: ActivityLog[]
}

export interface ActivityLog {
  id: string
  type: ActivityType
  description: string
  userId?: string
  userName?: string
  metadata?: Record<string, any>
  createdAt: Date
}

export type ActivityType =
  | "user_registration"
  | "professional_verification"
  | "appointment_booked"
  | "payment_processed"
  | "document_signed"
  | "support_ticket_created"
  | "system_alert"

export interface SupportTicket {
  id: string
  title: string
  description: string
  category: TicketCategory
  priority: TicketPriority
  status: TicketStatus

  // Reporter
  reporterId: string
  reporterName: string
  reporterEmail: string
  reporterType: "client" | "professional"

  // Assignment
  assignedTo?: string
  assignedToName?: string

  // Communication
  messages: TicketMessage[]
  lastResponseAt?: Date

  // Resolution
  resolution?: string
  resolvedAt?: Date
  resolvedBy?: string

  // Metadata
  tags: string[]
  attachments: TicketAttachment[]
  createdAt: Date
  updatedAt: Date
}

export type TicketCategory =
  | "technical_issue"
  | "billing_question"
  | "account_problem"
  | "feature_request"
  | "bug_report"
  | "general_inquiry"

export type TicketPriority = "low" | "medium" | "high" | "critical"

export type TicketStatus = "open" | "in_progress" | "waiting_response" | "resolved" | "closed"

export interface TicketMessage {
  id: string
  ticketId: string
  senderId: string
  senderName: string
  senderType: "admin" | "user"
  content: string
  isInternal: boolean
  attachments: TicketAttachment[]
  createdAt: Date
}

export interface TicketAttachment {
  id: string
  name: string
  url: string
  size: number
  mimeType: string
}

export interface SystemAlert {
  id: string
  type: AlertType
  severity: AlertSeverity
  title: string
  description: string
  isResolved: boolean
  resolvedAt?: Date
  resolvedBy?: string
  metadata?: Record<string, any>
  createdAt: Date
}

export type AlertType = "security" | "performance" | "payment" | "system" | "user_report"

export type AlertSeverity = "info" | "warning" | "error" | "critical"
