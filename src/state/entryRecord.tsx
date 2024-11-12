
export type EntryRecord = {
  enterTime: Date,
  exitTime: Date,
  id: string,
  name: string,
  email?: string | null,
  phone?: string | null,
};