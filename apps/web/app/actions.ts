'use server';

import { db } from '@apex/db';
import { users } from '@apex/db/schema';
import { eq } from 'drizzle-orm';

export async function syncUserProgress(userData: { id: string, name: string, email: string }) {
  try {
    const existingUser = await db.select().from(users).where(eq(users.id, userData.id)).get();

    if (existingUser) {
      await db.update(users).set({ name: userData.name }).where(eq(users.id, userData.id));
    } else {
      await db.insert(users).values({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        createdAt: new Date(),
      });
    }
    return { success: true };
  } catch (error) {
    console.error('Failed to sync user:', error);
    return { success: false, error: 'Sync failed' };
  }
}
