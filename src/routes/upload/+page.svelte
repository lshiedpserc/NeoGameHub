<script lang="ts">
	import { enhance } from '$app/forms';
	let { data, form } = $props();

	let isDragging = $state(false);
	let fileName = $state('');

	function handleDrop(e: DragEvent) {
		isDragging = false;
		if (e.dataTransfer?.files.length) {
			const file = e.dataTransfer.files[0];
			if (file.name.endsWith('.zip')) {
				fileName = file.name;
				const input = document.getElementById('file-upload') as HTMLInputElement;
				if (input) {
					const dataTransfer = new DataTransfer();
					dataTransfer.items.add(file);
					input.files = dataTransfer.files;
				}
			} else {
				alert('Please upload a ZIP file containing index.html');
			}
		}
	}

	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		isDragging = true;
	}

	function handleDragLeave() {
		isDragging = false;
	}

	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files?.length) {
			fileName = target.files[0].name;
		}
	}
</script>

<main
	class="max-w-container-max px-margin-mobile md:px-margin-desktop pb-section-gap mx-auto flex w-full flex-grow flex-col items-center pt-32"
>
	<div class="w-full max-w-2xl">
		<h1
			class="font-headline-xl text-headline-xl text-on-surface mb-stack-sm text-center tracking-tight"
		>
			新規デプロイ
		</h1>
		<p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg text-center">
			{#if data.user}
				あなたのアカウントでゲームをアップロードします。
			{:else}
				匿名でゲームをアップロードします。管理には後で発行されるシークレットURLが必要です。
			{/if}
		</p>

		{#if form?.message}
			<div
				class="bg-error-container text-on-error-container mb-stack-md font-body-md border-error/30 rounded-lg border p-4"
			>
				{form.message}
			</div>
		{/if}

		<form
			method="POST"
			enctype="multipart/form-data"
			use:enhance
			class="gap-stack-md glass-panel flex flex-col rounded-2xl p-8"
		>
			<div class="flex flex-col gap-2">
				<label for="title" class="font-label-md text-label-md text-on-surface-variant"
					>タイトル <span class="text-error">*</span></label
				>
				<input
					type="text"
					id="title"
					name="title"
					required
					class="bg-surface-container-high border-outline-variant/30 text-on-surface focus:border-primary-fixed-dim focus:ring-primary-fixed-dim rounded-lg border px-4 py-3 outline-none focus:ring-1"
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label for="description" class="font-label-md text-label-md text-on-surface-variant"
					>説明</label
				>
				<textarea
					id="description"
					name="description"
					rows="3"
					class="bg-surface-container-high border-outline-variant/30 text-on-surface focus:border-primary-fixed-dim focus:ring-primary-fixed-dim resize-none rounded-lg border px-4 py-3 outline-none focus:ring-1"
				></textarea>
			</div>

			<div class="flex flex-col gap-2">
				<label for="genre" class="font-label-md text-label-md text-on-surface-variant"
					>ジャンル</label
				>
				<input
					type="text"
					id="genre"
					name="genre"
					placeholder="例: レーシング, パズル"
					class="bg-surface-container-high border-outline-variant/30 text-on-surface focus:border-primary-fixed-dim focus:ring-primary-fixed-dim rounded-lg border px-4 py-3 outline-none focus:ring-1"
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label for="file-upload" class="font-label-md text-label-md text-on-surface-variant"
					>ゲームファイル (ZIP) <span class="text-error">*</span></label
				>
				<div
					role="button"
					tabindex="0"
					class="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed p-8 transition-colors {isDragging
						? 'border-primary-fixed-dim bg-primary-fixed-dim/5'
						: 'border-outline-variant hover:border-primary-fixed-dim/50 bg-surface-container-high/50'}"
					ondragover={handleDragOver}
					ondragleave={handleDragLeave}
					ondrop={(e) => {
						e.preventDefault();
						handleDrop(e);
					}}
				>
					<span class="material-symbols-outlined text-on-surface-variant text-4xl">folder_zip</span>
					{#if fileName}
						<p class="font-body-md text-primary-fixed-dim font-bold">{fileName}</p>
					{:else}
						<p class="font-body-md text-on-surface-variant text-center">
							ZIPファイルをドラッグ＆ドロップ、またはクリックして選択
						</p>
					{/if}
					<input
						type="file"
						id="file-upload"
						name="gameFile"
						accept=".zip"
						required
						class="hidden"
						onchange={handleFileChange}
					/>
					<button
						type="button"
						class="bg-surface-variant text-on-surface hover:bg-surface-container-highest rounded-lg px-4 py-2 text-sm transition-colors"
						onclick={() => document.getElementById('file-upload')?.click()}
					>
						ファイルを選択
					</button>
					<p class="text-on-surface-variant mt-2 text-xs">index.htmlが含まれるZIPファイル</p>
				</div>
			</div>

			<button
				type="submit"
				class="bg-primary-fixed-dim text-background font-label-md text-label-md hover:bg-primary-fixed neon-glow-blue mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-4 transition-colors"
			>
				<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;"
					>cloud_upload</span
				>
				アップロードして公開
			</button>
		</form>
	</div>
</main>
