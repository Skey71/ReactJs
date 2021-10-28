import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

export function ProfilePage() {
    const profile = useSelector((state) => state.profile);
    import { useDispatch, useSelector } from "react-redux";
    import { Header } from "../components";
    import { toggleShowProfile, profileSelector } from "../store/profile";

    export function ProfilePage(props) {

        const { firstName, lastName, isVisibleProfile } =
            useSelector(profileSelector);

        const dispatch = useDispatch();
        const setShowName = useCallback(() => {
            dispatch({ type: "SHOWNAME" });
        }, [dispatch]);

        return (
    <>
      <div>
        <input
          type="checkbox"
          checked={profile.showName}
          value={profile.showName}
          onChange={setShowName}
        />
        <span>Show Name</span>
        {profile.showName && <div>{profile.name}</div>}
      </div>
    </>
    <div>
      <Header />

      <button onClick={() => dispatch(toggleShowProfile())}>
        toggle profile
      </button>

      {isVisibleProfile && (
        <>
          <h1>firstName: {firstName}</h1>
          <h1>lastName: {lastName}</h1>
        </>
      )}
    </div>
        );
    }