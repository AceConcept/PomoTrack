const initialState = {
  tasks: [],
  tags: {},
  tagOrder: [],
  totalTarget: {},
  
  tempState: {
    activeTaskID: null,
    running: false,
    modalTagId: null
  },
  
  settings: {

    // Timer settings
    selectedTaskID: null,
    activeMinutes: 25,
    restMinutes: 5,
    continueOnComplete: false,
    secondReminderMinutes: 5,
    secondReminderEnabled: true,
    
    // TaskList settings
    selectedTagIds: [],
    filterOperator: 'and',
    addSelectedTags: true,
    insertAtTop: false,
    
    // Navbar settings
    globalNotificationsEnabled: true,
    timeFormat24: false,
    DailyTarget: null,
    WeeklyTarget: null,
    MonthlyTarget: null
  }
}

export default initialState
