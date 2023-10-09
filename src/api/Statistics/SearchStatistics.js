import { Axios } from "../Axios";

export const getStatistics = async () => {
  const response = await Axios.get('/api/statistics', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  if (response.status === 200) {
    const data = response.data;
    return data;
  } else if (response.status === 404) {
    // 404 Not Found 오류 처리
    return null;
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
};


