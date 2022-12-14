export let createCategory = async (userId, token, category) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/createCategory/${userId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    }
  );

  const data = await response.json();
  return data;
};

export const createBranch = async (userId, token, branch) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/createBranch/${userId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(branch),
    }
  );

  const data = await response.json();
  return data;
};

export const createProduct = async (userId, token, product) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/createProduct/${userId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: product,
    }
  );
  let data = await response.json();
  return data;
};

export let getCategories = async () => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/categories`, {
    method: "GET",
  });
  let data = await response.json();
  return data;
};

export const getCategory = async (categoryId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/adminCategory/${categoryId}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const getBranch = async (branchId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/adminBranch/${branchId}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const updateCategory = async (categoryId, userId, token, category) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/updateCategory/${categoryId}/${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    }
  );
  let data = await response.json();
  return data;
};

export const updateBranch = async (branchId, userId, token, branch) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/updateBranch/${branchId}/${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(branch),
    }
  );
  let data = await response.json();
  return data;
};

export const getBranches = async () => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/branches`, {
    method: "GET",
  });
  let data = await response.json();
  return data;
};

export const listOrders = async (userId, token,obj) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/order/list/${userId}?${obj}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};

export const getStatusValues = async (userId, token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/order/status-values/${userId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};

export const updateOrderStatus = async (userId, token, orderId, status) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/order/${orderId}/status/${userId}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status, orderId }),
    }
  );
  let data = await response.json();
  return data;
};

export const getProducts = async () => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/products?limit=undefined`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const deleteProduct = async (productId, userId, token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/deleteProduct/${productId}/${userId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};

export const deleteCategory = async (categoryId, userId, token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/deleteCategory/${categoryId}/${userId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};

export const deleteBranch = async (branchId, userId, token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/deleteBranch/${branchId}/${userId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};

export const getProduct = async (productId) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/adminProduct/${productId}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const updateProduct = async (productId, userId, token, product) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/updateProduct/${productId}/${userId}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: product,
    }
  );
  let data = await response.json();
  return data;
};
export const getComments = async (objPagi) => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/comments?${objPagi}`, {
    method: "GET",
  });
  let data = await response.json();
  return data;
};
export const deleteComment = async (commentId, userId, token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/deleteComment/${commentId}/${userId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};
export const addCommentTitle = async (commentId, userId, token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/addCommentTitle/${commentId}/${userId}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};
export const deleteCommentTitle = async (commentId, userId, token) => {
  const response = await fetch(
    `https://web-production-9f18.up.railway.app/api/deleteCommentTitle/${commentId}/${userId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await response.json();
  return data;
};
export const getCommentTitle = async () => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/commentTitle`, {
    method: "GET",
  });
  let data = await response.json();
  return data;
};
export const getStatisticalProduct = async(userId,token,month) => {
  const response = await fetch(`https://web-production-9f18.up.railway.app/api/statisticalProduct/${month}/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await response.json();
  return data;
}