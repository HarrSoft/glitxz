import type { PageLoadEvent } from './$types';

export const load = ({ params }: PageLoadEvent) => {
	return {
		posts: [
			{
				title: 'blue letter day'
			}
		]
	};
};
