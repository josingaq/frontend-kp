"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  Cog8ToothIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  {
    name: "Teams",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "General", href: "#" },
      { name: "Finanzas", href: "#" },
      { name: "Marketing", href: "#" },
      { name: "Voluntarios", href: "#" },
      { name: "Potencial Humano", href: "#" },
    ],
  },
  {
    name: "Projects",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
  {
    name: "Pages",
    icon: GlobeAltIcon,
    current: false,
    children: [
      { name: "Roles", href: "#" },
      { name: "Teams", href: "#" },
      { name: "Marketing", href: "#" },
      { name: "Login", href: "#" },
      { name: "404", href: "#" },
    ],
  },
  {
    name: "Configuración",
    icon: Cog8ToothIcon,
    current: false,
    children: [
      { name: "Roles", href: "#" },
      { name: "Teams", href: "#" },
      { name: "Marketing", href: "#" },
      { name: "Voluntarios", href: "#" },
      { name: "Temas", href: "#" },
    ],
  },
];

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

export function Siderbar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto  border-r bg-white px-6 shadow-lg ">
      <div className="flex h-16 shrink-0 items-center justify-center gap-4">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <a>Asociación KP</a>
        {/* <button className="absolute right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 bg-black text-white rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button> */}
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-slate-100"
                          : "hover:border-l-4 hover:border-cyan-400 hover:bg-slate-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700"
                      )}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0 text-gray-500"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? "bg-gray-500"
                                : "hover:border-l-4 hover:border-cyan-400 hover:bg-slate-50",
                              "flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700"
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0 text-gray-500"
                              aria-hidden="true"
                            />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? "rotate-90 text-gray-500"
                                  : "text-gray-400",
                                "ml-auto h-5 w-5 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                {/* 44px */}
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    "hover:bg-gray-50",
                                    "ml-3 block rounded-r-lg border-l py-2 pr-2 text-sm leading-6 text-gray-700 before:relative before:top-2 before:mr-2 before:border-t before:pr-5 before:content-['']"
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
