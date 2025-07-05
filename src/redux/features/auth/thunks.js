import { fetch, fetchSinToken } from "../../../api/api";
import { _URL_DEV } from "../../../const/url";
import { setRegistroError, setRegistroRespuesta } from "./registerSlice";
import {
  setLoginErr,
  setLoadingLogin,
  storeUser,
  setLogged,
  setResponseReg,
} from "./userSlice";
import parseJwt from "../../../utils/parseJwt";
import { consLogged } from "../../../const/consLogged";


export const startLogin = (body) => {
  return async (dispatch) => {
    dispatch(setLoginErr(null));
    dispatch(setLoadingLogin());

    try {
      const r = await fetchSinToken("post", `${_URL_DEV}/Login`, {
        app: "AppComprador",
        ...body,
      });
      
      if (r.ok) {
        localStorage.setItem("token", r.data.data);
        dispatch(storeUser(parseJwt(r.data.data)));
        dispatch(setLogged(consLogged.LOGGED));
      } else {
        console.log({ r });
        if (!r.response || r.response.status === 500) {
          dispatch(setLoginErr("Error en servidor"));
        } else if (r.response.status === 400) {
          dispatch(setLoginErr(r.response.data));
        }
        dispatch(setLogged(consLogged.NOTLOGGED));
      }
    } catch (error) {
      console.error("Error en login:", error);
      dispatch(setLoginErr("Error de conexión"));
      dispatch(setLogged(consLogged.NOTLOGGED));
    }
  };
};

export const startRefreshToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(setLogged(consLogged.NOTLOGGED));
      return;
    }

    try {
      dispatch(storeUser(parseJwt(token)));
      dispatch(setLogged(consLogged.LOGGED));
      
      const r = await fetchSinToken("post", `${_URL_DEV}/Login/Refresh`, {
        token,
        app: "AppComprador",
      });

      if (r.ok) {
        localStorage.setItem("token", r.data.data);
        dispatch(storeUser(parseJwt(r.data.data)));
        dispatch(setLogged(consLogged.LOGGED));
      } else {
        dispatch(setLogged(consLogged.NOTLOGGED));
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      dispatch(setLogged(consLogged.NOTLOGGED));
      localStorage.removeItem("token");
    }
  };
};

export const startRegistro =(body)=>{
  return async dispatch => {
    const res = await fetch('post', `${_URL_DEV}/Actions/PostPreComprador`,{
      app:'',
      ...body
    });
    if (res.ok) {
      dispatch(setRegistroRespuesta(res.data));
    }else {
      if (!res.response || res.response.status == 500);
      dispatch(setRegistroError("Error en servidor"));
      if (res.response.status == 400) dispatch(setRegistroError(res.response.data));
    }
  };
};
