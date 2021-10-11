import { Author, Post } from "./templates";

export const KEY_ALUMNI = "Alumni";
export const KEY_EXEC_MEMBERS = "Executive Members 2021";
export const KEY_CURR_CORE = "Core 2021";

export type MemberHash = {
	[key: string]: Author[];
}

export interface Group {
	fieldValue: string;
}

export interface ContactDetails {
	name: string;
	number: string;
}

export interface INotFoundPage {
	location: Location;
}

export interface IAbout {
	location: Location;
	data: {
		members: {
			nodes: Author[];
		};
		passouts: {
			group: Group[];
		};
		about: {
			info: string;
		}
	};
}

export interface IContact {
	location: Location;
	data: {
		site: {
			siteMetadata: {
				contactDetails: ContactDetails[];
				contactEmail: string;
			};
		};
	};
};

export interface IWit {
	location: Location;
	data: {
		events: {
			nodes: Post[];
		}
	};
}

export interface IExpo {
	location: Location;
	data: {
		projects: {
			nodes: Post[];
		};
		expo: {
			open: boolean;
		}
	};
}

export interface IMainPage {
	location: Location;
	data: {
		about: {
			main: string;
		};
		blog: {
			nodes: Post[];
		};
		projects: {
			nodes: Post[];
		};
		events: {
			nodes: Post[];
		}
	};
}

export interface IProjectReports {
	location: Location;
}

export interface IProjects {
	location: Location;
	data: {
		projects: {
			nodes: Post[];
		};
	};
}

export interface IEvents {
	location: Location;
	data: {
		members: {
			nodes: Author[];
		};
	};
}

export interface ISmp {
	location: Location;
	data: {
		smp: {
			group: {
				fieldValue: string;
				nodes: {
					title: string;
					members: Author[];
					description: string;
					url: string;
					sigx: {
						logox: {
							localFile: {
								publicURL: string;
							};
						};
					};
				}[];
			}[];
			title: string;
		};
		smp_basic: {
			open: boolean;
			description: string;
			form_url?: string;
			faq: string;
		}
	};
}

export interface IRecruitmentForm {
	location: string;
}

export interface IRecruitments {
	location: Location;
	data: {
		rec_questions: {
			open: boolean;
			FAQ: string;
		}
	}
}