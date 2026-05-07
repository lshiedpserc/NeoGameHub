import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const trendingGames = await prisma.game.findMany({
		take: 3,
		orderBy: {
			playCount: 'desc'
		},
		include: {
			user: true
		}
	});

	return {
		trendingGames
	};
};
