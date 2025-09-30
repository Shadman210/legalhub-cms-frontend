export interface Message {
  id: string
  conversationId: string
  senderId: string
  senderName: string
  senderRole: "client" | "professional" | "admin"
  content: string
  type: MessageType

  // Attachments
  attachments: MessageAttachment[]

  // Status
  status: MessageStatus
  readBy: MessageRead[]

  // References
  replyToId?: string
  appointmentId?: string
  documentId?: string

  // Metadata
  isEncrypted: boolean
  priority: MessagePriority
  createdAt: Date
  updatedAt: Date
  editedAt?: Date
  deletedAt?: Date
}

export type MessageType = "text" | "document" | "appointment" | "system" | "voice_note"

export type MessageStatus = "sent" | "delivered" | "read" | "failed"

export type MessagePriority = "low" | "normal" | "high" | "urgent"

export interface MessageAttachment {
  id: string
  name: string
  type: "document" | "image" | "audio" | "video"
  url: string
  size: number
  mimeType: string
  thumbnailUrl?: string
}

export interface MessageRead {
  userId: string
  readAt: Date
}

export interface Conversation {
  id: string
  type: ConversationType
  title?: string

  // Participants
  participants: ConversationParticipant[]

  // Context
  appointmentId?: string
  serviceRequestId?: string
  caseId?: string

  // Last message
  lastMessage?: Message
  lastMessageAt?: Date

  // Status
  status: ConversationStatus
  isArchived: boolean
  isPinned: boolean

  // Settings
  isEncrypted: boolean
  allowFileSharing: boolean

  // Metadata
  createdAt: Date
  updatedAt: Date
  archivedAt?: Date
}

export type ConversationType = "direct" | "group" | "support" | "case_discussion"

export type ConversationStatus = "active" | "closed" | "archived" | "blocked"

export interface ConversationParticipant {
  userId: string
  name: string
  email: string
  role: "client" | "professional" | "admin"
  avatar?: string
  isOnline: boolean
  lastSeenAt?: Date
  joinedAt: Date
  permissions: ParticipantPermission[]
}

export type ParticipantPermission = "read" | "write" | "share_files" | "add_participants" | "admin"

export interface NotificationSettings {
  userId: string
  emailNotifications: boolean
  smsNotifications: boolean
  pushNotifications: boolean
  notificationHours: {
    start: string
    end: string
  }
  mutedConversations: string[]
}
