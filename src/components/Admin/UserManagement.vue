<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">User Management</h2>
    <DataTable :value="users" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone"></Column>
      <Column field="address" header="Address"></Column>
      <Column field="roles" header="Roles">
        <template #body="slotProps">
          <span v-for="role in slotProps.data.roles" :key="role.id" class="badge">{{ role.name }}</span>
        </template>
      </Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editUser(slotProps.data)"></Button>
          <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteUser(slotProps.data.id)"></Button>
        </template>
      </Column>
    </DataTable>
    <Button label="Add User" icon="pi pi-plus" class="mt-4" @click="showAddUserDialog = true" />

    <Dialog v-model:visible="showAddUserDialog" modal header="Add User" :style="{ width: '50vw' }">
      <div class="grid">
        <div class="field col-12 md:col-6">
          <label for="name">Name</label>
          <InputText id="name" v-model="newUser.name" required="true" autofocus />
        </div>
        <div class="field col-12 md:col-6">
          <label for="email">Email</label>
          <InputText id="email" v-model="newUser.email" required="true" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="phone">Phone</label>
          <InputText id="phone" v-model="newUser.phone" required="true" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="address">Address</label>
          <InputText id="address" v-model="newUser.address" required="true" />
        </div>
        <div class="field col-12">
          <label for="roles">Roles</label>
          <MultiSelect id="roles" v-model="newUser.roles" :options="roles" optionLabel="name" optionValue="id" />
        </div>
      </div>
      <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="showAddUserDialog = false"></Button>
        <Button label="Save" icon="pi pi-check" autofocus @click="saveUser"></Button>
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
import MultiSelect from 'primevue/multiselect'

export default defineComponent({
  name: 'UserManagement',
  components: {
    DataTable,
    Column,
    Button,
    Dialog,
    InputText,
    MultiSelect
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '123-456-7890',
          address: '123 Main St, Anytown USA',
          roles: [{ id: 1, name: 'User' }]
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '987-654-3210',
          address: '456 Oak St, Somewhereville USA',
          roles: [{ id: 1, name: 'User' }, { id: 2, name: 'Admin' }]
        },
        {
          id: 3,
          name: 'Bob Johnson',
          email: 'bob.johnson@example.com',
          phone: '555-555-5555',
          address: '789 Maple Ave, Otherville USA',
          roles: [{ id: 1, name: 'User' }]
        }
      ],
      roles: [
        { id: 1, name: 'User' },
        { id: 2, name: 'Admin' }
      ],
      showAddUserDialog: false,
      newUser: {
        name: '',
        email: '',
        phone: '',
        address: '',
        roles: []
      }
    }
  },
  methods: {
    editUser(user: any) {
      // Handle edit user logic
      console.log('Edit user:', user)
    },
    deleteUser(id: number) {
      // Handle delete user logic
      console.log('Delete user with id:', id)
    },
    saveUser() {
      // Handle save new user logic
      console.log('Save new user:', this.newUser)
      this.showAddUserDialog = false
      this.newUser = {
        name: '',
        email: '',
        phone: '',
        address: '',
        roles: []
      }
    }
  }
})
</script>

<style scoped>
.badge {
  @apply bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded;
}
</style>
