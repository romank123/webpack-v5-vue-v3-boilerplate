<template>
    <button
        class="base-button"
        :type="props.type"
        :disabled="props.disabled"
    >
        <slot>Button</slot>
    </button>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'button',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
.base-button {
    &:hover {
        cursor: pointer;
    }
}
</style>
