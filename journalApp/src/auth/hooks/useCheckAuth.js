import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../../store/authentication/slices/authSlice";
import { startLoadingNotes } from "../../store/journal/notes/notesThunk";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, name:displayName, photoURL }));
      dispatch(startLoadingNotes());
    });
  }, []);

  return {
    status
  }
};
