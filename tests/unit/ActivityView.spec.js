import { createLocalVue, shallowMount } from '@vue/test-utils'
import ActivityView from '@/components/ActivityView'
import ActivityChart from '@/components/ActivityChart'
import Log from '@/components/Log.vue'
import { FontAwesomeIcon } from '@/font-awesome-icons'
import { generateActivity } from '@/fixtures'
import moment from 'moment'
import Vuex from 'vuex'

const EXPECTED_DAY_KEY_FORMAT = 'YYYY-MM-DD'
const EXPECTED_DAY_DISPLAY_FORMAT = 'ddd MMM DD'

const { log, day1Duration, day2Duration, completedDate } = generateActivity()
const day1 = moment(completedDate).subtract(1, 'd')
const day2 = completedDate

const localVue = createLocalVue()
localVue.component('font-awesome-icon', FontAwesomeIcon)
localVue.use(Vuex)

const shouldBehaveLikeActivityView = function (wrapper) {
  
  it('renders a chart of the activity in ascending daily order', () => {
    const activityChart = wrapper.find(ActivityChart)
    expect(activityChart.props('chartData')).toEqual({
      labels: [day1, day2].map(day => day.format(EXPECTED_DAY_DISPLAY_FORMAT)),
      datasets: [{
        label: 'Activity for ' + wrapper.props('element'),
        backgroundColor: '#2020FF',
        data: [day1Duration, day2Duration].map(dur => dur.asMinutes())
      }]
    })
    
  })
  
  it('should calculate time spent even when an interval is running', () => {
    
    const startedTask = shallowMount(ActivityView, {
      propsData: {
        log: [{ started: Date.now(), stopped: null }],
        element: 'My Task'
      }
    })
    expect(startedTask.vm.calculateTimeSpent(startedTask.vm.log)).toEqual(moment.duration(0))
    
  })
  
  it('renders "Activity Log" display button', () => {
    
    const viewLogSwitch = wrapper.find('#viewLogSwitch')
    expect(viewLogSwitch.text()).toBe('Activity Log')
    
  })
  
  it('renders the daily task logs in descending chronological order when "Activity Log" clicked', async () => {
    
    expect(wrapper.vm.logVisible).toBe(false)
    
    const viewLogSwitch = wrapper.find('#viewLogSwitch')
    viewLogSwitch.trigger('click')
    expect(viewLogSwitch.classes()).toContain('active')
    
    expect(wrapper.vm.logVisible).toBe(true)
    
    const activityLogs = wrapper.findAll(Log)
    expect(activityLogs.at(0).props()).toEqual({
      log: [log[3], log[2]],
      day: day2.format(EXPECTED_DAY_KEY_FORMAT),
      timeSpent: day2Duration
    })
    expect(activityLogs.at(1).props()).toEqual({
      log: [log[1], log[0]],
      day: day1.format(EXPECTED_DAY_KEY_FORMAT),
      timeSpent: day1Duration
    })
    
  })
  
}

describe('ActivityView', () => {
  
  describe('for task', () => {
    
    const wrapper = shallowMount(ActivityView, {
      propsData: { log: log, element: 'My Task', taskId: 0 },
      localVue
    })
    
    it('renders a title with the element name', () => {
      
      expect(wrapper.text()).toMatch('Activity for My Task')
      
    })
    
    shouldBehaveLikeActivityView(wrapper)
    
  })
  
  describe('for tag', () => {
    
    const wrapper = shallowMount(ActivityView, {
      propsData: { log: log, element: 'myTag' },
      localVue
    })
  
    it('does not render a title with the element name', () => {
      
      expect(wrapper.text()).not.toMatch('Activity for My Task')
      
    })
    
    shouldBehaveLikeActivityView(wrapper)
    
  })
  
})
