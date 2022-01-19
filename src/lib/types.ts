export interface StatusCode {
  code: string;
  text: string;
  description: string;
  link: URL;
}

export interface KnowYourHttpWellCode {
  code: string;
  phrase: string;
  description: string;
  spec_title: string;
  spec_href: string;
}
export type StatusCodeApiResponse = KnowYourHttpWellCode[];
