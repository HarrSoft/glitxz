import type { PageLoadEvent } from './$types';

export const load = ({ params }: PageLoadEvent) => {
	const artwork = {
    title: "Glitxz piece of art"
  };
  return {
		artwork
	};
};
