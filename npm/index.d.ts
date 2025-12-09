declare module '@apiverve/randompun' {
  export interface randompunOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface randompunResponse {
    status: string;
    error: string | null;
    data: RandomPunData;
    code?: number;
  }


  interface RandomPunData {
      category: string;
      rating:   number;
      pun:      string;
  }

  export default class randompunWrapper {
    constructor(options: randompunOptions);

    execute(callback: (error: any, data: randompunResponse | null) => void): Promise<randompunResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randompunResponse | null) => void): Promise<randompunResponse>;
    execute(query?: Record<string, any>): Promise<randompunResponse>;
  }
}
