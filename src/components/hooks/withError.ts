// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withError = async (prom: Promise<any>) => {
  try {
    const data = await prom;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export default withError;

// const [data, err] = await withError(prom);

// if (err) {
//   console.log(err);
// }

// if (data) {
//   console.log(data);
// }``
