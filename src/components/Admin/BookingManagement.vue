<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Booking Management</h2>
    <DataTable :value="bookings" responsiveLayout="scroll">
      <Column field="guest_quantity" header="Guests"></Column>
      <Column field="booking_date" header="Booking Date">
        <template #body="slotProps">
          {{ formatDate(slotProps.data.booking_date) }}
        </template>
      </Column>
      <Column field="booking_status" header="Booking Status">
        <template #body="slotProps">
          <span :class="['badge', slotProps.data.booking_status ? 'badge-success' : 'badge-danger']">{{ slotProps.data.booking_status ? 'Confirmed' : 'Pending' }}</span>
        </template>
      </Column>
      <Column field="total_price" header="Total Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.total_price) }}
        </template>
      </Column>
      <Column field="payment_status" header="Payment Status">
        <template #body="slotProps">
          <span :class="['badge', slotProps.data.payment_status ? 'badge-success' : 'badge-danger']">{{ slotProps.data.payment_status ? 'Paid' : 'Unpaid' }}</span>
        </template>
      </Column>
      <Column field="cruise.name" header="Cruise"></Column>
      <Column field="user.name" header="User"></Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editBooking(slotProps.data)"></Button>
          <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteBooking(slotProps.data.id)"></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'

export default defineComponent({
  name: 'BookingManagement',
  components: {
    DataTable,
    Column,
    Button
  },
  data() {
    return {
      bookings: [
        {
          id: 1,
          guest_quantity: 2,
          booking_date: new Date('2023-05-01'),
          booking_status: true,
          total_price: 1000,
          payment_status: true,
          cruise: { name: 'Cruise 1' },
          user: { name: 'John Doe' }
        },
        {
          id: 2,
          guest_quantity: 4,
          booking_date: new Date('2023-05-05'),
          booking_status: false,
          total_price: 2000,
          payment_status: false,
          cruise: { name: 'Cruise 2' },
          user: { name: 'Jane Smith' }
        },
        {
          id: 3,
          guest_quantity: 6,
          booking_date: new Date('2023-05-10'),
          booking_status: true,
          total_price: 3000,
          payment_status: true,
          cruise: { name: 'Cruise 3' },
          user: { name: 'Bob Johnson' }
        }
      ]
    }
  },
  methods: {
    formatDate(date: Date) {
      return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)
    },
    formatCurrency(value: number) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    editBooking(booking: any) {
      // Handle edit booking logic
      console.log('Edit booking:', booking)
    },
    deleteBooking(id: number) {
      // Handle delete booking logic
      console.log('Delete booking with id:', id)
    }
  }
})
</script>

<style scoped>
.badge {
  @apply px-2 py-1 rounded-full text-xs font-bold;
}
.badge-success {
  @apply bg-green-200 text-green-800;
}
.badge-danger {
  @apply bg-red-200 text-red-800;
}
</style>
