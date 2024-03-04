export interface ResponseAttributes<T> {
  id: string;
  attributes: T;
}

export interface ResponseData<T> {
  data: ResponseAttributes<T>;
}

export interface ResponseTimestamps {
  created_at: string;
  updated_at: string;
}
