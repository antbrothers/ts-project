import { Commit } from 'vuex';
import shop from "../../api/shop";
import * as types from "../mutation-types";
import { CartProduct, CheckoutStatus, AddToCartPayload } from "../index";
interface Shape {
  id: number
  quantity: number
}
interface CheckoutFailurePayload {
  savedCartItems: Shape[]
}
export interface State {
  added: Shape[]
  checkoutStatus: CheckoutStatus
}

// 初始化状态
const initState: State = {
  added: [],
  checkoutStatus: null
}

// getters 
const getters = {
  checkoutStatus: (state: State) => state.checkoutStatus
}

// actions
const actions = {
  checkout(context: {commit: Commit; state: State}, products: CartProduct[]) {
    const failurePayload: CheckoutFailurePayload = {
      savedCartItems: [...context.state.added]
    }
    context.commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => context.commit(types.CHECKOUT_SUCCESS),
      () => context.commit(types.CHECKOUT_FAILURE, failurePayload)
    )
  }
}
// mutations
const mutations = {
  [types.ADD_TO_CART] (state: State, payload: AddToCartPayload) {
    state.checkoutStatus = null
    const record = state.added.find((p) => p.id === payload.id)
    if (!record) {
      state.added.push({
        id: payload.id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [types.CHECKOUT_REQUEST] (state: State) {
    state.added = []
    state.checkoutStatus = null
  },
  [types.CHECKOUT_SUCCESS](state: State) {
    state.checkoutStatus = 'successfull'
  },
  [types.CHECKOUT_FAILURE] (state: State, payload: CheckoutFailurePayload)   {
    state.added = payload.savedCartItems
    state.checkoutStatus = 'failed'
  }
}
export default {
  state: initState,
  getters,
  actions,
  mutations
}