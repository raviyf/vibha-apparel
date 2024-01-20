"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <div className="h-18 md:h-10 lg:h-10 px-2 pt-1 w-full text-sm font-optinonoy md:w-full lg:w-full md:text-lg lg:text-lg  bg-darkmaroon text-white text-center  align-middle">
        SHOP ABOVE 5000 INR FROM VIBHA TO AVAIL FREE DELIVERY ALL OVER INDIA
      </div>
      <header>
        <div className="relative h-20 md:h-16 2xl:pl-5 mx-auto duration-200 bg-slate-100 border-ui-border-base">
          <nav className="txt-xsmall-plus text-ui-fg-subtle flex items-center  justify-between w-full h-full text-small-regular">
            <div className="hidden 2xl:block justify-between">
              <a
                href="http://localhost:8000/store"
                className="py-4 px-2 font-optinonoy text-black   hover:text-gray-500 transition duration-300"
              >
                NEW IN
              </a>
              <a
                href="http://localhost:8000/store"
                className="py-4 px-2 text-black font-OPTINONOY   hover:text-gray-500 transition duration-300"
              >
                COLLECTIONS
              </a>

              <a
                href="http://localhost:8000/store"
                className="py-4 px-2 text-black font-OPTINONOY   hover:text-gray-500 transition duration-300"
              >
                SAREES
              </a>
              <a
                href="http://localhost:8000/store"
                className="pl-4 py-4 px-2 text-black font-OPTINONOY   hover:text-gray-500 transition duration-300"
              >
                READY TO WEAR
              </a>
              {/*<a
                href="http://localhost:8000/store"
                className="py-4 px-2 text-black font-OPTINONOY   hover:text-gray-500 transition duration-300"
              >
                BLENDS
  </a>*/}
              <a
                href="http://localhost:8000/"
                className="py-4 px-2 font-optinonoy text-black   hover:text-gray-500 transition duration-300"
              >
                JEWELLERY
              </a>
            </div>
            <div className="flex-1 basis-0 h-full flex items-center">
              <div className="2xl:hidden block">
                <Hamburger setOpen={toggle} />
              </div>
              {/*<div className="hidden md:block h-full">
                <SideMenu searchModalOpen={searchModalOpen} />
  </div>*/}
            </div>
            <div className="xl:pr-80 md:pr-64">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-2xl 2xl:pr-64 md:pl-64 font-holispay text-black uppercase md:text-2xl"
                >
                  Vibha
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-x-6 h-full font-optinonoy flex-1 basis-0 justify-end">
              <div className="hidden small:flex items-center gap-x-6 h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <DesktopSearchModal
                    state={searchModalState}
                    close={searchModalClose}
                    open={searchModalOpen}
                  />
                )}
                <Link
                  className="hover:text-ui-fg-base text-md "
                  href="/account"
                >
                  Account
                </Link>
              </div>
              <CartDropdown />
            </div>
          </nav>
          <MobileMenu />
        </div>
      </header>
    </div>
  )
}

export default Nav
