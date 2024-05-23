export const imageHandler = (path, type) => {
  switch (type) {
    case 1:
      if (path && path.indexOf('http') === -1) {
        return `${API_URL}/storage/staff/profile/${path}`;
      } else {
        return path;
      }

    default:
      return `${API_URL}/${path}`;
  }
};
