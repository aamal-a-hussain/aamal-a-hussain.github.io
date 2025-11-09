export interface Talk {
  title: string;
  location: string;
  category: string;
  image_name: string;
  year: number;
  path?: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  conference?: string;
  path: string;
  year: number;
  description: string;
}
