export interface LegalDocument {
  id: string
  name: string
  type: DocumentType
  category: DocumentCategory
  status: DocumentStatus

  // Content
  content?: string // For text-based documents
  fileUrl?: string // For uploaded files
  fileSize?: number
  mimeType?: string

  // Metadata
  description?: string
  tags: string[]
  version: number
  language: "fr" | "ar" | "en"

  // Legal context
  caseId?: string
  appointmentId?: string
  serviceRequestId?: string
  clientId: string
  professionalId: string

  // Signatures
  signatures: DocumentSignature[]
  requiresSignature: boolean
  signatureDeadline?: Date

  // Access control
  isConfidential: boolean
  accessLevel: "public" | "client_only" | "professional_only" | "restricted"

  // Timestamps
  createdAt: Date
  updatedAt: Date
  signedAt?: Date
  archivedAt?: Date
}

export type DocumentType =
  | "contract"
  | "legal_notice"
  | "court_document"
  | "certificate"
  | "report"
  | "correspondence"
  | "evidence"
  | "template"

export type DocumentCategory =
  | "family_law"
  | "business_law"
  | "real_estate"
  | "criminal_law"
  | "civil_law"
  | "administrative"
  | "other"

export type DocumentStatus =
  | "draft"
  | "pending_review"
  | "pending_signature"
  | "signed"
  | "completed"
  | "archived"
  | "cancelled"

export interface DocumentSignature {
  id: string
  documentId: string
  signerId: string
  signerName: string
  signerEmail: string
  signerRole: "client" | "professional" | "witness" | "third_party"

  // Signature data
  signatureData?: string // Base64 encoded signature image
  signatureMethod: "electronic" | "digital" | "handwritten"
  ipAddress: string
  userAgent: string
  timestamp: Date

  // Verification
  isVerified: boolean
  verificationCode?: string
  certificateId?: string

  // Status
  status: SignatureStatus
  rejectionReason?: string
}

export type SignatureStatus = "pending" | "signed" | "rejected" | "expired"

export interface DocumentTemplate {
  id: string
  name: string
  description: string
  category: DocumentCategory
  type: DocumentType

  // Template content
  content: string
  variables: TemplateVariable[]

  // Usage
  isPublic: boolean
  createdBy: string
  usageCount: number

  // Metadata
  tags: string[]
  language: "fr" | "ar" | "en"
  createdAt: Date
  updatedAt: Date
}

export interface TemplateVariable {
  name: string
  label: string
  type: "text" | "number" | "date" | "boolean" | "select"
  required: boolean
  defaultValue?: string
  options?: string[] // For select type
  placeholder?: string
}

export interface DocumentShare {
  id: string
  documentId: string
  sharedBy: string
  sharedWith: string
  permissions: SharePermission[]
  expiresAt?: Date
  accessCount: number
  lastAccessedAt?: Date
  createdAt: Date
}

export type SharePermission = "view" | "download" | "comment" | "sign"
