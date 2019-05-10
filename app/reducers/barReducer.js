import { BARS } from "../actions/actionTypes";

export const initialState = {
  data: {
    id: "",
    contactEmail: "",
    accStatement: "",
    skipTo: "",
    accPortal: "",
    theme: "",
    domains: [],
    stats: {}
  },
  isFetching: false,
  isUpdating: false,
  receivedAt: null,
  updatedAt: null,
  updated: false,
  error: false,
  errorMessage: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case BARS.BAR_BEGIN:
      return Object.assign({}, state, {
        isFetching: true
      });

    case BARS.BAR_SUCCESS:
      return {
        data: {
          id: action.bar.id,
          contactEmail: action.bar.contactEmail,
          accStatement: action.bar.accStatement,
          skipTo: action.bar.skipTo,
          accPortal: action.bar.accPortal,
          theme: action.bar.theme,
          domains: action.bar.domains || []
        },
        error: false,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        receivedAt: Date.now()
      };

    case BARS.BAR_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        isUpdating: false,
        receivedAt: Date.now(),
        data: {
          ...initialState.data
        }
      };

    case BARS.BAR_UPDATE_BEGIN:
      return Object.assign({}, state, {
        isUpdating: true
      });

    case BARS.BAR_UPDATE_SUCCESS:
      return {
        data: {
          id: action.bar.id,
          contactEmail: action.bar.contactEmail,
          accStatement: action.bar.accStatement,
          skipTo: action.bar.skipTo,
          accPortal: action.bar.accPortal,
          theme: action.bar.theme,
          domains: state.data.domains
        },
        error: false,
        updated: true,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        updatedAt: Date.now()
      };

    case BARS.BAR_UPDATE_FAILED:
      return {
        error: true,
        updated: false,
        errorMessage: action.message,
        isFetching: false,
        isUpdating: false,
        updatedAt: Date.now(),
        data: {
          ...state.data
        }
      };

    case BARS.BAR_CREATE_DOMAIN_BEGIN:
      return Object.assign({}, state, {
        isUpdating: true
      });

    case BARS.BAR_CREATE_DOMAIN_SUCCESS:
      return {
        data: {
          ...state.data,
          domains: state.data.domains.concat({ ...action.domain })
        },
        error: false,
        updated: true,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        updatedAt: Date.now()
      };

    case BARS.BAR_CREATE_DOMAIN_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        isUpdating: false,
        updatedAt: Date.now(),
        data: {
          ...state.data
        }
      };

    case BARS.BAR_DELETE_DOMAIN_BEGIN:
      return Object.assign({}, state, {
        isUpdating: true
      });

    case BARS.BAR_DELETE_DOMAIN_SUCCESS: {
      const domains = [...state.data.domains];
      const domainToDelete = domains.find(
        domain => domain.id === action.domainId
      );
      const updatedDomains = domains.filter(
        domain => domain.id !== domainToDelete.id
      );

      return {
        data: {
          ...state.data,
          domains: updatedDomains
        },
        error: false,
        updated: true,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        updatedAt: Date.now()
      };
    }

    case BARS.BAR_DELETE_DOMAIN_FAILED:
      return {
        error: true,
        updated: false,
        errorMessage: action.message,
        isFetching: false,
        isUpdating: false,
        updatedAt: Date.now(),
        data: {
          ...state.data
        }
      };

    case BARS.BAR_RESET:
      return {
        error: false,
        updated: false,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        updatedAt: Date.now(),
        data: {
          ...state.data
        }
      };

    case BARS.BAR_STATS_BEGIN:
      return Object.assign({}, state, {
        isFetching: true
      });

    case BARS.BAR_STATS_SUCCESS:
      return {
        data: {
          ...state.data,
          stats: action.stats
        },
        error: false,
        errorMessage: null,
        isFetching: false,
        updatedAt: Date.now()
      };

    case BARS.BAR_STATS_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        updatedAt: Date.now(),
        data: {
          ...state.data
        }
      };

    default:
      return state;
  }
}
