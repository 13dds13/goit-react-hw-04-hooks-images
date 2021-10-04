const fetchImages = async (dataForRequest) => {
  const datafromAPI = await fetch(dataForRequest);
  try {
    if (datafromAPI.ok) {
      return datafromAPI.json();
    }
    throw new Error("Ooops, something went wrong!");
  } catch (error) {
    return error;
  }
};

export default fetchImages;
