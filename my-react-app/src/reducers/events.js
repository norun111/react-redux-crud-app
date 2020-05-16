import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT , READ_EVENT} from '../actions'

export default (events = {} , action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')

    case DELETE_EVENT:
      console.log(action.id);
      delete events[action.id]
      return { ...events }

    case READ_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data}

    default:
      return events
  }
}