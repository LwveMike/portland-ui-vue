import axios from 'axios';

const pUrl = 'http://localhost:3000/products';

const descendingSort = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);

  if (dateA > dateB) {
    return 1;
  } if (dateA < dateB) {
    return -1;
  }
  return 0;
};

const apiFetchProducts = async () => {
  try {
    const res = await axios.get(pUrl);

    const products = res.data;
    products.sort(descendingSort);
    return products;
  } catch (error) {
    return false;
  }
};

export default apiFetchProducts;
