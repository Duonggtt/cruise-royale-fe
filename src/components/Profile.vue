<template>
  <div class="user-profile">
    <div class="profile-header">
      <img src="#" alt="user avatar" class="avatar">
      <h2 class="profile-name">Thông tin người dùng Nguyễn Huy Chiến</h2>
    </div>
    <div class="profile-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        consectetur quam nec lorem maximus, non porta velit blandit.
        Maecenas faucibus lectus ac enim ultricies, vel sollicitudin
        ligula gravida. Sed suscipit, ligula at aliquet lacinia, lorem
        quam porta risus, ac tincidunt risus sem et orci. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Nulla facilisi.
      </p>
      <p>
        Proin eget neque tortor. Donec nec lectus sit amet ipsum
        vulputate dignissim. Donec at sem tellus. Donec id ante
        feugiat, rhoncus leo eu, pretium leo. Curabitur tincidunt
        sagittis elit, vitae blandit nisl venenatis eget. Maecenas
        eleifend, tellus et mollis consectetur, odio ante blandit dolor,
        nec interdum leo est sit amet eros.
      </p>
      <p>
        Duis accumsan elit at lorem dignissim, vel aliquet velit
        elementum. Duis elementum elit nec velit consequat, at
        suscipit justo pretium. Nulla facilisi. Praesent eget
        scelerisque diam. Suspendisse nec dolor felis. Maecenas
        ultricies lectus sed mauris varius, at ultricies mi fermentum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
}
</script>

<style scoped>
.user-profile {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1rem;
}

.profile-name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0;
}

.profile-content {
  line-height: 1.6;
}
</style>
