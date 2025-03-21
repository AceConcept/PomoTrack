<template>
  <div class="log">
    <!-- Display Day -->
    <h5
      v-if="day"
    >
      {{ displayDateHuman(day) }}
    </h5>
    
    <!-- Time Spent on Task -->
    <h6>Time Spent: {{ displayDuration(timeSpent) }}</h6>
    
    <!-- Task Activity Log -->
    <table
      class="activityLog table"
    >
      <tr
        v-for="(event, index) in log"
        :key="index"
      >
        <template v-if="!event.completed">
          <td
            v-if="event.task"
            class="align-middle"
          >
            <span>{{ event.task }}</span>
          </td>
          
          <td v-if="event.started">
            <span>Started {{ displayTimeHuman(event.started) }}</span>
          </td>
          <td>
            <font-awesome-icon icon="arrow-right" />
          </td>
          <td>
            <span>{{ event.stopped ? 'Stopped' : 'Running' }} {{ displayTimeHuman(event.stopped || Date.now()) }}</span>
          </td>
          <td v-if="event.timeSpent">
            <span>Time Spent: {{ displayDuration(event.timeSpent) }}</span>
          </td>
          <td
            v-if="!event.task && !event.completed"
            class="btn-container"
          >
            <div
              :ref="`intervalMenu${index}`"
              class="dropdown"
            >
              <button
                class="btn btn-light interval-menu-btn dropdown-toggle"
                data-toggle="dropdown"
                data-boundary="viewport"
                aria-haspopup="true"
              >
                <font-awesome-icon icon="ellipsis-vertical" />
              </button>
              <div
                class="dropdown-menu dropdown-menu-right"
                style="padding: 0; min-width: 120px;"
              >
                <button
                  class="btn btn-danger"
                  style="width: 100%"
                  @click="deleteInterval({ log: event, index })"
                >
                  Delete Interval
                </button>
              </div>
            </div>
          </td>
        </template>
        
        <template v-if="event.completed">
          <td v-if="event.task">
            <span>{{ event.task }}</span>
          </td>
          <td />
          <td>
            <span>Completed {{ displayTimeHuman(event.completed) }}</span>
          </td>
          <td />
          <td />
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
import time, { displayDuration } from '../lib/time'

export default {
  name: 'Log',
  
  mixins: [time],
  
  props: {
    day: {
      type: String,
      default: null
    },
    log: {
      type: Array,
      default: () => []
    },
    timeSpent: {
      type: Number,
      default: 0
    },
    deleteIntervalButtonClicked: {
      type: Function,
      default: () => {
      }
    }
  },
  
  methods: {
    
    displayEventDuration (event) {
      const end = event.stopped || Date.now()
      return displayDuration(end - event.started)
    },
  
    deleteInterval ({ log, index }) {
      this.$refs[`intervalMenu${index}`][0].classList.remove('show')
      this.$refs[`intervalMenu${index}`][0].querySelector('button[data-toggle="dropdown"]').setAttribute('aria-expanded', 'false')
      this.$refs[`intervalMenu${index}`][0].querySelector('.dropdown-menu').classList.remove('show')
      this.deleteIntervalButtonClicked({ logId: log.id })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables";

.log {
  margin-top: 32px;
}

.activityLog {
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 16px;
  text-align: center;
}

.btn-container {
  padding: 0;
  vertical-align: middle;
  
  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    right: auto !important;
    left: 14px !important;
  }

  .dropdown-toggle::after {
    display: none;
  }
}

td {
  font-size: $font-size-small;
}
</style>
