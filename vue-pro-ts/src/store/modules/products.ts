import shop from '../../api/shop'
import * as types from '../mutation-types'
import { ActionContextBasic, Product, AddToCartPayload } from '../index'

export interface ProductsPayload {
  products: Product[]
}
export interface State {
  all: Product[]
}
// 初始化state
const initState = {
  all: []
}

// getters 
const getters = {
  allProducts: (state: State) => state.all
}

// actioins 
const actions= {
  getAllProducts(context: ActionContextBasic) {
    
  }
}