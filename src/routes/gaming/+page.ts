import type { PageLoadEvent } from './$types';

export const load = ({ params }: PageLoadEvent) => {
	return {
		posts: [
			{
				title: 'green letter day'
			}
		]
	};
};
