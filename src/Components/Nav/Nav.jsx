import { useState } from "react";
import { useAuth, useData } from "../../Contexts";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const { dispatch, searchValue, setSearchValue } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const { logoutHandler } = useAuth();
  const [appear, setAppear] = useState(false);
  const [appearFilter, setAppearFilter] = useState(false);

  return (
    <>
      {token && (
        <div className="nav-container nav-container-note">
          <div>
            <h1 className="logo">Note Buddy</h1>
          </div>

          <div class="navbarsearch">
            <input
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch({
                    type: "SEARCHFILTER",
                    payload: {
                      value: searchValue,
                    },
                  });
                }
              }}
              class="search__box"
              type="search"
              placeholder="Search by label ..."
            />
            <span class="search__icon">
              <i class="fas fa-search"></i>
            </span>
            {searchValue !== "" && (
              <span
                className="cross-icon"
                onClick={() => {
                  setSearchValue("");
                  dispatch({ type: "SEARCHRESET" });
                }}
              >
                <i class="fas fa-times"></i>
              </span>
            )}
            <div>
              <div className="filter-container">
                <p
                  className="filter-title"
                  onClick={() => setAppearFilter((prev) => !prev)}
                >
                  Sort by date <i class="fas fa-calendar-alt"></i>
                </p>
                <p
                  className="clear-filter"
                  onClick={() => {
                    setSearchValue("");
                    dispatch({ type: "CLEAR" });
                  }}
                >
                  Clear all filters
                </p>
                {appearFilter && (
                  <div className="radio-filters">
                    <div className="filter-element">
                      <input
                        value="newestFirst"
                        type="radio"
                        id="new"
                        name="radio-filter"
                        onClick={(e) =>
                          dispatch({
                            type: "DATEFILTER",
                            payload: e.target.value,
                          })
                        }
                      />
                      <label className="filter-label" htmlFor="new">
                        Newest First
                      </label>
                    </div>
                    <div className="filter-element">
                      <input
                        value="oldestFirst"
                        type="radio"
                        id="old"
                        name="radio-filter"
                        onClick={(e) =>
                          dispatch({
                            type: "DATEFILTER",
                            payload: e.target.value,
                          })
                        }
                      />
                      <label className="filter-label" htmlFor="old">
                        Oldest First
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="icons">
            <div className="user-icon-container">
              <p
                className="logout-text"
                style={{ display: appear ? "block" : "none" }}
                onClick={() => {
                  logoutHandler();
                  navigate("/");
                  setAppear((prev) => !prev);
                }}
              >
                Logout
              </p>
              <i
                className="fas fa-user icon"
                onClick={() => setAppear((prev) => !prev)}
              ></i>
            </div>

            <i className="fab fa-github icon"></i>
            <i className="fab fa-twitter icon"></i>
          </div>
        </div>
      )}
    </>
  );
};

export { Nav };
