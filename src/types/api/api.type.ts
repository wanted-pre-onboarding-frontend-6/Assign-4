export interface Issue {
  id: number;
  title: string;
  comments: number;
  body: string;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
}
