<template>
  <ui-field :label="label">
    <input
        v-model="innerValue"
        :disabled="disabled"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        class="ui-input"
        :class="rootClasses"
        @input="changeValue"
    />

    <transition name="fade">
      <div v-if="errorMessage" class="ui-input__error-message">
        <div class="ui-input__error-message-text">
          {{ errorMessage }}
        </div>
      </div>
    </transition>

  </ui-field>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
import { InputEmits, InputProps } from './UiInput.types.ts';
import { useInput } from './UiInput.composables.ts';
import { UiField } from "../UiField";

const emit = defineEmits<InputEmits>();

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  type: 'text',
  name: '',
  label: '',
  readonly: false,
})

const { innerValue, changeValue, rootClasses } = useInput(props, emit);

</script>

<style src="./UiInput.styles.scss" lang="scss"></style>