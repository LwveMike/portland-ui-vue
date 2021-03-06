import axios from 'axios';

import io from 'socket.io-client';
import SocketEvents from './socketEvents';

const baseUrl = 'http://localhost:3000';

export const socket = io(baseUrl);

const pUrl = `${baseUrl}/products`;
const aUrl = `${baseUrl}/auth`;
const upUrl = `${baseUrl}/users-products`;

const descendingSort = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);

  if (dateA > dateB) {
    return -1;
  } if (dateA < dateB) {
    return 1;
  }
  return 0;
};

const ascendingPrice = (a, b) => {
  if (a.price > b.price) {
    return 1;
  } if (a.price < b.price) {
    return -1;
  }
  return 0;
};

const descendingPrice = (a, b) => {
  if (a.price > b.price) {
    return -1;
  } if (a.price < b.price) {
    return 1;
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

const apiFetchProductsWithFilters = async (filters) => {
  try {
    let products = await apiFetchProducts();

    // let products = res.data;

    if (filters.sorting === 'ascending') {
      products.sort(ascendingPrice);
    } else if (filters.sorting === 'descending') {
      products.sort(descendingPrice);
    }

    if (filters.type !== 'all') {
      products = products.filter((product) => product.type === filters.type);
    }

    if (filters.minprice !== undefined && filters.maxprice !== undefined) {
      products = products.filter((product) => product.price > filters.minprice
      && product.price < filters.maxprice);
    }

    if (filters.freeshipment) {
      products = products.filter((product) => product.shipment === 0);
    }

    if (filters.keywords !== '') {
      products = products.filter(
        (product) => product.name.toLowerCase().includes(filters.keywords.toLowerCase()),
      );
    }

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
    }, {
      withCredentials: true,
    });

    if (res.data.fullfilled) {
      return res.data;
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
    }, {
      withCredentials: true,
    });

    if (res.data.fullfilled) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
};

const apiCreateProduct = async (product) => {
  const res = await axios.post(upUrl, {
    product,
  }, {
    withCredentials: true,
  });

  if (res.data.fullfilled) {
    const productId = res.data.product.id.toString();
    socket.emit(SocketEvents.CREATE_PRODUCT, { productId });
  }

  return res.data;
};

const apiLogout = async () => {
  const res = await axios.delete(`${aUrl}/logout`, {
    withCredentials: true,
  });

  console.log('logged out', res);
};

const apiUpdateProduct = async (payload) => {
  const res = await axios.put(`${upUrl}/${payload.id}`, {
    product: payload.product,
  }, {
    withCredentials: true,
  });

  if (res.data.fullfilled) {
    const productId = res.data.product.id.toString();
    socket.emit(SocketEvents.UPDATE_PRODUCT, { productId });
    return res.data;
  }
  return false;
};

const apiDeleteProduct = async (payload) => {
  const res = await axios.delete(`${upUrl}/${payload.id}`, {
    withCredentials: true,
  });

  if (res.data.fullfilled) {
    const { productId } = res.data;
    socket.emit(SocketEvents.DELETE_PRODUCT, { productId });
  }

  return false;
};

export {
  apiFetchProducts,
  apiFetchResources,
  apiFetchUserData,
  apiLoginUser,
  apiRegisterUser,
  apiFetchProductsWithFilters,
  organize,
  apiCreateProduct,
  apiLogout,
  apiUpdateProduct,
  apiDeleteProduct,
};
