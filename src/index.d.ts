
declare namespace formatLinkHeader {
  export interface Link {
    url: string;
    rel?: string;
    [attribute: string]: string;
  }

  export interface Links {
    [rel: string]: Link;
  }
}

declare function formatLinkHeader(links: formatLinkHeader.Links): string;
export = formatLinkHeader;
