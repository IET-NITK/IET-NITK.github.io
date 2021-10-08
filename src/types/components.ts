import { Author } from "./templates";

export type MetaProps = JSX.IntrinsicElements["meta"];

export interface ISearchEngineOps {
	description?: string;
	lang?: string;
	meta?: MetaProps[]
	title: string;
}

export interface IShareButtons {
	url: string;
	title: string;
	author: Author[];
	category?: string | string[];
	image?: string;
}

export interface IMemberDeatils {
	author: Author;
}

export interface ITopNavbar {
	smp: boolean;
	recr: boolean;
	expo: boolean;
	notice?: string;
}

export interface ISigShowCase {
	hideLink: boolean;
}