const searchParams = (options) => {
  const { page, query: q, KEY: key, BASE_URL, searchOptions } = options;
  const searchParams = new URLSearchParams({
    q,
    page,
    key,
    ...searchOptions,
  });

  return `${BASE_URL}${searchParams}`;
};

export default searchParams;
