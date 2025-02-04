import { createLocalVue, shallowMount } from '@vue/test-utils'
import AllActivityModal from '@/components/modals/AllActivityModal'
import ActivityView from '@/components/ActivityView'
import { generateActivity } from '../fixtures'
import Vuex from 'vuex'
import { ModalPlugin } from 'bootstrap-vue'

const { log } = generateActivity()

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ModalPlugin)

let wrapper, store

describe('AllActivityModal', () => {
  
  // add this before each
  beforeEach(() => {
    store = new Vuex.Store({
      getters: {
        allActivity: () => log
      }
    })
    
    wrapper = shallowMount(AllActivityModal, {
      localVue,
      store
    })
  })
  
  it('should render the modal title with "All Activity"', () => {
    
    expect(wrapper.findComponent({ name: 'b-modal' }).props('title')).toEqual('All Activity')
    
  })
  
  it('should not show modal by default', () => {
    
    // should not find component
    expect(wrapper.findComponent(ActivityView).exists()).toBe(false)
    
  })
  
  it('should display an ActivityView in the modal body with the correct element and log', async () => {
    
    await wrapper.setData({ isModalShown: true })
    expect(wrapper.findComponent(ActivityView).props()).toEqual({
      label: 'All Activity',
      log,
      id: 'allActivity',
      taskId: null,
      tagId: null
    })
    
  })
  
})
