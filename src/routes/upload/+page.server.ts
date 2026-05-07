import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import AdmZip from 'adm-zip';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals.user
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const file = formData.get('gameFile') as File;
		const title = formData.get('title') as string;
		const description = formData.get('description') as string;
		const genre = formData.get('genre') as string;

		if (!file || !(file instanceof File)) {
			return fail(400, { message: 'ZIP file is required' });
		}
		if (!title) {
			return fail(400, { message: 'Title is required' });
		}
		if (!file.name.endsWith('.zip')) {
			return fail(400, { message: 'Must upload a ZIP file' });
		}

		try {
			const arrayBuffer = await file.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);

			const uniqueId = crypto.randomBytes(4).toString('hex');
			const secretKey = crypto.randomBytes(16).toString('hex');
			const isAnonymous = !locals.user;

			const uploadDir = path.join(process.cwd(), 'uploads', uniqueId);
			await fs.mkdir(uploadDir, { recursive: true });

			const zip = new AdmZip(buffer);
			zip.extractAllTo(uploadDir, true);

			const hasIndex = zip
				.getEntries()
				.some((e) => e.entryName === 'index.html' || e.entryName.endsWith('/index.html'));
			if (!hasIndex) {
				return fail(400, { message: 'ZIP must contain an index.html file' });
			}

			await prisma.game.create({
				data: {
					uniqueId,
					title,
					description,
					genre,
					isAnonymous,
					secretKey: isAnonymous ? secretKey : null,
					filePath: uploadDir,
					userId: locals.user ? locals.user.id : null
				}
			});

			if (isAnonymous) {
				throw redirect(302, `/upload/success?id=${uniqueId}&secret=${secretKey}`);
			} else {
				throw redirect(302, `/upload/success?id=${uniqueId}`);
			}
		} catch (e) {
			if (e instanceof Response) throw e;
			console.error(e);
			return fail(500, { message: 'Failed to process upload' });
		}
	}
};
