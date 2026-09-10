/**
 * Query helpers for publisher records.
 *
 * These helpers read the local SQLite database at build time and expose the
 * minimal publisher metadata needed by Astro pages and components.
 */
import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Retrieve every publisher, sorted alphabetically by name.
 *
 * @param db - Database connection used to query publisher records.
 * @returns A promise resolving to all publishers ordered by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
