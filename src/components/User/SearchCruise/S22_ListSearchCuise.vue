<template>

  <div class=" w-full ">
    <div class="  bg-white ">
      <div class="card mx-5" v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }">
        <DataView :value="products" dataKey="id" paginator :rows="4">
          <template #list="slotProps">
            <div class="grid grid-nogutter   ">
              <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3 my-3 surface-border shadow-2 rounded-3xl">
                  <div class="md:w-20rem relative ">
                    <img class="block xl:block mx-auto rounded-2xl w-full" :src="`${item.image}`" :alt="item.name"/>
                    <!-- <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute m-2 bg opacity-90 left-0 top-0"></Tag>-->

                    <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="bg-yellow-300 absolute m-2  opacity-85 left-0 top-0 rounded-3xl">
                      <div class="  flex align-items-center gap-2   px-2   ">
                        <span class="text-900 font-medium text-sm"  >{{ item.rating }}</span>
                        <i class="pi pi-star-fill text-green-00 "  ></i>
                      </div>
                    </Tag>
                  </div>
                  <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                    <div class="flex flex-row  relative  md:h-12rem md:flex-column justify-content-between align-items-start gap-2">
                      <div class=" ">
                        <span class="flex align-items-center font-medium  text-secondary text-sm gap-1"> <p class="pi pi-map-marker"> </p> {{ item.category }}</span>
                        <div class="text-lg font-bold  mt-2">{{ item.name }}</div>
                        <div class="text-sm font-medium  mt-2 no">{{ item.description }}</div>
                      <div class="w-24rem ">
                        <Tag class="gap-1 mx-1  bg-gray-400 px-2 mt-2"  severity="secondary" value="Có bể sục" rounded></Tag>
                        <Tag class="gap-1 mx-1  bg-gray-400 px-2 mt-2"  severity="secondary" value="Bao gồm tất cả các bữa ăn" rounded></Tag>
                        <Tag class="gap-1 mx-1  bg-gray-400 px-2 mt-2"  severity="secondary" value="Quầy bar" rounded></Tag>
                        <Tag class="gap-1 mx-1  bg-gray-400 px-2 mt-2"   severity="secondary" value="Lễ tân 24 giờ" rounded></Tag>
                        <Tag class="gap-1 mx-1  bg-gray-400 px-2 mt-2"  severity="secondary" value="Nhà hàng" rounded></Tag>
                        <Tag class="gap-1 mx-1  bg-gray-400 px-2 mt-2"   severity="secondary" value="+ 10" rounded></Tag>
                      </div>
                      </div>

                      <div class=" rounded-full max-w-5rem w-auto absolute lg:bottom-0 lg:left-0  right-0" >
                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="bg-red-300  rounded-full flex align-items-center " ></Tag>

<!--                        <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">-->
<!--                          <span class="text-900 font-medium text-sm">{{ item.rating }}</span>-->
<!--                          <i class="pi pi-star-fill text-yellow-500"></i>-->

<!--                        </div>-->
                      </div>
                    </div>


                    <div class="flex flex-column md:h-12rem md:justify-content-between md:align-items-end gap-5 lg:-ml-52">
                      <span class="text-3xl font-bold ">{{ item.price }}đ  </span>

                      <div class="flex flex-row-reverse md:flex-row gap-2 lg:-mb-4"  style="transform: scale(0.95);">
                        <Button icon="pi pi-heart" label="Like" outlined></Button>
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
  price: string = '';
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
        name: 'Du thuyền Heritage  Bình Chuẩn Cát Bà',
        description: 'Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: '3,550,000',
        category: 'Vịnh hạ long',
        quantity: 2,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      },
      {
        id: '2',
        code: 'Cruise02',
        name: 'Du thuyền Heritage  Bình Chuẩn Cát Bà2',
        description: 'Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu  Xem bản đồ và lịch trình',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: '3,550,000',
        category: 'Vịnh hạ long',
        quantity: 3,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      },
      {
        id: '3',
        code: 'Cruise03',
        name: 'Du thuyền Heritage  Bình Chuẩn Cát Bà3',
        description: 'Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu  Xem bản đồ và lịch trình',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: '3,550,000',
        category: 'Vịnh hạ long',
        quantity: 4,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      },
      {
        id: '4',
        code: 'Cruise04',
        name: 'Du thuyền Heritage  Bình Chuẩn Cát Bà4',
        description: 'Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu  Xem bản đồ và lịch trình',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: '3,550,000',
        category: 'Vịnh hạ long',
        quantity: 10,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      },
      {
        id: '5',
        code: 'Cruise05',
        name: 'Du thuyền Heritage  Bình Chuẩn Cát Bà5',
        description: 'Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu  Xem bản đồ và lịch trình',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: '3,550,000',
        category: 'Vịnh hạ long',
        quantity: 10,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      },
      {
        id: '6',
        code: 'Cruise06',
        name: 'Du thuyền Heritage  Bình Chuẩn Cát Bà6',
        description: 'Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu  Xem bản đồ và lịch trình',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: '3,550,000',
        category: 'Vịnh hạ long',
        quantity: 10,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      },
      {
        id: '7',
        code: 'Cruise07',
        name: 'Du thuyền Heritage  Bình Chuẩn Cát Bà 7',
        description: 'Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu  Xem bản đồ và lịch trình',
        image: 'https://minio.fares.vn/mixivivu-dev/tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp',
        price: '3,550,000',
        category: 'Vịnh hạ long',
        quantity: 10,
        inventoryStatus: 'Xu hướng',
        rating: 4,
      },
    ];
  }
}


onMounted(() => {
  ProductService.getProductsSmall().then((data: Product[]) => (products.value = data.slice(0, 100)));
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
