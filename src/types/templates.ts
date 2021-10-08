import React, { ReactNode } from 'react';

export interface Post {
	route: string;
	title: string;
	authors: Author[];
	excerpt: string;
	date: string;
	header?: Img;
	content?: string;
	displayOnBlog?: boolean;
	id?: string;
	url?: string;
	label?: string;
	description?: string;
	sig?: Sig;
}

export interface Element {
	route: string;
	title: string;
	authors: any[];
	excerpt: string;
	date: string;
	birthTime: string;
}

export interface Img {
	localFile: {
		childImageSharp: {
			fixed: {
				srcWebp: string;
			};
		};
		publicURL: string;
	};
}

export interface Sig {
	name: string;
	logo: Img;
	description: string;
}

export interface Author {
	name: string;
	position: string;
	alumni: boolean;
	passoutYr: number;
	social: {
		email?: string;
		facebook?: string;
		linkedin?: string;
		github?: string;
	};
}

export interface PathName {
	location: string;
}

export interface IRenderArticles {
	element: Element,
	index: React.Key
}

export interface ILayout {
	location?: string;
	children?: ReactNode;
	showFooter?: boolean;
	title?: string;
};

export interface IPreviewOther {
	post: Post;
	isPrevious?: boolean
}

export interface IRenderProject {
	title: string;
	description: string;
	authors: Author[];
	year?: string;
	label?: string;
	sig?: Sig;
	url: string,
}

export interface IAuthor {
	data: {
		memberDetails: any;
		memberProjects: any;
		memberArticles: any;
	};
	location: Location;
	uri: string;
}

export interface IBlogArticle {
	data: {
		post: Post;
		before: {
			nodes: Post[];
		};
		after: {
			nodes: Post[];
		};
		blogs: {
			nodes: Post[];
		}
	};
	location: Location;
	uri: string;
}

export interface IEventBlogArticle {
	data: {
		event: {
			title: string;
			date: string;
			description: string;
			updated_at: string;
		};
	};
	uri: string;
}

export interface IProject {
	data: {
		projects: {
			title: string;
			sig: Sig;
			description: string;
			label?: string;
			authors: Author[];
			url: string;
		};
	};
	pathname?: PathName;
	uri: string;
}

export interface ISig {
	pathname: PathName;
	data: {
		sigDetails: Sig
		sigProjects: {
			nodes: Post[];
		}
	};
	uri: string;
}

export interface IPaginationComponent {
	max: number;
	list: Post[];
	item: (element: Post, index: number) => ReactNode,
	noneMessage?: any;
	filterBy?: string;
	filterLabel?: string;
}