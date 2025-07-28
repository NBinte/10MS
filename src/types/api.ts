export interface Medium {
  url: string;
  type: string;
}

// export interface CtaText {
//   name: string;
//   value: string;
// }

export interface Checklist {
  text: string;
}

export interface Instructor {
  name: string;
  title: string;
  description: string;
  img: string;
  slug: string;
}

export interface Section {
  values: any;
  id: number;
  type: string;
  title?: string;
  description?: string;
  points?: string[];
  instructors?: Instructor[]; // ← here
}

export interface Seo {
  title: string;
  description: string;
  image: string;
}

export interface Data {
  data: {
    cta_text: any;
    slug: string;
    id: number;
    title: string;
    description: string;
    media: Medium[];
    checklist: Checklist[];
    seo: Seo;
    sections: Section[];
  };
}
