<!-- src/views/CruiseManagement.vue -->
<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Cruise Management</h2>
    <DataTable :value="cruises" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="launchedYear" header="Launched Year"></Column>
      <Column field="material" header="Material"></Column>
      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editCruise(slotProps.data)"></Button>
          <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteCruise(slotProps.data.id)"></Button>
        </template>
      </Column>
    </DataTable>
    <Button label="Add Cruise" icon="pi pi-plus" class="mt-4" @click="showAddCruiseDialog = true" />

    <Dialog v-model:visible="showAddCruiseDialog" modal header="Add Cruise" :style="{ width: '50vw' }">
      <div class="grid">
        <div class="field col-12 md:col-6">
          <label for="name">Name</label>
          <InputText id="name" v-model="newCruise.name" required="true" autofocus />
        </div>
        <div class="field col-12 md:col-6">
          <label for="description">Description</label>
          <InputText id="description" v-model="newCruise.description" required="true" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="launchedYear">Launched Year</label>
          <InputNumber id="launchedYear" v-model="newCruise.launchedYear" required="true" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="material">Material</label>
          <InputText id="material" v-model="newCruise.material" required="true" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="price">Price</label>
          <InputNumber id="price" v-model="newCruise.price" required="true" mode="currency" currency="USD" locale="en-US" />
        </div>
      </div>
      <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="showAddCruiseDialog = false"></Button>
        <Button label="Save" icon="pi pi-check" autofocus @click="saveCruise"></Button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'

export default defineComponent({
  name: 'CruiseManagement',
  components: {
    DataTable,
    Column,
    Button,
    Dialog,
    InputText,
    InputNumber
  },
  data() {
    return {
      cruises: [
        { id: 1, name: 'Cruise 1', description: 'Description 1', launchedYear: 2010, material: 'Steel', price: 1000 },
        { id: 2, name: 'Cruise 2', description: 'Description 2', launchedYear: 2015, material: 'Aluminum', price: 2000 },
        { id: 3, name: 'Cruise 3', description: 'Description 3', launchedYear: 2020, material: 'Fiberglass', price: 3000 }
      ],
      showAddCruiseDialog: false,
      newCruise: {
        name: '',
        description: '',
        launchedYear: null,
        material: '',
        price: null
      }
    }
  },
  methods: {
    formatCurrency(value: number) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    editCruise(cruise: any) {
      // Handle edit cruise logic
      console.log('Edit cruise:', cruise)
    },
    deleteCruise(id: number) {
      // Handle delete cruise logic
      console.log('Delete cruise with id:', id)
    },
    saveCruise() {
      // Handle save new cruise logic
      console.log('Save new cruise:', this.newCruise)
      this.showAddCruiseDialog = false
      this.newCruise = {
        name: '',
        description: '',
        launchedYear: null,
        material: '',
        price: null
      }
    }
  }
})
</script>
