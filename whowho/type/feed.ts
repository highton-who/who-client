export interface Like {
  like: boolean;
}

export interface FeedPost {
  title: string;
  description: string;
  giftedPerson: string;
  imgUrl: string;
  likeCount: number;
}

export interface FeedItem {
  id: number;
  imgUrl: string;
  title: string;
  likeCount: number;
}

export type Feed = FeedItem[];
