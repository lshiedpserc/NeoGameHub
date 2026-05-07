<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	let { data, children } = $props();

	let isDashboard = $derived($page.url.pathname.startsWith('/dashboard'));
</script>

{#if !isDashboard}
	<header
		class="bg-surface/80 border-outline-variant/20 fixed top-0 z-50 w-full border-b backdrop-blur-xl"
	>
		<div
			class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex h-20 items-center justify-between"
		>
			<a
				href="/"
				class="font-headline-md text-headline-md text-primary-fixed-dim font-bold tracking-tighter"
			>
				NeoGame Hub
			</a>
			<nav class="hidden h-full items-center gap-8 md:flex">
				<a
					href="/"
					class="{$page.url.pathname === '/'
						? 'text-primary-fixed-dim border-primary-fixed-dim border-b-2 pb-1'
						: 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/50 rounded-lg px-3 py-2'} font-headline-md text-headline-md font-body-md text-body-md transition-all duration-300 ease-out active:scale-95"
					>見つける</a
				>
				<a
					href="/upload"
					class="{$page.url.pathname === '/upload'
						? 'text-primary-fixed-dim border-primary-fixed-dim border-b-2 pb-1'
						: 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/50 rounded-lg px-3 py-2'} font-headline-md text-headline-md font-body-md text-body-md transition-all transition-colors duration-300 ease-out active:scale-95"
					>アップロード</a
				>
				<a
					href="/dashboard"
					class="{$page.url.pathname.startsWith('/dashboard')
						? 'text-primary-fixed-dim border-primary-fixed-dim border-b-2 pb-1'
						: 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/50 rounded-lg px-3 py-2'} font-headline-md text-headline-md font-body-md text-body-md transition-all transition-colors duration-300 ease-out active:scale-95"
					>ダッシュボード</a
				>
				<a
					href="/community"
					class="text-on-surface-variant hover:text-on-surface font-headline-md text-headline-md font-body-md text-body-md hover:bg-surface-container-highest/50 rounded-lg px-3 py-2 transition-all transition-colors duration-300 ease-out active:scale-95"
					>コミュニティ</a
				>
			</nav>
			<div class="flex items-center gap-4">
				<button class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
					<span class="material-symbols-outlined">search</span>
				</button>
				{#if data.user}
					<div class="group relative">
						<button
							class="text-on-surface-variant hover:text-primary-fixed-dim flex items-center gap-2 transition-colors"
						>
							<span class="font-label-md">{data.user.username}</span>
							<span class="material-symbols-outlined">account_circle</span>
						</button>
						<div
							class="bg-surface-container-high border-outline-variant/20 absolute right-0 mt-2 hidden w-48 flex-col rounded-xl border py-2 shadow-xl group-hover:flex"
						>
							<a
								href="/dashboard"
								class="hover:bg-surface-variant text-on-surface font-body-sm px-4 py-2 text-left"
								>ダッシュボード</a
							>
							<form action="/logout" method="POST">
								<button
									type="submit"
									class="hover:bg-surface-variant text-error font-body-sm w-full px-4 py-2 text-left"
									>ログアウト</button
								>
							</form>
						</div>
					</div>
				{:else}
					<a
						href="/login"
						class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
					>
						<span class="material-symbols-outlined">account_circle</span>
					</a>
				{/if}
			</div>
		</div>
	</header>
{/if}

{@render children()}

{#if !isDashboard}
	<footer class="py-stack-lg border-outline-variant/10 bg-surface-dim mt-auto w-full border-t">
		<div
			class="max-w-container-max px-margin-mobile md:px-margin-desktop gap-stack-md mx-auto flex flex-col items-center justify-between md:flex-row"
		>
			<div class="font-headline-md text-headline-md text-primary font-bold tracking-tighter">
				NeoGame Hub
			</div>
			<div
				class="font-body-sm text-body-sm text-on-surface-variant flex flex-wrap items-center justify-center gap-4 md:gap-8"
			>
				<a
					class="hover:text-primary-fixed underline-offset-4 transition-colors hover:underline"
					href="/terms">利用規約</a
				>
				<a
					class="hover:text-primary-fixed underline-offset-4 transition-colors hover:underline"
					href="/privacy">プライバシー</a
				>
				<a
					class="hover:text-primary-fixed underline-offset-4 transition-colors hover:underline"
					href="/docs/api">APIドキュメント</a
				>
				<a
					class="hover:text-primary-fixed underline-offset-4 transition-colors hover:underline"
					href="/careers">採用情報</a
				>
			</div>
			<div class="font-body-sm text-body-sm text-on-surface-variant">
				© 2024 NeoGame Hub. 高速インディーゲーム
			</div>
		</div>
	</footer>
{/if}
