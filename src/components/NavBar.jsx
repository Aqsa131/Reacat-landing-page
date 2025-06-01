import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import style from "../css/nav.module.css"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import logoImg from "../assets/makeup-logo-illustration-vector_327567-original-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import CartContext from "../context/CartContext"
import Dropdown from 'react-bootstrap/Dropdown';




const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'About', to: '/about', current: false },
  { name: 'Products', to: '/Products', current: false },
  { name: 'Services', to: '/services', current: false },
  { name: 'Contact', to: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const { cart } = useContext(CartContext)
  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  // just to make shure cart k button pe click hua ya nahy............
  const [showCart, setShowCart] = useState(false)

  return (
    <Disclosure as="nav" style={{ backgroundColor: '#1C1C1C' }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset">
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
            </Disclosure.Button>
          </div>

          {/* Logo & Desktop Nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-11 w-auto"
                src={logoImg}
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - cart + Profile */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Dropdown onClick={() => setShowCart(!showCart)} >
              <Dropdown.Toggle variant="success" id="dropdown-basic" disabled={cart.length === 0} >
                <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon={faCartPlus} />
                <span>{totalQuantity}</span>
              </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    {
                      cart.length > 0 ? (
                        <div className={style.cartItems}>
                          {
                            cart.map((items, index) => (
                              <div key={index}>
                                <span>{items.title}</span> &nbsp;&nbsp;&nbsp;
                                <span style={{ fontWeight: "bolder" }}>{items.price}</span>
                                <span>{items.stock}</span>
                              </div>
                            ))
                          }
                        </div>
                      ) : (
                        <div>No items in cart</div>
                      )
                    }
                  </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* </button> */}

            {/* Profile Dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                  <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Products
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Services
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Contact
                  </NavLink>
                </MenuItem>
                {/* <MenuItem>
                  <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </NavLink>
                </MenuItem> */}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
