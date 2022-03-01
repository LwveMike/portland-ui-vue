import axios from 'axios';

const pUrl = 'http://localhost:3000/products';
const aUrl = 'http://localhost:3000/auth';

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

const organize = (products, domain) => {
  const organized = new Map();

  for (let i = 0; i < products.length; i += 1) {
    if (organized.has(products[i][domain])) {
      organized.set(products[i][domain], organized.get(products[i][domain]) + 1);
    } else {
      organized.set(products[i][domain], 1);
    }
  }

  return organized;
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

const apiFetchResources = async () => {
  const products = await apiFetchProducts();

  if (products) {
    const brandsAndCount = organize(products, 'brand');
    const conditions = organize(products, 'condition');

    const brands = new Map([...brandsAndCount.entries()].sort((a, b) => b[1] - a[1]));

    return {
      products,
      brands,
      conditions,
    };
  }
  return false;
};

const apiFetchUserData = async () => {
  try {
    const res = await axios.get(`${aUrl}/get-user-data`, {
      withCredentials: true,
    });

    if (res.data !== undefined) {
      return res.data;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const apiLoginUser = async (payload) => {
  try {
    const res = await axios.post(`${aUrl}/login`, {
      username: payload.username,
      password: payload.password,
    });

    if (res.data.fullfilled) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const apiRegisterUser = async (payload) => {
  try {
    const res = await axios.post(`${aUrl}/register`, {
      username: payload.username,
      password: payload.password,
    });

    if (res.data.fullfilled) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export {
  apiFetchProducts,
  apiFetchResources,
  apiFetchUserData,
  apiLoginUser,
  apiRegisterUser,
};
