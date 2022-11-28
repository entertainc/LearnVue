export async function getData(API: string): Promise<any> {
  const res = await fetch(API).then(res => res.json(), err => console.error(err));
  return res;
}

export async function setData(API: string, fetchData :any): Promise<void> {
  const reqData = JSON.stringify(fetchData);
  console.warn('reqdata = ', reqData);
  const reqObj = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: reqData,
  }
  const res = await fetch(API, reqObj);
}

export async function deleteData(API: string, dataId: string): Promise<void> {
  const fetchAPI = API + `/${dataId}`
  const reqObj = {
    method: "DELETE",
  }
  const res = await fetch(fetchAPI, reqObj).then(res => console.warn('删除成功'))
}