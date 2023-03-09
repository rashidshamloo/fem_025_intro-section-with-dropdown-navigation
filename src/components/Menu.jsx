import { useEffect, useState } from "react";

function Menu({ data }) {
  const downArrow = "images/icon-arrow-down.svg";
  const openIcon = "images/icon-menu.svg";
  const closeIcon = "images/icon-close-menu.svg";
  const [menuIcon, setMenuIcon] = useState(openIcon);
  // add event listener only once with useEffect hook
  useEffect(() => {
    window.addEventListener("click", (e) => {
      // if the clicked element is a menu button,
      // close all other menus except the one under the button (skipElement)
      let skipElement;
      if (e.target.classList.contains("drop-down-button")) {
        skipElement = e.target.nextSibling;
      }
      const elements = document.getElementsByClassName("drop-down-menu");
      for (let element of elements) {
        if (
          !element.classList.contains("invisible") &&
          element != skipElement
        ) {
          // hide the drop down menu
          element.classList.add("invisible");
          element.classList.add("opacity-0");
          element.classList.add("max-h-0");
          element.classList.remove("max-h-48");
          // rotate the arrow to point the opposite direction
          element.parentNode.children[0].children[0].classList.toggle(
            "rotate-180"
          );
          // remove highlight from the button text
          element.parentNode.children[0].classList.remove("text-almostBlack");
          // set aria-expanded attribute for the button to false
          element.parentNode.children[0].setAttribute("aria-expanded", "false");
        }
      }
    });
  }, []);
  function toggleSubMenu(element) {
    // get the drop down menu element
    const dropDownElement = element.nextSibling;
    // get the image element
    const imageElement = element.children[0];
    // toggle visibility of the drop down menu
    dropDownElement.classList.toggle("invisible");
    dropDownElement.classList.toggle("opacity-0");
    // toggle max height of the drop down menu
    if (dropDownElement.classList.contains("max-h-0")) {
      dropDownElement.classList.remove("max-h-0");
      dropDownElement.classList.add("max-h-48");
    } else {
      dropDownElement.classList.add("max-h-0");
      dropDownElement.classList.remove("max-h-48");
    }
    // rotate the arrow to point the opposite direction
    imageElement.classList.toggle("rotate-180");
    // add highlight (darker color) to button text
    element.classList.toggle("text-almostBlack");
    // toggle aria-expanded attribute for the button
    element.getAttribute("aria-expanded") === "true"
      ? element.setAttribute("aria-expanded", "false")
      : element.setAttribute("aria-expanded", "true");
  }
  function toggleMenu() {
    // get main menu element
    const mainMenu = document.getElementById("main-menu");
    // toggle visibility of the main menu
    mainMenu.classList.toggle("invisible");
    mainMenu.classList.toggle("opacity-0");
    if (mainMenu.classList.contains("left-full")) {
      mainMenu.classList.remove("left-full");
      mainMenu.classList.add("left-[36%]");
    } else {
      mainMenu.classList.add("left-full");
      mainMenu.classList.remove("left-[36%]");
    }
    // toggle button icon
    menuIcon === openIcon ? setMenuIcon(closeIcon) : setMenuIcon(openIcon);
    // toggle overlay
    const overlayElement = document.getElementById("overlay");
    overlayElement.classList.toggle("invisible");
    overlayElement.classList.toggle("opacity-0");
    // toggle scroll
    document.body.classList.toggle("overflow-y-hidden");
  }
  return (
    <>
      <div
        id="overlay"
        aria-hidden="true"
        className="bg-[hsla(0,0%,0%,0.6)] absolute inset-0 invisible transition-all duration-500 opacity-0"
        onClick={() => toggleMenu()}
      ></div>
      <div
        id="main-menu"
        className="bg-white overflow-hidden z-[2] invisible opacity-0 absolute left-full top-0 bottom-0 right-0 transition-all duration-500 items-center flex-1 md:visible md:inset-auto md:bg-inherit md:static md:flex md:overflow-visible md:opacity-100"
      >
        <ul className="flex flex-col  gap-y-3 mx-8 mt-20 mb-10 font-bold text-mediumGray md:flex-row md:gap-x-10 md:gap-y-0 md:m-0 md:text-sm">
          {
            // show menu items
            data.map((menuItem, index) => {
              const hasSubItems = menuItem.items?.length > 0 ? true : false;
              // if menu item has sub items (is a drop down menu) return a button and the sub menu
              // else return a simple <a> tag
              if (!hasSubItems)
                return (
                  <li key={index} className="mb-3 md:mb-0">
                    <a href={menuItem.link} className="hover:text-almostBlack">
                      {menuItem.text}
                    </a>
                  </li>
                );
              else
                return (
                  <li className="relative" key={index}>
                    <button
                      id={"menu-" + index + "-button"}
                      className="drop-down-button relative flex items-center gap-x-2 mb-3 outline-none md:mb-0 hover:text-almostBlack"
                      onClick={(e) => {
                        toggleSubMenu(e.target);
                      }}
                      aria-expanded="false"
                      aria-controls={"menu-" + index}
                    >
                      {menuItem.text}
                      {hasSubItems && (
                        <img
                          src={downArrow}
                          alt=""
                          aria-hidden="true"
                          className="transition-transform duration-300 pointer-events-none"
                        />
                      )}
                    </button>
                    {hasSubItems && (
                      <ul
                        aria-labelledby={"menu-" + index + "-button"}
                        id={"menu-" + index}
                        className="ml-5 drop-down-menu invisible bg-white rounded-xl w-max transition-all duration-500 opacity-0 max-h-0 overflow-hidden md:ml-0 md:px-6 md:py-2 md:shadow-[0_0.25rem_1rem_rgba(0,0,0,0.1)] md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-4"
                      >
                        {
                          // show sub menu items
                          menuItem.items.map((subItem, index) => {
                            return (
                              <li
                                className="my-4 flex gap-x-3 items-center md:my-3"
                                key={index}
                              >
                                {subItem.icon && (
                                  <img
                                    src={subItem.icon}
                                    alt=""
                                    aria-hidden="true"
                                  />
                                )}
                                <a
                                  href={subItem.link}
                                  className="hover:text-almostBlack"
                                >
                                  {subItem.text}
                                </a>
                              </li>
                            );
                          })
                        }
                      </ul>
                    )}
                  </li>
                );
            })
          }
        </ul>
        <div className="flex flex-col gap-y-5 w-4/5 mx-auto text-sm font-bold text-mediumGray md:mx-0 md:flex-row md:gap-y-0 md:gap-x-10 md:w-auto md:ml-auto">
          <button className="hover:text-almostBlack">Login</button>
          <button className="rounded-xl border-mediumGray border-2 py-2 px-5 hover:border-almostBlack hover:text-almostBlack">
            Register
          </button>
        </div>
      </div>
      <button
        aria-controls="main-menu"
        onClick={() => toggleMenu()}
        aria-label="Main Menu"
        aria-expanded="false"
        className="z-10 md:hidden"
      >
        <img
          src={menuIcon}
          alt="Menu"
          aria-hidden="true"
          className="pointer-events-none"
        />
      </button>
    </>
  );
}

export default Menu;
