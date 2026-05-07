<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<div class="flex min-h-screen items-center justify-center p-4">
	<div class="glass-panel relative w-full max-w-md overflow-hidden rounded-2xl p-8">
		<div class="bg-primary-fixed-dim/5 absolute inset-0 opacity-50"></div>
		<div class="relative z-10">
			<h1 class="font-headline-lg text-headline-lg text-primary neon-text-blue mb-6 text-center">
				ログイン
			</h1>

			{#if form?.message}
				<div
					class="bg-error-container text-on-error-container font-body-sm border-error/30 mb-6 rounded-lg border p-3 text-center"
				>
					{form.message}
				</div>
			{/if}

			<form method="POST" use:enhance class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<label for="username" class="font-label-md text-label-md text-on-surface-variant"
						>ユーザー名</label
					>
					<input
						type="text"
						id="username"
						name="username"
						required
						class="bg-surface-container-high border-outline-variant/30 text-on-surface focus:border-primary-fixed-dim focus:ring-primary-fixed-dim rounded-lg border px-4 py-3 transition-colors outline-none focus:ring-1"
					/>
				</div>

				<div class="flex flex-col gap-2">
					<label for="password" class="font-label-md text-label-md text-on-surface-variant"
						>パスワード</label
					>
					<input
						type="password"
						id="password"
						name="password"
						required
						class="bg-surface-container-high border-outline-variant/30 text-on-surface focus:border-primary-fixed-dim focus:ring-primary-fixed-dim rounded-lg border px-4 py-3 transition-colors outline-none focus:ring-1"
					/>
				</div>

				<button
					type="submit"
					class="bg-primary-fixed-dim text-background font-label-md text-label-md hover:bg-primary-fixed neon-glow-blue mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-4 transition-colors"
				>
					ログイン
				</button>
			</form>

			<p class="text-on-surface-variant font-body-sm mt-6 text-center">
				アカウントをお持ちでないですか？ <a
					href="/register"
					class="text-primary-fixed-dim hover:underline">新規登録</a
				>
			</p>
		</div>
	</div>
</div>
