export default function getUserId(user = {}) {
  let userId = user._id || undefined;

  if (!userId) {
    userId = user.id || undefined;
  }

  return userId;
}
