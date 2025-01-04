import axios from "axios";
import QueryString from "qs";

interface GetRequest {
  engine: string;
  path: string;
  params?: string;
}

export const getRequest = async ({ engine, path, params }: GetRequest) => {
  const queryParam = QueryString.stringify(params);
  const fetchUrl = `${engine}/${path}?${queryParam}`;

  console.log("getRequest");

  try {
    const res = await axios.get(fetchUrl);
    const data = res.data;

    return data;
  } catch (error) {
    console.log("error  :>> ", error);
  }
};
