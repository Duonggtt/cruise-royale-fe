<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Review Management</h2>
    <DataTable :value="reviews" responsiveLayout="scroll">
      <Column field="comment" header="Comment"></Column>
      <Column field="rating" header="Rating">
        <template #body="slotProps">
          <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
        </template>
      </Column>
      <Column field="review_date" header="Review Date">
        <template #body="slotProps">
          {{ formatDate(slotProps.data.review_date) }}
        </template>
      </Column>
      <Column field="booking.cruise.name" header="Cruise"></Column>
      <Column field="user.name" header="User"></Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteReview(slotProps.data.id)"></Button>
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
import Rating from 'primevue/rating'

export default defineComponent({
  name: 'ReviewManagement',
  components: {
    DataTable,
    Column,
    Button,
    Rating
  },
  data() {
    return {
      reviews: [
        {
          id: 1,
          comment: 'Great experience!',
          rating: 5,
          review_date: new Date('2023-05-15'),
          booking: { cruise: { name: 'Cruise 1' } },
          user: { name: 'John Doe' }
        },
        {
          id: 2,
          comment: 'Could be better.',
          rating: 3,
          review_date: new Date('2023-05-20'),
          booking: { cruise: { name: 'Cruise 2' } },
          user: { name: 'Jane Smith' }
        },
        {
          id: 3,
          comment: 'Highly recommended!',
          rating: 4,
          review_date: new Date('2023-05-25'),
          booking: { cruise: { name: 'Cruise 3' } },
          user: { name: 'Bob Johnson' }
        }
      ]
    }
  },
  methods: {
    formatDate(date: Date) {
      return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)
    },
    deleteReview(id: number) {
      // Handle delete review logic
      console.log('Delete review with id:', id)
    }
  }
})
</script>
