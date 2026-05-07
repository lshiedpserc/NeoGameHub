<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<div class="flex min-h-screen items-center justify-center p-4">
	<div class="glass-panel relative w-full max-w-md overflow-hidden rounded-2xl p-8">
		<div class="bg-secondary/5 absolute inset-0 opacity-50"></div>
		<div class="relative z-10">
			<h1
				class="font-headline-lg text-headline-lg text-secondary mb-6 text-center"
				style="text-shadow: 0 0 10px rgba(235,178,255,0.5);"
			>
				新規登録
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
						class="bg-surface-container-high border-outline-variant/30 text-on-surface focus:border-secondary focus:ring-secondary rounded-lg border px-4 py-3 transition-colors outline-none focus:ring-1"
					/>
					<p class="text-on-surface-variant text-xs">3〜31文字の英数字</p>
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
						class="bg-surface-container-high border-outline-variant/30 text-on-surface focus:border-secondary focus:ring-secondary rounded-lg border px-4 py-3 transition-colors outline-none focus:ring-1"
					/>
					<p class="text-on-surface-variant text-xs">6文字以上</p>
				</div>

				<button
					type="submit"
					class="bg-secondary text-background font-label-md text-label-md hover:bg-secondary-fixed mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-4 shadow-[0_0_20px_rgba(235,178,255,0.2)] transition-colors"
				>
					アカウント作成
				</button>
			</form>

			<p class="text-on-surface-variant font-body-sm mt-6 text-center">
				すでにアカウントをお持ちですか？ <a href="/login" class="text-secondary hover:underline"
					>ログイン</a
				>
			</p>
		</div>
	</div>
</div>
