const baseUrl = "https://api.movies-mikhail.nomoredomainsrocks.ru";
// const baseUrl = "movies-mikhail.nomoredomainsrocks.ru";

export async function likeMovie(movie, token) {
  const res = await fetch(`${baseUrl}/movies/`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(movie),
  });
  if (res.ok) {
    const result = await res.json();
    return result;
  } else {
    throw new Error("Произошла ошибка");
  }
}

export async function dislikeMovie(id, token) {
  const res = await fetch(`${baseUrl}/movies/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (res.ok) {
    const result = await res.json();
    return result;
  } else {
    throw new Error("Произошла ошибка");
  }
}

export async function getLikeMovies(token) {
  const res = await fetch(`${baseUrl}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (res.ok) {
    const result = await res.json();
    return result;
  } else {
    throw new Error("Произошла ошибка");
  }
}

export function handleReg(user) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Произошла ошибка");
    }
  });
}
export function handleLogin(user) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Произошла ошибка");
    }
  });
}
export function getUserInfo(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Произошла ошибка");
    }
  });
}

export function editUserInfo(token, data) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Произошла ошибка");
    }
  });
}
