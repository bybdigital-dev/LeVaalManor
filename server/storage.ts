import { type User, type InsertUser, type BookingEnquiry, type InsertBookingEnquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createBookingEnquiry(enquiry: InsertBookingEnquiry): Promise<BookingEnquiry>;
  getBookingEnquiries(): Promise<BookingEnquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private bookingEnquiries: Map<string, BookingEnquiry>;

  constructor() {
    this.users = new Map();
    this.bookingEnquiries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBookingEnquiry(insertEnquiry: InsertBookingEnquiry): Promise<BookingEnquiry> {
    const id = randomUUID();
    const enquiry: BookingEnquiry = {
      ...insertEnquiry,
      id,
      createdAt: new Date(),
    };
    this.bookingEnquiries.set(id, enquiry);
    return enquiry;
  }

  async getBookingEnquiries(): Promise<BookingEnquiry[]> {
    return Array.from(this.bookingEnquiries.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
