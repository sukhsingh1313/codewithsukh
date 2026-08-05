export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = 'admin' | 'user';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type ContentStatus = 'published' | 'draft';
export type MessageStatus = 'unread' | 'read' | 'archived';

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: ProfileInsert;
        Update: ProfileUpdate;
      };
      courses: {
        Row: Course;
        Insert: CourseInsert;
        Update: CourseUpdate;
      };
      projects: {
        Row: Project;
        Insert: ProjectInsert;
        Update: ProjectUpdate;
      };
      contacts: {
        Row: ContactInquiry;
        Insert: ContactInquiryInsert;
        Update: ContactInquiryUpdate;
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: Record<string, never>;
  };
}

// -----------------------------------------------------------------------------
// 1. PROFILES TYPES
// -----------------------------------------------------------------------------
export interface Profile {
  id: string;
  full_name: string | null;
  email: string;
  avatar_url: string | null;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface ProfileInsert {
  id: string;
  full_name?: string | null;
  email: string;
  avatar_url?: string | null;
  role?: UserRole;
  created_at?: string;
  updated_at?: string;
}

export interface ProfileUpdate {
  id?: string;
  full_name?: string | null;
  email?: string;
  avatar_url?: string | null;
  role?: UserRole;
  created_at?: string;
  updated_at?: string;
}

// -----------------------------------------------------------------------------
// 2. COURSES TYPES
// -----------------------------------------------------------------------------
export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  thumbnail_url: string | null;
  price: number;
  duration: string | null;
  level: CourseLevel;
  enrollment_link: string | null;
  status: ContentStatus;
  created_at: string;
  updated_at: string;
}

export interface CourseInsert {
  id?: string;
  title: string;
  slug: string;
  description?: string | null;
  thumbnail_url?: string | null;
  price?: number;
  duration?: string | null;
  level: CourseLevel;
  enrollment_link?: string | null;
  status?: ContentStatus;
  created_at?: string;
  updated_at?: string;
}

export interface CourseUpdate {
  id?: string;
  title?: string;
  slug?: string;
  description?: string | null;
  thumbnail_url?: string | null;
  price?: number;
  duration?: string | null;
  level?: CourseLevel;
  enrollment_link?: string | null;
  status?: ContentStatus;
  created_at?: string;
  updated_at?: string;
}

// -----------------------------------------------------------------------------
// 3. PROJECTS TYPES
// -----------------------------------------------------------------------------
export interface Project {
  id: string;
  title: string;
  description: string | null;
  thumbnail_url: string | null;
  live_demo_url: string | null;
  github_url: string | null;
  tech_stack: string[];
  featured: boolean;
  status: ContentStatus;
  created_at: string;
  updated_at: string;
}

export interface ProjectInsert {
  id?: string;
  title: string;
  description?: string | null;
  thumbnail_url?: string | null;
  live_demo_url?: string | null;
  github_url?: string | null;
  tech_stack?: string[];
  featured?: boolean;
  status?: ContentStatus;
  created_at?: string;
  updated_at?: string;
}

export interface ProjectUpdate {
  id?: string;
  title?: string;
  description?: string | null;
  thumbnail_url?: string | null;
  live_demo_url?: string | null;
  github_url?: string | null;
  tech_stack?: string[];
  featured?: boolean;
  status?: ContentStatus;
  created_at?: string;
  updated_at?: string;
}

// -----------------------------------------------------------------------------
// 4. CONTACT INQUIRIES TYPES
// -----------------------------------------------------------------------------
export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: MessageStatus;
  created_at: string;
}

export interface ContactInquiryInsert {
  id?: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  status?: MessageStatus;
  created_at?: string;
}

export interface ContactInquiryUpdate {
  id?: string;
  name?: string;
  email?: string;
  subject?: string | null;
  message?: string;
  status?: MessageStatus;
  created_at?: string;
}
