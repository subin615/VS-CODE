const TOKEN = localStorage.getItem("token");

export const headers = {
  "Content-Type": "application/json",
  Authorization: `${"Bearer " + TOKEN}`,
};
