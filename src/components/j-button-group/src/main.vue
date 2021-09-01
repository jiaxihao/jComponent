<template>
	<div class="j-button-group">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'JButtonGroup'
}
</script>

<style lang="scss">
.j-button-group {
	.j-button {
		margin: 0;
		border-left: 1px solid;
		border-radius: 0;

		&:first-child.j-button--primary,
		&:first-child.j-button--success,
		&:first-child.j-button--warn,
		&:first-child.j-button--error,
		&:first-child.j-button--info {
			border-left: none;
			border-radius: 4px 0 0 4px;
		}

		&:last-child.j-button--primary,
		&:first-child.j-button--success,
		&:first-child.j-button--warn,
		&:first-child.j-button--error,
		&:first-child.j-button--info {
			border-radius: 0 4px 4px 0;
		}

		&:first-child:not(.j-button--text) {
			border-radius: 4px 0 0 4px;
			border-right: none;

			&:hover,
			&:focus {

				@include theme_brd_color('primary', 'left');
			}

			@include theme_brd_color('primary', 'left');
		}

		&:last-child {
			border-radius: 0 4px 4px 0;
		}

		&:hover:not(.j-button--text),
		&:focus:not(.j-button--text) {

			@include theme_brd_color('simple', 'left');
		}

		@include theme_brd_color('simple', 'left');
	}
}
</style>
