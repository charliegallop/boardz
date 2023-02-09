<script lang="ts">
	import { enhance } from '$app/forms';
	import { FileButton } from '@skeletonlabs/skeleton';

	let files: FileList;
</script>

<form
	method="POST"
	use:enhance={({ form, data, action, cancel }) => {
		return async ({ result, update }) => {};
	}}
	class="card p-4 max-w-lg my-auto"
>
	<label for="name" class="input-label text-left w-full">
		<span>Select your username</span>
		<input type="text" id="username" minlength="4" required />
	</label>
	<p class="my-4">You can upload your own avatar or keep the assigned one!</p>
	<div class="flex justify-center">
		<FileButton bind:files button="variant-filled-primary">Upload File</FileButton>
	</div>
</form>
<div class="flex justify-end mt-9">
	<a href="/" class="btn variant-filled-tertiary btn-base"> Start making boardz! </a>
</div>
