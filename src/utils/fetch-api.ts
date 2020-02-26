import fetch from 'isomorphic-unfetch';

export async function Fetch(input: RequestInfo, init?: RequestInit) {
  try {
    const data = await fetch(
      `http://jsonplaceholder.typicode.com${input}`,
      init
    ).then(res => res.json());
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
