export class Member {
  id: number;
  name: string;
}

export class Diaries {
  items: {[k: number]: {[k: number]: number}};
}

export class Diary {
  member_id: number;
  date: string;
  rank: number;
  content: string;
  created_at: string;
  updated_at: string;
}
