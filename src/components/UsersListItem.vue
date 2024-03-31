<template>
  <li>
    <router-link :to="`/users/${props.item.id}`">
      {{ props.item.name }}
    </router-link>
      &nbsp;
    <BaseButton @click="visitUrl(`/users/${props.item.id}`)">
      More info
    </BaseButton>
      &nbsp;
    <BaseButton @click="deleteUser(props.item.id)">
      Delete
    </BaseButton>
    <BtnFavorite
      :item="props.item"
      type="user"
    />
  </li>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';
import BtnFavorite from '@/components/BtnFavorite.vue';

const emit = defineEmits(['deleteUser']);
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});

const router = useRouter();

function visitUrl(url) {
  router.push(url);
}

function deleteUser(userId) {
  emit('deleteUser', userId);
}
</script>
