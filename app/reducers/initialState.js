import { initialState as loading } from "./loadingReducer";
import { initialState as status } from "./statusReducer";
import { initialState as user } from "./userReducer";
import { initialState as bar } from "./barReducer";
import { initialState as session } from "./sessionReducer";

export default {
  routing: null,
  loading,
  status,
  user,
  bar,
  session
};
