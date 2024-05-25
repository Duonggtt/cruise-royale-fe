<template>


  <div class="card flex justify-content-center flex-wrap gap-3">
    <Toast/>
    <SplitButton class="menu" label="Save" :model="items" @click="save" rounded></SplitButton>
    <SplitButton class="menu" label="Save" :model="items" @click="save" rounded severity="secondary"></SplitButton>
    <SplitButton class="menu" label="Save" :model="items" @click="save" rounded severity="success"></SplitButton>
    <SplitButton class="menu" label="Save" :model="items" @click="save" rounded severity="info"></SplitButton>
    <SplitButton class="menu" label="Save" :model="items" @click="save" rounded severity="warning"></SplitButton>
    <SplitButton class="menu" label="Save" :model="items" @click="save" rounded severity="help"></SplitButton>
    <SplitButton class="menu" label="Save" :model="items" @click="save" rounded severity="danger"></SplitButton>
    <SplitButton class="menu" label="Save" :model="items" @click="save" rounded severity="contrast"></SplitButton>
  </div>
  <div class="card ">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>


    <Dropdown>
      <template #dropdownicon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g id="chevron-down">
            <path
                d="M12,15.25a.74.74,0,0,1-.53-.22l-5-5A.75.75,0,0,1,7.53,9L12,13.44,16.47,9A.75.75,0,0,1,17.53,10l-5,5A.74.74,0,0,1,12,15.25Z"/>
          </g>
        </svg>
      </template>
    </Dropdown>


  </div>


</template>

<script setup>
import {useToast} from "primevue/usetoast";

const toast = useToast();

const items = [
  {
    label: 'Update',
    command: () => {
      this.$toast.add({severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000});
    }
  },
  {
    label: 'Delete',
    command: () => {
      this.$toast.add({severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
    }
  },
  {
    label: 'Vue Website',
    command: () => {
      window.location.href = 'https://vuejs.org/';
    }
  },
  {label: 'Upload', to: '/fileupload'}
];

const save = () => {
  toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
};
</script>

<style scoped>

</style>
