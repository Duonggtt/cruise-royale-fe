<!-- src/views/Dashboard.vue -->
<template>
  <div class="flex h-screen ">
    <div class="w-64 bg-gray-800 text-white py-4 ">
      <div class="px-4 space-y-5">
        <h3 class="text-xl font-bold mb-4 text-amber-50">Navigation</h3>
        <router-link to="/adminView" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-700 text-amber-50  ">
          <i class="pi pi-home mr-2"></i>
          <span >Dashboard</span>
        </router-link>
        <router-link to="/cruisesView" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-700 text-amber-50">
          <i class="pi pi-shield mr-2"></i>
          <span>Cruises</span>
        </router-link>
        <router-link to="/cabinsView" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-700 text-amber-50">
          <i class="pi pi-briefcase mr-2"></i>
          <span>Cabins</span>
        </router-link>
        <router-link to="/bookingsView" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-700 text-amber-50">
          <i class="pi pi-calendar mr-2"></i>
          <span>Bookings</span>
        </router-link>
        <router-link to="/reviewsView" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-700 text-amber-50">
          <i class="pi pi-star mr-2"></i>
          <span>Reviews</span>
        </router-link>
        <router-link to="/usersView" class="flex items-center px-3 py-2 rounded-md hover:bg-gray-700 text-amber-50">
          <i class="pi pi-users mr-2"></i>
          <span>Users</span>
        </router-link>

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
