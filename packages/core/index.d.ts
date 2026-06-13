export type PillarId = 'seduction' | 'intimacy' | 'body' | 'mind' | 'health' | 'discipline' | 'habits' | 'challenges' | 'style' | 'charisma';
export interface Pillar {
    id: PillarId;
    name: string;
    description: string;
    icon: string;
}
export declare const PILLARS: Pillar[];
export interface UserProgress {
    userId: string;
    pillarId: PillarId;
    score: number;
    level: number;
    xp: number;
}
//# sourceMappingURL=index.d.ts.map