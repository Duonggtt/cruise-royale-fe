<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Cabin Management</h2>
    <DataTable :value="cabinTypes" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="maxGuests" header="Max Guests"></Column>
      <Column field="roomSize" header="Room Size"></Column>
      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editCabinType(slotProps.data)"></Button>
          <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteCabinType(slotProps.data.id)"></Button>
        </template>
      </Column>
    </DataTable>
    <Button label="Add Cabin Type" icon="pi pi-plus" class="mt-4" @click="showAddCabinTypeDialog = true" />

    <Dialog v-model:visible="showAddCabinTypeDialog" modal header="Add Cabin Type" :style="{ width: '50vw' }">
      <div class="grid">
        <div class="field col-12 md:col-6">
          <label for="name">Name</label>
          <InputText id="name" v-model="newCabinType.name" required="true" autofocus />
        </div>
        <div class="field col-12 md:col-6">
          <label for="description">Description</label>
          <InputText id="description" v-model="newCabinType.description" required="true" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="maxGuests">Max Guests</label>
          <InputNumber id="maxGuests" v-model="newCabinType.maxGuests" required="true" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="roomSize">Room Size</label>
          <InputNumber id="roomSize" v-model="newCabinType.roomSize" required="true" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="price">Price</label>
          <InputNumber id="price" v-model="newCabinType.price" required="true" mode="currency" currency="USD" locale="en-US" />
        </div>
      </div>
      <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="showAddCabinTypeDialog = false"></Button>
        <Button label="Save" icon="pi pi-check" autofocus @click="saveCabinType"></Button>
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
  name: 'CabinManagement',
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
      cabinTypes: [
        { id: 1, name: 'Standard', description: 'Standard Cabin', maxGuests: 2, roomSize: 20, price: 100 },
        { id: 2, name: 'Deluxe', description: 'Deluxe Cabin', maxGuests: 4, roomSize: 30, price: 200 },
        { id: 3, name: 'Suite', description: 'Suite Cabin', maxGuests: 6, roomSize: 50, price: 500 }
      ],
      showAddCabinTypeDialog: false,
      newCabinType: {
        name: '',
        description: '',
        maxGuests: null,
        roomSize: null,
        price: null
      }
    }
  },
  methods: {
    formatCurrency(value: number) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    editCabinType(cabinType: any) {
      // Handle edit cabin type logic
      console.log('Edit cabin type:', cabinType)
    },
    deleteCabinType(id: number) {
      // Handle delete cabin type logic
      console.log('Delete cabin type with id:', id)
    },
    saveCabinType() {
      // Handle save new cabin type logic
      console.log('Save new cabin type:', this.newCabinType)
      this.showAddCabinTypeDialog = false
      this.newCabinType = {
        name: '',
        description: '',
        maxGuests: null,
        roomSize: null,
        price: null
      }
    }
  }
})
</script>
