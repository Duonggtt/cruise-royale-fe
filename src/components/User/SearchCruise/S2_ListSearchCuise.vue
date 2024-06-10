<template>

  <div class="mx-auto max-w-screen-xl ">
    <div class=" mt-24 bg-white ">
      <div class="card mx-5">
        <DataView :value="products" dataKey="id">
          <template #list="slotProps">
            <div class="grid grid-nogutter   ">
              <div v-for="(item, index) in slotProps.items" :key="index" class="col-12  ">
                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3 my-3  border-1 surface-border shadow-3 rounded-3xl">
                  <div class="md:w-20rem relative ">
                    <img class="block xl:block mx-auto rounded-2xl w-full" :src="`${item.image}`" :alt="item.name"/>
                    <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                  </div>
                  <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                    <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                      <div>
                        <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                        <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                      </div>
                      <div class="surface-100 p-1" style="border-radius: 30px">
                        <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                          <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                          <i class="pi pi-star-fill text-yellow-500"></i>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-column md:align-items-end gap-5">
                      <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                      <div class="flex flex-row-reverse md:flex-row gap-2">
                        <Button icon="pi pi-heart" outlined></Button>
                        <Button icon="pi pi-shopping-cart" label="Đặt ngay" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>

    </div>
  </div>


</template>


<script setup lang="ts">
import {ref, onMounted} from "vue";

class Product {
  id: string = '';
  code: string = '';
  name: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  category: string = '';
  quantity: number = 0;
  inventoryStatus: string = '';
  rating: number = 0;
}


class ProductService {
  static async getProductsSmall(): Promise<Product[]> {

    return [
      {
        id: '1',
        code: 'Cruise01',
        name: 'Du thuyen 1',
        description: 'Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu  Xem bản đồ và lịch trình',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: 100,
        category: 'Vịnh hạ long',
        quantity: 10,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      }, {
        id: '2',
        code: 'Cruise02',
        name: 'Du Thuyền 2',
        description: 'Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu  Xem bản đồ và lịch trình',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: 100,
        category: 'Vịnh hạ long',
        quantity: 10,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      },

    ];
  }
}


onMounted(() => {
  ProductService.getProductsSmall().then((data: Product[]) => (products.value = data.slice(0, 5)));
});

const products = ref();
const getSeverity = (product: Product) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success';
    case 'LOWSTOCK':
      return 'warning';
    case 'OUTOFSTOCK':
      return 'danger';
    default:
      return 'info';
  }
};
</script>
