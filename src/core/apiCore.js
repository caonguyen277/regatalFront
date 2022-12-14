import queryString from "query-string";
// import { API } from "../config";

export const getProducts = async (sortBy) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/products?sortBy=${sortBy}&order=desc&limit=8`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const getCategories = async () => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/categories`, {
    method: "GET",
  });
  let data = await response.json();
  console.log("data");
  return data;
};

export const getBranches = async () => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/branches`, {
    method: "GET",
  });
  let data = await response.json();
  return data;
};

export const getFilteredProducts = async (skip, limit, filters = {}) => {
  const values = {
    limit,
    skip,
    filters,
  };
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  let data = await response.json();
  return data;
};

export const list = async (params) => {
  const query = queryString.stringify(params);
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/search?${query}`, {
    method: "GET",
  });
  let data = await response.json();
  return data;
};

export const read = async (productId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/adminProduct/${productId}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const listCategoryRelated = async (productId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/relatedCategory/${productId}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const listBranchRelated = async (productId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/relatedBranch/${productId}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const getBraintreeClientToken = async (userId, token) => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/getToken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await response.json();
  return data;
};

export const processPayment = async (userId, token, payment) => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/payment/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payment),
  });
  let data = await response.json();
  return data;
};

export const createOrder = async (userId, token, createOrder) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/order/create/${userId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order: createOrder }),
    }
  );
  let data = await response.json();
  return data;
};
export const apiListComment = async(productId,objPagi) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/comments/${productId}?${objPagi}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
}
export const createComment = async (dataComment,token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/createComment/${dataComment.user}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataComment),
    }
  );
  let data = await response.json();
  return data;
};
export const apiDeleteComment = async (comment,token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/deleteComment/${comment.user._id}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comment),
    }
  );
  let data = await response.json();
  return data;
};

export const apiListFavourite = async(userId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/favourites/${userId}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
}
export const apiAddFavourite = async (productId,userId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/addFavourite/${productId}/${userId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};
export const apiSubFavourite = async (productId,userId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/subFavourite/${productId}/${userId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};
export const apiCheckOrder = async (productId,userId,token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/checkOrder/${userId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({productId: productId}),
    }
  );
  let data = await response.json();
  return data;
};