<template>
  <a-row>
    <a-col :xs="{span: 24}" :lg="{span: 6}" v-for="(item,i) in 4" :key="i">
      <a href="#">
        <a-card hoverable style="width: 300px" :loading="true">
          <img
            alt="example"
            src="http://www.clipartroo.com/images/69/mountains-animated-gifs-animated-clipart-69683.gif"
            slot="cover"
          >
          <div class="genre">Genre</div>
          <a-card-meta title="Track Title" description="Author">
            <a-avatar slot="avatar" style="color: #f56a00; backgroundColor: #fde3cf">A</a-avatar>
          </a-card-meta>
        </a-card>
      </a>
    </a-col>
  </a-row>
</template>
