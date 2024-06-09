<!-- src/views/Dashboard.vue -->
<template>
  <div class="flex h-screen">
    <div class="flex-1 p-4">
      <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow-md p-4">
          <h3 class="text-lg font-bold mb-2">Total Cruises</h3>
          <p class="text-4xl font-bold text-blue-500">{{ totalCruises }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4">
          <h3 class="text-lg font-bold mb-2">Total Bookings</h3>
          <p class="text-4xl font-bold text-green-500">{{ totalBookings }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4">
          <h3 class="text-lg font-bold mb-2">Total Reviews</h3>
          <p class="text-4xl font-bold text-yellow-500">{{ totalReviews }}</p>
        </div>
      </div>
      <div class="mt-8">
        <h3 class="text-lg font-bold mb-4">Recent Bookings</h3>
        <DataTable :value="recentBookings" responsiveLayout="scroll">
          <Column field="guest_quantity" header="Guests"></Column>
          <Column field="booking_date" header="Booking Date">
            <template #body="slotProps">
              {{ formatDate(slotProps.data.booking_date) }}
            </template>
          </Column>
          <Column field="total_price" header="Total Price">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.total_price) }}
            </template>
          </Column>
          <Column field="cruise.name" header="Cruise"></Column>
          <Column field="user.name" header="User"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default defineComponent({
  name: 'Dashboard',
  components: {
    DataTable,
    Column
  },
  data() {
    return {
      totalCruises: 10,
      totalBookings: 25,
      totalReviews: 50,
      recentBookings: [
        {
          guest_quantity: 2,
          booking_date: new Date('2023-05-01'),
          total_price: 1000,
          cruise: {name: 'Cruise 1'},
          user: {name: 'John Doe'}
        },
        {
          guest_quantity: 4,
          booking_date: new Date('2023-05-05'),
          total_price: 2000,
          cruise: {name: 'Cruise 2'},
          user: {name: 'Jane Smith'}
        },
        {
          guest_quantity: 6,
          booking_date: new Date('2023-05-10'),
          total_price: 3000,
          cruise: {name: 'Cruise 3'},
          user: {name: 'Bob Johnson'}
        }
      ]
    }
  },
  methods: {
    formatDate(date: Date) {
      return new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(date)
    },
    formatCurrency(value: number) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    }
  }
})
</script>
