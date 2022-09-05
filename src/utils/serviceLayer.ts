export const apiRequests = {
  filterUsers: (value: string) => fetch(`${process.env.REACT_APP_URL}?search=${value}`),
}
