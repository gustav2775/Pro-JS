Vue.component("market",{
    prop:['positiveFilter','imgCatalog'],
template:`<div class="products">
                <div class="product-item" v-for="product of positiveFilter" :key="product.id_product">
                    <img :src="imgCatalog" alt="Some img">
                    <div class="desc">
                        <h3>{{product.product_name}}</h3>
                        <p>{{product.price}}₽</p>
                        <button class="buy-btn" @click="addProduct(product)">Купить</button>
                    </div>
                </div>
            </div>`
          
})
Vue.component("product",{
    prop:['product','imgCatalog'],
template:`<div class="product">
                    <img :src="imgCatalog" alt="Some img">
                    <div class="desc">
                        <h3>{{product.product_name}}</h3>
                        <p>{{product.price}}₽</p>
                        <button class="buy-btn" @click="addProduct(product)">Купить</button>
                </div>
            </div>`
          
})