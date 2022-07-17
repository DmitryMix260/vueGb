<template>
    <div class="payAddNewCategory">
            <label for="newCategory">
              <input type="text" placeholder="Add payment category" v-model="newCategory">
            </label>
            <button class="btnPayForm" @click="addCategory">Add category</button>
          </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AddNewCategory',
  data () {
    return {
      newCategory: ''
    }
  },
  methods: {
    ...mapActions([
      'addNewCategorys',
      'fetchCategoryListData'
    ]),
    addCategory () {
      this.addNewCategorys(this.newCategory)
      this.newCategory = ''
    }
  },
  computed: {
    ...mapGetters([
      'categoryList'
    ])
  },
  created () {
    // this.fetchCategoryListData()
  }

}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
}
</style>
