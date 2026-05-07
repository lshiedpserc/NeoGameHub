import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';
import { prisma } from '$lib/server/prisma';
import { hash } from 'argon2';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/dashboard');
	}
	return {};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (
			typeof username !== 'string' ||
			username.length < 3 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return fail(400, { message: 'Invalid username' });
		}
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, { message: 'Invalid password' });
		}

		try {
			const existingUser = await prisma.user.findUnique({
				where: { username: username.toLowerCase() }
			});

			if (existingUser) {
				return fail(400, { message: 'Username already taken' });
			}

			const hashedPassword = await hash(password);

			const user = await prisma.user.create({
				data: {
					username: username.toLowerCase(),
					password: hashedPassword
				}
			});

			const session = await auth.createSession(user.id, {});
			const sessionCookie = auth.createSessionCookie(session.id);
			cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});

			throw redirect(302, '/dashboard');
		} catch (e) {
			if (e instanceof Response) throw e;
			return fail(500, { message: 'An unknown error occurred' });
		}
	}
};
